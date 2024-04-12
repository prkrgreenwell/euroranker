import prisma from "@/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function createCountry(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const createdCountry = await prisma.country.create({
      data: req.body,
    });

    return res
      .status(201)
      .json({
        message: `${req.body.name} successfully added to database`,
        data: createdCountry,
      });
  } catch (error) {
    console.error("Error adding country:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
