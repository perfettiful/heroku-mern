const mongoose = require('mongoose');
require("dotenv").config()

console.log("+++ Connecting to MONGODB\n", process.env.MONGODB_URI)
console.log("\n+++ Connecting to ENV\n", process.env)

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/deep-thoughts',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;