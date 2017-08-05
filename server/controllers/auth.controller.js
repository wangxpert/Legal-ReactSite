import User from '../models/user';
import passport from 'passport';

/**
 * Login a User
 */
export function loginSuccess(req, res) {
  //login process is done by passport.authenticate, so we only send success message here.
  res.status(200).json({ status: 200, message: 'Login Successfully !', user: req.user });
}

export function loginFailure(req, res) {
  res.status(400).json({ status: 400, message: 'Login Failure !' });
}

/**
 * Register a User
 */
export function register(req, res) {

  const newUser = new User({
    id: req.body.email,

    emails: [
      {
        value: req.body.email
      }
    ],

    name: {
      familyName: req.body.firstName,
      givenName: req.body.lastName
    },

    password: req.body.password
  });

  newUser.save()
    .then( user => res.status(201).json({ status: 201, message: 'User Registered Successfully !', user: user }) )
    .catch( err => {
      if (err.code == 11000) {
        res.status(409).json({ status: 409, message: 'The User Already Registerd !' });
      } else {
        res.status(500).json({ status: 500, message: 'Internal Server Error !', err: err });
      }
    });
}
