

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function handler(req: { query: { id: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): never; }; }; }) {
    const { id } = req.query;
    const products = {
      "1": [{ id: "101", name: "T-Shirt", price: 25, image: "/tshirt.jpg" }],
      "2": [{ id: "201", name: "Jeans", price: 40, image: "/jeans.jpg" }],
    };
    res.status(200).json(products[id] || []);
  }
  