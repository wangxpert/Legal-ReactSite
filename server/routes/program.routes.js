import { Router } from 'express';
import * as ProgramController from '../controllers/program.controller';
const router = new Router();

// Get one program by name
router.route('/:name').get(ProgramController.get);

// Add a new program
router.route('/').post(ProgramController.add);

// Delete a program by name
router.route('/:name').delete(ProgramController.remove);

export default router;
