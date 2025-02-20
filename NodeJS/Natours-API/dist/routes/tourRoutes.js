import express from 'express';
import { getAllTours, postTour, getTourById, patchTourById, deleteTourById, checkBody, } from '../controllers/tourController.js';
const router = express.Router();
router.route('/').get(getAllTours).post(checkBody, postTour);
router
    .route('/:id')
    .get(getTourById)
    .patch(patchTourById)
    .delete(deleteTourById);
export default router;
