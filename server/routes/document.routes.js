import { Router } from 'express';
import * as DocController from '../controllers/document.controller';
const router = new Router();

router.route('/').get(DocController.getDocuments);

router.route('/:docId').get(DocController.getDocument);

router.route('/').post(DocController.addDocument);

router.route('/:docId').delete(DocController.deleteDocument);

export default router;
