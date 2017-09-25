import { Router } from 'express'
import * as PayController from '../controllers/pay.controller'

const router = new Router();

router.route('/').post(PayController.buy);

router.route('/customers').post(PayController.retrieveCustomer)
router.route('/customers/cards').post(PayController.createCustomerCard)
router.route('/transactions/save').post(PayController.saveTransaction)
router.route('/outputs/sendbyemail').post(PayController.sendOutputByEmail)

export default router;
