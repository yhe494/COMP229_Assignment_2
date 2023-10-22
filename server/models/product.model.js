import mongoose from 'mongoose'
//const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
 name: String,
 description: String,
 price: Number,
 category: String})

//module.exports = mongoose.model('User', UserSchema);
export default mongoose.model('product', productSchema);

