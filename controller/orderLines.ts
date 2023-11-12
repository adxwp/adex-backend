import { Request, Response } from "express";
import { OrderLines } from "../db/schemas";

// Insert a new category
const insertOne = async (req: Request, res: Response) => {
    console.log('your here....')
    const item = new OrderLines(req.body)
    await item.save()
    res.send(item)
}

// Finds and delete a single document by its _id
const findByIdAndUpdate = async (req: Request, res: Response) => {
    const { id } = req.params
    const item = await OrderLines.findByIdAndUpdate(id, req.body, { new: true })
    res.send(item)
}

// Finds and update a single document by its _id
const findByIdAndDelete = async (req: Request, res: Response) => {
    const { id } = req.params
    const cat = await OrderLines.findByIdAndDelete(id)
    res.send(cat)
}

export default { insertOne, findByIdAndUpdate, findByIdAndDelete }
