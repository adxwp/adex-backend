import { Request, Response, Router } from "express";
const router = Router()
import productController from '../controller/product'

router.post('/', productController.insertOne )
router.get('/', productController.findAll )
router.get('/:id', productController.findById )
router.put('/:id', productController.findByIdAndUpdate )
router.delete('/:id', productController.findByIdAndDelete )

export default router