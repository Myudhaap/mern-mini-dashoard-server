import mongoose from "mongoose"

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  products: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
  ],
  isActive: {
    type: Boolean,
    default: true,
  },
}, {collection: "Category"});

export const Category = mongoose.model('Category', categorySchema);
