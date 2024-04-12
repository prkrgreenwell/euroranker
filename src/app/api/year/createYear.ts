import prisma from "@/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function createYear(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const createdYear = await prisma.year.create({
      data: req.body,
    });

    return res.status(201).json({
      message: `${req.body.year} successfully added to database`,
      data: createdYear,
    });
  } catch (error) {
    console.error("Error creating year:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
