const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

router.get('/', async (req, res) => {
  const location = req.query.location || '';
  const jobs = await Job.find({
    location: { $regex: location, $options: 'i' }
  });
  res.json(jobs);
});

module.exports = router;
