import prisma from "@/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function createActs(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    //Create act in the database
    const createdAct = await prisma.act.create({
      data: req.body,
    });

    return res.status(201).json({
      message: `${req.body.artist} successfully added to the database`,
      data: createdAct,
    });
  } catch (error) {
    console.error("Error creating act: error");
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
