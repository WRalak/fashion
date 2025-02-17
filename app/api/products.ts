

import { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import nextConnect from "next-connect";

const storage = multer.diskStorage({
  destination: "./public/uploads", // Save images locally
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

const handler = nextConnect<NextApiRequest, NextApiResponse>();

// Handle file uploads
handler.use(upload.single("image"));

const products: { id: string; name: string; price: string; image: string; shopOwnerId: string }[] = [];

handler.get((req: { query: { shopOwnerId: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { id: string; name: string; price: string; image: string; shopOwnerId: string; }[]): any; new(): any; }; }; }) => {
  const { shopOwnerId } = req.query;
  if (!shopOwnerId) {
    return res.status(400).json({ message: "shopOwnerId is required" });
  }

  const shopProducts = products.filter((p) => p.shopOwnerId === shopOwnerId);
  return res.status(200).json(shopProducts);
});

handler.post((req: { body: { name: never; price: never; shopOwnerId: never; }; }, res: { status: (arg0: number) => { (): never; new(): never; json: { (arg0: { message: string; product?: { id: string; name: never; price: never; image: string; shopOwnerId: never; }; }): never; new(): never; }; }; }) => {
  const { name, price, shopOwnerId } = req.body;
  const image = (req as never).file ? `/uploads/${(req as never).file.filename}` : "";

  if (!name || !price || !shopOwnerId) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newProduct = { id: Date.now().toString(), name, price, image, shopOwnerId };
  products.push(newProduct);

  return res.status(201).json({ message: "Product added!", product: newProduct });
});

export default handler;

// Prevent Next.js from parsing form data (Multer handles it)
export const config = {
  api: {
    bodyParser: false,
  },
};


