import { Request, Response, Router } from "express";
const router = Router()
import orderController from '../controller/order'

router.post('/', orderController.insertOne )
router.get('/', orderController.findAll )
router.get('/:id', orderController.findById )
router.put('/:id', orderController.findByIdAndUpdate )
router.delete('/:id', orderController.findByIdAndDelete )

export default router