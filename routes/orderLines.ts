import { Router } from "express";
const router = Router();
import orderLinesController from "../controller/orderLines";

router.post("/", orderLinesController.insertOne);

export default router;
