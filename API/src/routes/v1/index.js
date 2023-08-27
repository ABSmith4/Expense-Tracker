import express from 'express';
import router from './transactions.route.js'

const v1 = express.Router();

v1.use('/v1', router);

export default v1;