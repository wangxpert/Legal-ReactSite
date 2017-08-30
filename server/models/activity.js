import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    default: ''
  },
  program: {
    name: String,
    description:  String,
    kind: String
  },
  description: {
    type: String,
    default: ''
  },
  history: {
    type: Array,
    default: ''
  },
  progress: {
    type: Number,
    default: 0
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Activity', activitySchema);
