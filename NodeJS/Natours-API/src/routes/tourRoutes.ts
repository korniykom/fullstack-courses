import { Request, Response, NextFunction } from 'express';
import express from 'express';
import {
  getAllTours,
  postTour,
  getTourById,
  patchTourById,
  deleteTourById,
  checkBody,
} from '../controllers/tourController';

const router = express.Router();

router.route('/').get(getAllTours).post(checkBody, postTour);
router
  .route('/:id')
  .get(getTourById)
  .patch(patchTourById)
  .delete(deleteTourById);

export default router;
