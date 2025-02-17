

// pages/api/my-products.ts
export default function handler(req: never, res: { json: (arg0: { id: string; name: string; price: number; image: string; }[]) => void; }) {
    res.json([{ id: "p1", name: "T-Shirt", price: 20, image: "/shirt.jpg" }]);
  }
  