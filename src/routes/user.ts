import express from 'express';
import { getUser, getUsers } from '../controller/user.js';

const router = express.Router();

router.get('/users',getUsers);
router.get('/user',getUser);

export default router;