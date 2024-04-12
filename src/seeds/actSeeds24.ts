import { PrismaClient } from "@prisma/client";
import { uuid } from "uuidv4";

const prisma = new PrismaClient();

async function seedActs24() {
  try {
    const besa = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "AL",
        artist: "BESA",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-03/4ac43501-b970-4809-a30b-73eaeb93f3f5.jpeg?h=c0b8fd40&itok=bALDd0Bu",
        song: "TiTAN",
        yearId: 2024,
      },
    });

    const ladaniva = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "AM",
        artist: "LADANIVA",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-04/11bbfb28-2c2f-4d57-bbd6-2219653de68c.jpg?h=32cf84e4&itok=cW_-vsa8",
        song: "Jako",
        yearId: 2024,
      },
    });

    console.log({ besa });
  } catch (error) {
    console.error("Error seeding 2024 acts:", error);
  }
}

seedActs24()
  .catch(async (error) => {
    console.error("Error seeding 2024 acts", error);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
