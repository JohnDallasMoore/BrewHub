// const { Insert, Model, Names, Here } = require('../models);

const { Users, Review } = require("../models");

const resolvers = {
    Query: {
        users: async () => {
            return await Users.find({});
        },

        statuses: async () => {
            return await Status.find({}).populate('comments');
        },

        reviews: async () => {
            return await Review.find({}).populate('comments');
        },

        comments: async () => {
            return await Comment.find({});
        }

    }
}

module.exports = resolvers; 