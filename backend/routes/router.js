import express  from 'express';
import { CreateUser, DeleteUser, GetAllUser, GetUserId, UpdateUser } from "../controllers/controllers.js";

const router = express.Router();

router.get('/', GetAllUser);
router.get('/:id', GetUserId);
router.post('/',CreateUser);
router.put('/:id',UpdateUser);
router.delete('/:id', DeleteUser);


export default router;