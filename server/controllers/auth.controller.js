import User from '../models/user';
import passport from 'passport';

/**
 * Login a User
 */

function social(provider, req, res) {
  const info = req.body[provider];

  User.findOne({id: info.id, provider: provider})
    .then(user => {
      if (user) {
        return user;

      } else {
        const newUser = User({
          provider: provider,
          id: info.id,
          emails: [
            {
              value: info.email
            }
          ],

          name: {
            familyName: info.familyName,
            givenName: info.givenName
          },

          photo: info.photo
        })

        return newUser.save();
      }
    })
    .then(user => {
      req.login(user, function(err) {
        if (err) loginFailure(req, res);
        loginSuccess(loginSuccess(req, res));
      });
    });
}

export function google(req, res) {
  social('google', req, res);
}

export function facebook(req, res) {
  social('facebook', req, res);
}

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
    provider: 'local',
    id: req.body.email,
    emails: [
      {
        value: req.body.email
      }
    ],

    name: {
      familyName: req.body.lastName,
      givenName: req.body.firstName
    },

    password: req.body.password
  });

  newUser.save()
    .then( user => res.status(201).json({ status: 201, message: 'User Registered Successfully !', user: user }) )
    .catch( err => {
      if (err.code == 11000) {
        res.status(409).json({ status: 409, message: 'The User Already Registered !' });
      } else {
        res.status(500).json({ status: 500, message: 'Internal Server Error !', err: err });
      }
    });
}

export function logout(req, res) {
  req.logout();
  res.status(200).json({ status: 200, message: 'Logout' });
}
