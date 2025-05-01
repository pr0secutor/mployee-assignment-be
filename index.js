require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jobsRoute = require('./routes/jobs');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use('/api/jobs', jobsRoute);

app.listen(5000, () => console.log('Server running on port 5000'));
