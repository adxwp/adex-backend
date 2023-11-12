import { Request, Response, Router } from "express";
const router = Router()
import categoryController from '../controller/category'

router.post('/', categoryController.insertOne )
router.get('/', categoryController.findAll )
router.get('/:id', categoryController.findById )
router.put('/:id', categoryController.findByIdAndUpdate )
router.delete('/:id', categoryController.findByIdAndDelete )

export default router