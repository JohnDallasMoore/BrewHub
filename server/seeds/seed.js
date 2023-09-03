const db = require('../config/connection');

const { User, Review, Status } = require('../models');

const cleanDB = require('./cleanDB');

const userData = require('./userData.json');

const reviewData = require('./reviewData.json');

const statusData = require('./statusData.json');

db.once('open', async () => {
    await cleanDB("User", "user");
    await cleanDB("Review", "review");
    await cleanDB("Status", "status");

    await User.insertMany(userData);

    await Status.insertMany(statusData);

    await Review.insertMany(reviewData);

    console.log('all done!');
    process.exit(0);
});

