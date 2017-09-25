import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const paySchema = new Schema({
  transactionId: {
    type: String,
    required: true
  },
  doc: {
    type: String,
    default: ''
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Pay', paySchema);
