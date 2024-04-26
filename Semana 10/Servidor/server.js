const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/products', require('./routes/productRoutes'));

mongoose.connect(process.env.MONGO)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
