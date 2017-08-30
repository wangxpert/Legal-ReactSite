import { Router } from 'express';
import * as ActivityController from '../controllers/activity.controller';
const router = new Router();

router.route('/').get(ActivityController.getActivities);

router.route('/:docId').get(ActivityController.getActivity);

router.route('/').post(ActivityController.addActivity);

router.route('/:docId').delete(ActivityController.deleteActivity);

export default router;
