import { Request, Response } from "express";
import { Product } from "../db/schemas";

// Insert a new category
const insertOne = async (req: Request, res: Response) => {
    const item = new Product(req.body)
    await item.save()
    res.send(item)
}

// Find all categories
const findAll = async (req: Request, res: Response) => {
    const items = await Product.find()
    res.send(items)
}

// Finds a single category by its _id
const findById = async (req: Request, res: Response) => {
    const { id } = req.params
    const item = await Product.findById(id)
    res.send(item)
}

// Finds and delete a single document by its _id
const findByIdAndUpdate = async (req: Request, res: Response) => {
    const { id } = req.params
    const item = await Product.findByIdAndUpdate(id, req.body, { new: true })
    res.send(item)
}

// Finds and update a single document by its _id
const findByIdAndDelete = async (req: Request, res: Response) => {
    const { id } = req.params
    const cat = await Product.findByIdAndDelete(id)
    res.send(cat)
}

export default { insertOne, findAll, findById, findByIdAndUpdate, findByIdAndDelete }
