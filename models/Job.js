const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  location: String,
  description: String,
  employmentType: String,
  postedDate: String,
  source: String,
  experience: String
});

module.exports = mongoose.model('Job', jobSchema);
