const db = require('../config/connection');

const { User, Review, Status } = require('../models');

const cleanDB = require('./cleanDB');

const userData = require('./userData.json');

const reviewData = require('./reviewData.json');

db.once('open', async () => {
    await cleanDB("User", "user");
    await cleanDB("Review", "review");
    await cleanDB("Status", "status");

    const users = await User.insertMany(userData);

    const statuses = await Status.insertMany(statusData);

    const reviews = await Review.insertMany(reviewData);

    console.log('all done!');
    process.exit(0);
});

