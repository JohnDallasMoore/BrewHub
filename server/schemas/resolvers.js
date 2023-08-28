// const { Insert, Model, Names, Here } = require('../models);

const { User, Review, Status, Comment } = require("../models");

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({});
        },

        getUserById: async (_, {id}) => {
            return await User.findById(id);
        },

        statuses: async () => {
            return await Status.find({});
        },

        getStatusById: async (_, {id}) => {
            return await Status.findById(id);
        },

        reviews: async () => {
            return await Review.find({});
        },

        getReviewById: async (_, {id}) => {
            return await Review.findById(id);
        },

        comments: async () => {
            return await Comment.find({});
        },

        getCommentById: async(_, {id}) => {
            return await Comment.findById(id);
        }
    },

    Mutation: {
        addUser: async(parent, {
            firstName, lastName, password, email }) => {
                return await User.create({firstName, lastName, password, email});
            },
        
        addStatus: async(parent, {
            content, image, likes
        }) => {
            return await Status.create({content, image, likes});
        },

        addReview: async(parent, {
            title, content, rating, image, likes}) => {
                return await Review.create({title, content, rating, image, likes});
            },
        addComment: async(parent, {
            content}) => {
                return await Comment.create({content});
            },
        updateUser: async (parent, { id,firstName, lastName, password, email}) => {
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
        updateReview: async (parent, { id, tittle, content}) => {
             // Find and update the matching class using the destructured args
            return await Review.findOneAndUpdate(
                { _id: id },
                { tittle }, 
                { content}, 
                // Return the newly updated object instead of the original
                { new: true }
                );
            },  
        updateComment: async (parent, {content}) => {
             // Find and update the matching class using the destructured args
            return await Comment.findOneAndUpdate(
                { _id: id },
                { content}, 
                // Return the newly updated object instead of the original
                { new: true }
                );
            },  
        },
    };

module.exports = resolvers; 