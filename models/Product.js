import mongoose from "mongoose"

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  imageId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  carts: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Cart'
    }
  ],
  isActive: {
    type: Boolean,
    default: true,
  },
}, {collection: "Product"});

export const Product = mongoose.model('Product', productSchema);
