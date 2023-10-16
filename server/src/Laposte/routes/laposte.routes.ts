import express from 'express';
import * as controller from '../controllers';

const router = express.Router();

router.get('/all-cities', controller.getAllCities);

export default router;
