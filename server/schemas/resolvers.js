// const { Insert, Model, Names, Here } = require('../models);

const { User, Review } = require("../models");

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({});
        },

        statuses: async () => {
            return await Status.find({});
        },

        reviews: async () => {
            return await Review.find({});
        },

        comments: async () => {
            return await Comment.find({});
        }

    }
}

module.exports = resolvers; 