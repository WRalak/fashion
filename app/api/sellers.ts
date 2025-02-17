

import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { storeName, location, category } = req.body;

    if (!storeName || !location || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newSeller = await prisma.seller.create({
      data: { storeName, location, category },
    });

    return res.status(201).json({ message: "Seller submitted successfully!", seller: newSeller });
  } catch (error) {
    console.error("Submission error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

