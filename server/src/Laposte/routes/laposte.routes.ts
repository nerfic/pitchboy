import express from 'express';
import * as controller from '../controllers';

const router = express.Router();

router.get('/', controller.getAllLaposte);

export default router;
