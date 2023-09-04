// const { Insert, Model, Names, Here } = require('../models);

const { User, Review, Status, Comment } = require("../models");
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
                const { _id, firstName, lastName, email } =  await User.findOne({ _id: context.user._id });
                return { _id, firstName, lastName, email }
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

    Mutation: {
        addUser: async (parent, { firstName, lastName, password, email }) => {
            const user = await User.create({ firstName, lastName, password, email });
            const token = signToken(user)

            return { token, user }
        },
        login: async (parent, { email, password }) => {
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

        addStatus: async (parent, {
            content, image, likes
        }) => {
            return await Status.create({ content, image, likes });
        },

        addReview: async (parent, {
             title, content, rating }) => {
            // const { stream, filename, mimetype, encoding } = await file;
            // console.log(stream);
            // const imageKey = userId + fileName;
            const likes = 0;
            const { _id } = await Review.create({ title, content, rating, likes});
            // const bucketHandler = new imageHandler(S3_BUCKET_NAME, S3_REGION);

            // await bucketHandler.uploadImage(file, imageKey);

            return { _id, title, content, rating, likes }
        },
        addComment: async (parent, {
            content }) => {
            return await Comment.create({ content });
        },
        updateUser: async (parent, { id, firstName, lastName, password, email }) => {
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
        updateReview: async (parent, { id, title, content }) => {
            // Find and update the matching class using the destructured args
            return await Review.findOneAndUpdate(
                { _id: id },
                { title },
                { content },
                // Return the newly updated object instead of the original
                { new: true }
            );
        },
        updateComment: async (parent, { content }) => {
            // Find and update the matching class using the destructured args
            return await Comment.findOneAndUpdate(
                { _id: id },
                { content },
                // Return the newly updated object instead of the original
                { new: true }
            );
        }

    },
    // removeUser: async (_parent, { UserId }) => {
    //     return User.findOneAndDelete(
    //         { _id: userId }
    //     );
    // },
    // removeComment: async (parent, { commentId }) => {
    //     return Comment.findOneAndDelete(
    //         { _id: commentId },
    //     );
    // },
    // removeReview: async (parent, { ReviewId }) => {
    //     return Review.findOneAndDelete(
    //         { _id: ReviewId },
    //     );
    // },
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