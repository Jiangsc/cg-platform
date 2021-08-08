import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema({
  name: {type: String, unique: true, require: true},
  brand: String,
  price: Number,
  stock: Number,
  image: String
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;