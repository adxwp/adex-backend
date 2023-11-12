import { Request, Response, Router } from "express";
const router = Router()
import orderLinesController from '../controller/orderLines'

router.post('/', orderLinesController.insertOne )
router.get('/:id', orderLinesController.findById )
router.put('/:id', orderLinesController.findByIdAndUpdate )
router.delete('/:id', orderLinesController.findByIdAndDelete )

export default router