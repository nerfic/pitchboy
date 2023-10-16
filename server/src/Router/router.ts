import express from "express";
import Laposte from '../Laposte/routes/laposte.routes';

const router = express.Router();

router.use('/laposte', Laposte);

export default router;
