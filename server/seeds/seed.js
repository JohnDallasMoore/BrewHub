const db = require('../config/connection');

const { User, Review } = require('../models');

// const cleanDB = require('./cleanDB');

const userData = require('./userData.json');

const reviewData = require('./reviewData.json');

db.once('open', async () => {
    // await cleanDB("User", "user");
    // await cleanDB("Review", "review");

    const users = await User.insertMany(userData);

    const reviews = await Review.insertMany(reviewData);

    console.log('all done!');
    process.exit(0);
});

