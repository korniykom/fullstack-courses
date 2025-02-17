import express from 'express';
import {
  getAllUsers,
  createUser,
  getUserById,
  patchUserById,
  deleteUserById,
} from '../controllers/userController';

const route = express.Router();

route.route('/').get(getAllUsers).post(createUser);
route
  .route('/:id')
  .get(getUserById)
  .patch(patchUserById)
  .delete(deleteUserById);

export default route;
