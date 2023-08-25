const db = require('../config/connection');

const { Users } = require('../models');

const cleanDB = require('./cleanDB');

const userData = require('./userData.json');

db.once('open', async () => {
    await cleanDB("Users", "users");

    const users = await Users.insertMany(userData);

    console.log('all done!');
    process.exit(0);
});

