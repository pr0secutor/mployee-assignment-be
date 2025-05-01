const mongoose = require('mongoose');
const Job = require('./models/Job');
const data = require('./jobData.json');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Job.deleteMany();
  await Job.insertMany(data);
  console.log("Data imported");
  process.exit();
});
