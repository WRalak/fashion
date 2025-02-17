

import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const getUserSession = async (req, res) => {
  const session = await getServerSession(req, res, authOptions);
  return session;
};
