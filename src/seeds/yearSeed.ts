import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedYears() {
  try {
    const malmo24 = await prisma.year.upsert({
      where: { year: 2024 },
      update: {},
      create: {
        year: 2024,
        city: "Malmö",
        hostCountryId: "SE",
      },
    });

    console.log({ malmo24 });
  } catch (error) {
    console.error("Error seeding years:", error);
    throw error;
  }
}

seedYears()
  .catch(async (error) => {
    console.error("Error seeding years:", error);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
