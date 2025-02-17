import { sendAdminNotification } from "../lib/email";

export default async function handler(req: { method: string; body: { storeName: unknown; location: unknown; category: unknown; }; }, res: { status: (arg0: number) => { (): unknown; new(): unknown; json: { (arg0: { message: string; error?: unknown; }): unknown; new(): unknown; }; }; }) {
  if (req.method === "POST") {
    const { storeName, location, category } = req.body;

    const response = await sendAdminNotification({ storeName, location, category });

    if (response.success) {
      return res.status(200).json({ message: "Notification sent successfully!" });
    } else {
      return res.status(500).json({ message: "Error sending email", error: response.error });
    }
  }
}
