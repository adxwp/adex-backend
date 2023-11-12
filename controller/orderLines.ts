import { Request, Response } from "express";
import { OrderLines } from "../db/schemas";

// Insert a new category
const insertOne = async (req: Request, res: Response) => {
  console.log("your here....");
  const item = new OrderLines(req.body);
  await item.save();
  res.send(item);
};

export default { insertOne };
