import { Router } from 'express';
import { getTasks } from '../controller/taskController.js';

const router = Router();
router.route('/').get(getTasks);

export default router;
