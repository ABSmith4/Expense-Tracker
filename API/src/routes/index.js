import express from 'express';
import v1 from './v1/index.js';

const index = express.Router();

index.use('/3.2', v1);

export default index;