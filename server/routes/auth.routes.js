import { Router } from 'express'
import * as authController from '../controllers/auth.controller'
const router = new Router()

export default function(passport) {
  // Get one program by name
  router.route('/login')
    .post(passport.authenticate('local', { failureRedirect: '/api/auth/login_failure'}),
        authController.loginSuccess)

  router.get('/login_failure', authController.loginFailure)

  // Register new User
  router.route('/register').post(authController.register)

  // Facebook Login
  router.post('/facebook', authController.facebook)

  // Google Login
  router.post('/google', authController.google)

  // Log out
  router.get('/logout', authController.logout)

  // Get Profile
  router.get('/profile', authController.getUser)

  // Update name
  router.put('/name', authController.updateName)

  // Update email
  router.put('/email', authController.updateEmail)

  // Update address
  router.put('/address', authController.updateAddress)

  // Update phone
  router.put('/phone', authController.updatePhone)

  // Update password
  router.put('/password', authController.updatePassword)

  return router
}
