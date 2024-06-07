import mongoose from "mongoose"

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['ADMIN', 'CUSTOMER'],
    required: true,
  },
  carts: [{
    type: Schema.Types.ObjectId,
    ref: 'Cart',
  }],
  isActive: {
    type: Boolean,
    default: true,
  },
}, {collection: "User"});

export const User = mongoose.model('User', userSchema);
