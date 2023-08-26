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
            }
        },
    };

module.exports = resolvers; 