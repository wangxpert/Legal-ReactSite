import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/*
const programSchema = new Schema({
  name: { type: 'String', default: '', required: true },
  start: { type: 'String', default: 'action_1', required: true },
  node: [{
      id: String,
      type: String, // 'RESULT', 'QUESTION', 'ACTION'
      content: {
        question: String,
        decision: [
          {
            answer: String,
            next: String,
            action: String
          }
        ]
      },
      action: {
        type: String,
        value: Number,
        next: String
      },
      result: {
        description: String
      }
    }]
});*/

const programSchema = new Schema({
  name: { type: 'String', default: '', required: true },
  start: { type: 'String', default: 'action_1', required: true },
  description: { type: 'String', default: '', required: true },
  node: Array
});

export default mongoose.model('Program', programSchema);
