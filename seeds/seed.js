const sequelize = require('../config/connection');
const User = require('../models/User');

const userData = require('./trailData.json');
const users = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  const userNames = await User.bulkCreate(users, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();