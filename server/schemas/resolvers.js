const { User, Review, Status, Comment, Badge } = require("../models");
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');



const imageHandler = require('./imageHandler');

const {
    S3_REGION,
    S3_BUCKET_NAME
} = process.env;

const resolvers = {

    Query: {
        me: async (_, {}, context) => {
            if (context.user) {
                const user = await User.findOne({ _id: context.user._id })
                    .populate('statuses') // Populate the statuses field
                    .populate('reviews')  // Populate the reviews field
                    .populate('comments') // Populate the comments field
                    .populate('badges');  // Populate the badges field

                // Extract the relevant fields from the user object
                const {
                    _id,
                    firstName,
                    lastName,
                    email,
                    statuses,
                    reviews,
                    comments,
                    badges,
                } = user;

                return {
                    _id,
                    firstName,
                    lastName,
                    email,
                    statuses,
                    reviews,
                    comments,
                    badges,
                };
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        users: async () => {
            return await User.find({});
        },

        getUserById: async (_, { id }) => {
            return await User.findById(id);
        },

        statuses: async () => {
            return await Status.find({});
        },

        getStatusById: async (_, { id }) => {
            return await Status.findById(id);
        },

        reviews: async () => {
            return await Review.find({});
        },

        getReviewById: async (_, { id }) => {
            return await Review.findById(id);
        },

        comments: async () => {
            return await Comment.find({});
        },

        getCommentById: async (_, { id }) => {
            return await Comment.findById(id);
        }
    },
    User: {
        statuses: async (user) => {
          // Fetch and return the statuses associated with the user
          return await Status.find({  user: user._id  });
        },
        reviews: async (user) => {
          // Fetch and return the reviews associated with the user
          return await Review.find({  user: user._id  });
        },
        comments: async (user) => {
            return await Comment.find({ user: user._id });
        },
        badges: async (user) => {
            return await Badge.find({ user: user._id });
        },
    },
    Status: {
        // Define resolvers for status-related fields here if needed
        user: async (status) => {
          // Example resolver for fetching the user associated with a status
          return await User.findById(status.user);
        },
        comments: async (status) => {
          // Define a resolver to fetch comments related to this status
          return await Comment.find({ status: status._id });
        },
    },
    Review: {
        // Define resolvers for review-related fields here if needed
        user: async (review) => {
          // Example resolver for fetching the user associated with a review
          return await User.findById(review.user);
        },
        comments: async (review) => {
          // Define a resolver to fetch comments related to this review
          return await Comment.find({ review: review._id });
        },
    },
    Comment: {
        // Define resolvers for comment-related fields here if needed
        user: async (comment) => {
          // Example resolver for fetching the user associated with a comment
          return await User.findById(comment.user);
        },
        review: async (comment) => {
          // Define a resolver to fetch the review associated with a comment
          return await Review.findById(comment.review);
        },
        status: async (comment) => {
          // Define a resolver to fetch the status associated with a comment
          return await Status.findById(comment.status);
        },
    },
    Badge: {
        // Define resolvers for badge-related fields here if needed
        user: async (badge) => {
          // Example resolver for fetching the user associated with a badge
          return await User.findById(badge.user);
        },
    },
    Mutation: {
        addUser: async (_, { firstName, lastName, password, email }) => {
            const user = await User.create({ firstName, lastName, password, email });
            const token = signToken(user)

            return { token, user }
        },
        login: async (_, { email, password }) => {
            const user = await User.findOne({ email });
            console.log(user);
            if (!user) {
                throw new AuthenticationError('No user found with this email address')
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password')
            }

            const token = signToken(user);
            return { token, user };
        },

        addStatus: async (_, {
            content,  likes
        }) => {
            return await Status.create({ content, likes });
        },

        addReview: async (_, {
             title, content, rating, likes }) => {
            // const { stream, filename, mimetype, encoding } = await file;
            // console.log(stream);
            // const imageKey = userId + fileName;
            
            const { _id } = await Review.create({ title, content, rating, likes});
            // const bucketHandler = new imageHandler(S3_BUCKET_NAME, S3_REGION);

            // await bucketHandler.uploadImage(file, imageKey);

            return { _id, title, content, rating, likes }
        },
        addComment: async (_, { content }) => {
            return await Comment.create({ content });
        },
        updateUser: async (_, { id, firstName, lastName, password, email }) => {
            // Find and update the matching class using the destructured args
            return await User.findOneAndUpdate(
                { _id: id },
                { firstName },
                { lastName },
                { password },
                { email },
                // Return the newly updated object instead of the original
                { new: true }
            );
        },
        updateReview: async (_, { id, title, content }) => {
            // Find and update the matching class using the destructured args
            return await Review.findOneAndUpdate(
                { _id: id },
                { title },
                { content },
                // Return the newly updated object instead of the original
                { new: true }
            );
        },
        updateComment: async (_, { id, content }) => {
            // Find and update the matching class using the destructured args
            return await Comment.findOneAndUpdate(
                { _id: id },
                { content },
                // Return the newly updated object instead of the original
                { new: true }
            );
        },
    },
};

module.exports = resolvers;

//uploadImage (userID, fileBlob--array of bytes)
/**
 * Transform from the client to something that's easy and secure to send to the server
 *
 * File needs to get read on the client side, because that's when we have access to the fs
 */

//downloadImage ()

//keep the s3 operations and the db operations separate

//review model has a field for 'uploads' -- a list of keys referenced to retrieve 

//refactor -- get rid of the separate mutation for uploading the image, add a variable to the uploadReview mutation that contains the dollar sign image data of type file, and attach that image data when we call that mutation for adding a review 