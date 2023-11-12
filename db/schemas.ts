import { Schema, model, Types } from "mongoose";

/* 
// Category.
*/
// 2. Create a Schema corresponding to the document interface.
const CategorySchema = new Schema({
  name: { type: String, required: true },
  desc: { type: String },
  parent_id: { type: Types.ObjectId, ref: "Category" },
});

// 3. Create a Model.
const Category = model("Category", CategorySchema);

/* 
// Product.
*/
// 2. Create a Schema corresponding to the document interface.
const ProductSchema = new Schema(
  {
    category_id: { type: Types.ObjectId, ref: "Category", required: true },
    name: { type: String, required: true },
    desc: { type: String, required: true },
    SKU: { type: String },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    published: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// 3. Create a Model.
const Product = model("Product", ProductSchema);

/* 
// Inventory.
*/
// 2. Create a Schema corresponding to the document interface.
const InventorySchema = new Schema(
  {
    product_id: { type: Types.ObjectId, ref: "Product", required: true },
    quantity_in_stock: { type: Number, default: 0 },
    sales: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// 3. Create a Model.
const Inventory = model("Inventory", InventorySchema);

/* 
// Order.
*/
// 2. Create a Schema corresponding to the document interface.
const OrderSchema = new Schema(
  {
    //   customer_id: { type: Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ["created", "paid"] },
    net_amount: { type: Number, required: true },
    shipped_date: { type: Date, ref: "Order" },
    shipping_charges: { type: Number },
    shipping_adress: {
      number: { type: String, required: true },
      street: { type: String, required: true },
      city: { type: String, required: true },
      postal_code: { type: String, required: true },
    },
    tax: { type: Number, default: 0 },
    total_amount: { type: Number, required: true },
    order_lines: [{ type: Types.ObjectId, ref: "OrderLines" }],
  },
  { timestamps: true }
);

// 3. Create a Model.
const Order = model("Order", OrderSchema);

/* 
// Order items.
*/
// 2. Create a Schema corresponding to the document interface.
const OrderLinesSchema = new Schema({
  product: { type: Types.ObjectId, ref: "Product" },
  quantity: { type: Number, required: true },
  list_price: { type: Number, required: true },
  discount: { type: Number },
});

// 3. Create a Model.
const OrderLines = model("OrderLines", OrderLinesSchema);

// Export all models
export { Product, Category, Order, OrderLines };
