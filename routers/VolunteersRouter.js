import express from 'express';
const router = express.Router()
import controller from '../controllers/VolunteersControllers.js';

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.post('/', controller.insert);

export default router;
