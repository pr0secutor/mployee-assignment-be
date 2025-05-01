const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

router.get('/', async (req, res) => {
  const location = req.query.location || '';
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const query = {
    location: { $regex: location, $options: 'i' }
  };

  const jobs = await Job.find(query).skip(skip).limit(limit);
  const total = await Job.countDocuments(query);

  res.json({ jobs, total });
});


module.exports = router;
