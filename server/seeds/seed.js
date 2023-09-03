const db = require('../config/connection');
const { User, Review, Status } = require('../models');
const cleanDB = require('./cleanDB.js');
const userData = require('./userData.json');
const reviewData = require('./reviewData.json');
const statusData = require('./statusData.json'); // Assuming you have a statusData file

db.once('open', async () => {
  try {
    await cleanDB("User", "user");
    await cleanDB("Review", "review");
    await cleanDB("Status", "status");

    await User.insertMany(userData);
    await Status.insertMany(statusData);
    await Review.insertMany(reviewData);

    console.log('Seed data inserted successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    process.exit(0);
  }
});

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
