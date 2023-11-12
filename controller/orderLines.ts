import { Request, Response } from "express";
import { Order } from "../db/schemas";

// Insert a new category
const insertOne = async (req: Request, res: Response) => {
    const item = new Order(req.body)
    await item.save()
    res.send(item)
}

// Finds a single category by its _id
const findById = async (req: Request, res: Response) => {
    const { id } = req.params
    const item = await Order.findById(id)
    res.send(item)
}

// Finds and delete a single document by its _id
const findByIdAndUpdate = async (req: Request, res: Response) => {
    const { id } = req.params
    const item = await Order.findByIdAndUpdate(id, req.body, { new: true })
    res.send(item)
}

// Finds and update a single document by its _id
const findByIdAndDelete = async (req: Request, res: Response) => {
    const { id } = req.params
    const cat = await Order.findByIdAndDelete(id)
    res.send(cat)
}

export default { insertOne, findById, findByIdAndUpdate, findByIdAndDelete }
