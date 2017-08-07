import { Router } from 'express';
import * as authController from '../controllers/auth.controller';
const router = new Router();

export default function(passport) {
  // Get one program by name
  router.route('/login')
    .post(passport.authenticate('local', { failureRedirect: '/api/auth/login_failure'}),
        authController.loginSuccess);

  router.get('/login_failure', authController.loginFailure);

  // Register new User
  router.route('/register').post(authController.register);

  // Facebook Login
  router.post('/facebook', authController.facebook);

  // Google Login
  router.post('/google', authController.google);

  return router;
};
