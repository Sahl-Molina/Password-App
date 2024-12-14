import express from "express";
import { apiController } from '../controllers/apiController.js';

const router = express.Router();

router
  .get('/get-password', apiController.getNewPassword);


export default router;