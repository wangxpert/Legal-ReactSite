import mongoose from 'mongoose';
const Schema = mongoose.Schema;

import bcrypt from 'bcrypt-nodejs'

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

  email: {
    type: String,
    unique: true
  },

  phone: {
    type: String,
    default: ''
  },

  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String
  },

  memberShip: {
    type: String,
    default: 'free',
    enum: ['free', 'premium']
  },

  password: {
    type: String
  },

  photo: {
    type: String,
    default: ''
  },

  occupation: {
    type: String,
    default: ''
  },

  customerId: {
    type: String,
    default: ''
  },

  created: {
    type: Date,
    default: Date.now
  }
});

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

export default mongoose.model('User', userSchema);
