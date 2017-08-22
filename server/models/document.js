import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const documentSchema = new Schema({
  kind: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  userId: {
    type: String,
    required: true
  },
  store: Schema.Types.Mixed,
  updated: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Document', documentSchema);
