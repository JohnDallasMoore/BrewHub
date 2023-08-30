// const { Insert, Model, Names, Here } = require('../models);

const { User, Review, Status, Comment } = require("../models");
const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
    Query: {
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

            if (!user) {
                throw AuthenticationError
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError
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
            title, content, rating, image, likes }) => {
            return await Review.create({ title, content, rating, image, likes });
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
        updateReview: async (parent, { id, tittle, content }) => {
            // Find and update the matching class using the destructured args
            return await Review.findOneAndUpdate(
                { _id: id },
                { tittle },
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
        },
        removeUser: async (parent, { UserId }) => {
            return User.findOneAndDelete(
                { _id: UserId }
            );
        },
        //TODO: REMOVE COMMENTS AND POST 
        removeComment: async (parent, { commentId }) => {
            return Comment.findOneAndDelete(
                { _id: commentId },
            );
        },
        removeReview: async (parent, { ReviewId }) => {
            return Review.findOneAndDelete(
                { _id: ReviewId },
            );
        },
    },
};

module.exports = resolvers; 