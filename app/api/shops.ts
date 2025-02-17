
  


  import { NextApiRequest, NextApiResponse } from "next";

  export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
      const shops = [
        { id: "1", name: "Fashion Hub", image: "/shop1.jpg" },
        { id: "2", name: "Trend Store", image: "/shop2.jpg" },
      ];
      return res.status(200).json(shops);
    }
  
    return res.status(405).json({ message: "Method not allowed" });
  }
  
  