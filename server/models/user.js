import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  provider: {
    type: String,
    default: 'local',
    required: true
  },
  id: {
    type: String
  },
  displayName: {
    type: String,
    default: ''
  },
  name: {
    familyName: String,
    givenName: String,
    middleName: String
  },
  emails: [{ value: String, kind: String }],
  password: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
});

userSchema.methods.validPassword = function(password) {
  return password == this.password;
}

export default mongoose.model('User', userSchema);
