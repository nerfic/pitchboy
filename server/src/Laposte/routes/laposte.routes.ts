import express from 'express';
import * as controller from '../controllers';
import * as schema from '../schema';
import joiSchemaBodyValidation from '../../Middlewares/joiSchemaBodyValidation';

const router = express.Router();

router.get('/all-cities', controller.getAllCities);

router.get('/city/:zipcode', controller.getCityWithZipCode);

router.put('/city/:zipcode', joiSchemaBodyValidation(schema.putCityByZipCode, true), controller.putCityByZipCode);

router.delete('/city/:zipcode', controller.delCityWithZipCode);

router.get('/all-cities-with-pagination', controller.getAllCitiesWithPagination);

export default router;
