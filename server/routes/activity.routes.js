import { Router } from 'express';
import * as ActivityController from '../controllers/activity.controller';
const router = new Router();

router.route('/').get(ActivityController.getActivities);

router.route('/:activityId').get(ActivityController.getActivity);

router.route('/').post(ActivityController.addActivity);

router.route('/:activityId').put(ActivityController.updateActivity);

router.route('/:activityId').delete(ActivityController.deleteActivity);

export default router;
