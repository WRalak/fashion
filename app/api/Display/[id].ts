

// pages/api/shop/[id].ts
import { NextApiRequest, NextApiResponse } from "next";

const products = {
  "1": [{ id: "1", name: "Jeans", image: "/images/jeans.jpg", price: 50 }],
  "2": [{ id: "2", name: "Jacket", image: "/images/jacket.jpg", price: 80 }],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  res.status(200).json(products[id as string] || []);
}
