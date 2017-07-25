import { Router } from 'express';
import * as authController from '../controllers/auth.controller';
const router = new Router();

export default function(passport) {
  // Get one program by name
  router.route('/login')
    .post(passport.authenticate('local', { failureRedirect: '/api/auth/login_failure'}),
        authController.loginSuccess);

  router.get('/login_failure', authController.loginFailure);

  // Register new User.
  router.route('/register').post(authController.register);

  // Facebook Login
  router.get('/facebook', passport.authenticate('facebook', { scope : ['email'] }));

  router.get('/facebook/callback',
      passport.authenticate('facebook', { failureRedirect: '/api/auth/login_failure' }),
      authController.loginSuccess);

  // Google Login
  router.get('/google',
      passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile'] }));

  router.get('/google/callback',
      passport.authenticate('google', { failureRedirect: '/login' }),
      authController.loginSuccess);

  return router;
};
