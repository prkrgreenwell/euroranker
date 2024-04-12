import prisma from "@/db";
import { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

async function fetchActById(id: string, res: NextApiResponse) {
  try {
    const act = await prisma.act.findUnique({
      where: { id: id },
    });

    if (act) {
      return res.status(200).json({ success: true, data: act });
    } else {
      return res.status(404).json({ success: false, message: "Act not found" });
    }
  } catch (error) {
    console.error("Error fetching act by ID:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
}

async function fetchActsByYear(year: number, res: NextApiResponse) {
  try {
    const acts = await prisma.act.findMany({
      where: { year: { equals: year } as Prisma.ActWhereInput["year"] },
    });

    if (acts.length > 0) {
      return res.status(200).json({ success: true, data: acts });
    } else {
      return res.status(404).json({
        success: false,
        message: "No acts found for the given year",
      });
    }
  } catch (error) {
    console.error("Error fetching acts by year:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
}

async function fetchActsByCountry(country: string, res: NextApiResponse) {
  try {
    const acts = await prisma.act.findMany({
      where: {
        country: { equals: country } as Prisma.ActWhereInput["country"],
      },
    });

    if (acts.length > 0) {
      return res.status(200).json({ success: true, data: acts });
    } else {
      return res.status(404).json({
        success: false,
        message: "No acts found for the given country",
      });
    }
  } catch (error) {
    console.error("Error fetching acts by country:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;

  if (method === "GET") {
    try {
      if (query.id) {
        const id = Array.isArray(query.id) ? query.id[0] : query.id;
        return await fetchActById(id, res);
      } else if (query.year) {
        const year = parseInt(query.year as string);
        return await fetchActsByYear(year, res);
      } else if (query.country) {
        const country = Array.isArray(query.country)
          ? query.country[0]
          : query.country;
        return await fetchActsByCountry(country, res);
      } else {
        const acts = await prisma.act.findMany();
        if (acts.length > 0) {
          return res.status(200).json({ success: true, data: acts });
        } else {
          return res
            .status(404)
            .json({ success: false, message: "No acts found" });
        }
      }
    } catch (error) {
      console.error("Error processing request:", error);
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  } else {
    return res
      .status(405)
      .json({ success: false, message: "Method not Allowed" });
  }
}
