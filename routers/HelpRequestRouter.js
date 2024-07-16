import express from 'express';
const router = express.Router()
import controller from '../controllers/HelpRequestControllers.js';

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.put('/:id', controller.update);

export default router;
