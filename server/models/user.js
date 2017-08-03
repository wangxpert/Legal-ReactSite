import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  provider: {
    type: String,
    default: 'local',
    required: true
  },

  id: {
    type: String,
    unique: true
  },

  displayName: {
    type: String,
    trim: true,
  },

  name: {
    familyName: {
      type: String,
      trim: true,
      default: ''
    },
    givenName: {
      type: String,
      trim: true,
      default: ''
    },
    middleName: {
      type: String,
      trim: true,
      default: ''
    }
  },

  emails: [{ value: String, kind: String }],

  phone: {
    type: String,
    default: ''
  },

  address: {
    type: String,
    default: ''
  },

  memberShip: {
    type: String,
    default: 'free',
    enum: ['free', 'premium']
  },

  password: {
    type: String
  },

  profileImageURL: {
    type: String,
    default: ''
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
