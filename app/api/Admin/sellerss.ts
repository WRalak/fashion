

import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib/db"; // Import your DB connection function

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method Not Allowed" });

  const { storeName, location, category } = req.body;

  if (!storeName || !location || !category) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const { db } = await connectToDatabase();
    await db.collection("sellers").insertOne({ storeName, location, category, status: "pending", createdAt: new Date() });

    return res.status(201).json({ message: "Seller request submitted." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error saving seller request." });
  }
}
