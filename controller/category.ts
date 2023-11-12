import { Request, Response } from "express";
import { Category } from "../db/schemas";

// Insert a new category
const insertOne = async (req: Request, res: Response) => {
  const cat = new Category(req.body);
  await cat.save();
  res.send(cat);
};

// Find all categories
const findAll = async (req: Request, res: Response) => {
  const cats = await Category.find();
  res.send(cats);
};

// Finds a single category by its _id
const findById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const cat = await Category.findById(id);
  res.send(cat);
};

// Finds and delete a single document by its _id
const findByIdAndUpdate = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const cat = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(cat);
  } catch (error) {
    console.log(error);
  }
};

// Finds and update a single document by its _id
const findByIdAndDelete = async (req: Request, res: Response) => {
  const { id } = req.params;
  const cat = await Category.findByIdAndDelete(id);
  res.send(cat);
};

export default {
  insertOne,
  findAll,
  findById,
  findByIdAndUpdate,
  findByIdAndDelete,
};
