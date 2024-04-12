import { PrismaClient } from "@prisma/client"; // Correct import

const prisma = new PrismaClient();

async function seedCountries() {
  try {
    const albania = await prisma.country.upsert({
      where: { id: "AL" },
      update: {},
      create: {
        id: "AL",
        name: "Albania",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/1024px-Flag_of_Albania.svg.png",
      },
    });

    const andorra = await prisma.country.upsert({
      where: { id: "AD" },
      update: {},
      create: {
        id: "AD",
        name: "Andorra",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/1024px-Flag_of_Andorra.svg.png",
      },
    });

    const armenia = await prisma.country.upsert({
      where: { id: "AM" },
      update: {},
      create: {
        id: "AM",
        name: "Armenia",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png",
      },
    });

    const australia = await prisma.country.upsert({
      where: { id: "AU" },
      update: {},
      create: {
        id: "AU",
        name: "Australia",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1024px-Flag_of_Australia_%28converted%29.svg.png",
      },
    });

    const austria = await prisma.country.upsert({
      where: { id: "AT" },
      update: {},
      create: {
        id: "AT",
        name: "Austria",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1024px-Flag_of_Austria.svg.png",
      },
    });

    const azerbaijan = await prisma.country.upsert({
      where: { id: "AZ" },
      update: {},
      create: {
        id: "AZ",
        name: "Azerbaijan",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/1024px-Flag_of_Azerbaijan.svg.png",
      },
    });

    const belarus = await prisma.country.upsert({
      where: { id: "BY" },
      update: {},
      create: {
        id: "BY",
        name: "Belarus",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/1024px-Flag_of_Belarus.svg.png",
      },
    });

    const belgium = await prisma.country.upsert({
      where: { id: "BE" },
      update: {},
      create: {
        id: "BE",
        name: "Belgium",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1024px-Flag_of_Belgium.svg.png",
      },
    });

    const bosniaAndHerzegovina = await prisma.country.upsert({
      where: { id: "BA" },
      update: {},
      create: {
        id: "BA",
        name: "Bosnia and Herzegovina",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1024px-Flag_of_Bosnia_and_Herzegovina.svg.png",
      },
    });

    const bulgaria = await prisma.country.upsert({
      where: { id: "BG" },
      update: {},
      create: {
        id: "BG",
        name: "Bulgaria",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/1024px-Flag_of_Bulgaria.svg.png",
      },
    });

    const croatia = await prisma.country.upsert({
      where: { id: "HR" },
      update: {},
      create: {
        id: "HR",
        name: "Croatia",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1024px-Flag_of_Croatia.svg.png",
      },
    });

    const cyprus = await prisma.country.upsert({
      where: { id: "CY" },
      update: {},
      create: {
        id: "CY",
        name: "Cyprus",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/1024px-Flag_of_Cyprus.svg.png",
      },
    });

    const czechia = await prisma.country.upsert({
      where: { id: "CZ" },
      update: {},
      create: {
        id: "CZ",
        name: "Czechia",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1024px-Flag_of_the_Czech_Republic.svg.png",
      },
    });

    const denmark = await prisma.country.upsert({
      where: { id: "DK" },
      update: {},
      create: {
        id: "DK",
        name: "Denmark",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1024px-Flag_of_Denmark.svg.png",
      },
    });

    const estonia = await prisma.country.upsert({
      where: { id: "EE" },
      update: {},
      create: {
        id: "EE",
        name: "Estonia",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/1024px-Flag_of_Estonia.svg.png",
      },
    });

    const finland = await prisma.country.upsert({
      where: { id: "FI" },
      update: {},
      create: {
        id: "FI",
        name: "Finland",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/1024px-Flag_of_Finland.svg.png",
      },
    });

    const france = await prisma.country.upsert({
      where: { id: "FR" },
      update: {},
      create: {
        id: "FR",
        name: "France",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1024px-Flag_of_France.svg.png",
      },
    });

    const georgia = await prisma.country.upsert({
      where: { id: "GE" },
      update: {},
      create: {
        id: "GE",
        name: "Georgia",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/1024px-Flag_of_Georgia.svg.png",
      },
    });

    const germany = await prisma.country.upsert({
      where: { id: "DE" },
      update: {},
      create: {
        id: "DE",
        name: "Germany",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1024px-Flag_of_Germany.svg.png",
      },
    });

    const greece = await prisma.country.upsert({
      where: { id: "GR" },
      update: {},
      create: {
        id: "GR",
        name: "Greece",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1024px-Flag_of_Greece.svg.png",
      },
    });

    const hungary = await prisma.country.upsert({
      where: { id: "HU" },
      update: {},
      create: {
        id: "HU",
        name: "Hungary",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/1024px-Flag_of_Hungary.svg.png",
      },
    });

    const iceland = await prisma.country.upsert({
      where: { id: "IS" },
      update: {},
      create: {
        id: "IS",
        name: "Iceland",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1024px-Flag_of_Iceland.svg.png",
      },
    });

    const ireland = await prisma.country.upsert({
      where: { id: "IE" },
      update: {},
      create: {
        id: "IE",
        name: "Ireland",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/1024px-Flag_of_Ireland.svg.png",
      },
    });

    const israel = await prisma.country.upsert({
      where: { id: "IL" },
      update: {},
      create: {
        id: "IL",
        name: "Israel",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/1024px-Flag_of_Israel.svg.png",
      },
    });

    const italy = await prisma.country.upsert({
      where: { id: "IT" },
      update: {},
      create: {
        id: "IT",
        name: "Italy",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1024px-Flag_of_Italy.svg.png",
      },
    });

    const latvia = await prisma.country.upsert({
      where: { id: "LV" },
      update: {},
      create: {
        id: "LV",
        name: "Latvia",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/1024px-Flag_of_Latvia.svg.png",
      },
    });

    const lithuania = await prisma.country.upsert({
      where: { id: "LT" },
      update: {},
      create: {
        id: "LT",
        name: "Lithuania",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/1024px-Flag_of_Lithuania.svg.png",
      },
    });

    const luxembourg = await prisma.country.upsert({
      where: { id: "LU" },
      update: {},
      create: {
        id: "LU",
        name: "Luxembourg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/1024px-Flag_of_Luxembourg.svg.png",
      },
    });

    const malta = await prisma.country.upsert({
      where: { id: "MT" },
      update: {},
      create: {
        id: "MT",
        name: "Malta",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/1024px-Flag_of_Malta.svg.png",
      },
    });

    const moldova = await prisma.country.upsert({
      where: { id: "MD" },
      update: {},
      create: {
        id: "MD",
        name: "Moldova",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/1024px-Flag_of_Moldova.svg.png",
      },
    });

    const monaco = await prisma.country.upsert({
      where: { id: "MC" },
      update: {},
      create: {
        id: "MC",
        name: "Monaco",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/1024px-Flag_of_Monaco.svg.png",
      },
    });

    const montenegro = await prisma.country.upsert({
      where: { id: "ME" },
      update: {},
      create: {
        id: "ME",
        name: "Montenegro",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/1024px-Flag_of_Montenegro.svg.png",
      },
    });

    const morocco = await prisma.country.upsert({
      where: { id: "MA" },
      update: {},
      create: {
        id: "MA",
        name: "Morocco",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/1024px-Flag_of_Morocco.svg.png",
      },
    });

    const netherlands = await prisma.country.upsert({
      where: { id: "NL" },
      update: {},
      create: {
        id: "NL",
        name: "Netherlands",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1024px-Flag_of_the_Netherlands.svg.png",
      },
    });

    const northMacedonia = await prisma.country.upsert({
      where: { id: "MK" },
      update: {},
      create: {
        id: "MK",
        name: "North Macedonia",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/1024px-Flag_of_North_Macedonia.svg.png",
      },
    });

    const norway = await prisma.country.upsert({
      where: { id: "NO" },
      update: {},
      create: {
        id: "NO",
        name: "Norway",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/1024px-Flag_of_Norway.svg.png",
      },
    });

    const poland = await prisma.country.upsert({
      where: { id: "PL" },
      update: {},
      create: {
        id: "PL",
        name: "Poland",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1024px-Flag_of_Poland.svg.png",
      },
    });

    const portugal = await prisma.country.upsert({
      where: { id: "PT" },
      update: {},
      create: {
        id: "PT",
        name: "Portugal",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1024px-Flag_of_Portugal.svg.png",
      },
    });

    const romania = await prisma.country.upsert({
      where: { id: "RO" },
      update: {},
      create: {
        id: "RO",
        name: "Romania",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/1024px-Flag_of_Romania.svg.png",
      },
    });

    const russia = await prisma.country.upsert({
      where: { id: "RU" },
      update: {},
      create: {
        id: "RU",
        name: "Russia",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1024px-Flag_of_Russia.svg.png",
      },
    });

    const sanMarino = await prisma.country.upsert({
      where: { id: "SM" },
      update: {},
      create: {
        id: "SM",
        name: "San Marino",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/1024px-Flag_of_San_Marino.svg.png",
      },
    });

    const serbia = await prisma.country.upsert({
      where: { id: "RS" },
      update: {},
      create: {
        id: "RS",
        name: "Serbia",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1024px-Flag_of_Serbia.svg.png",
      },
    });

    const serbiaAndMontenegro = await prisma.country.upsert({
      where: { id: "CS" },
      update: {},
      create: {
        id: "CS",
        name: "Serbia and Montenegro",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_Serbia_and_Montenegro_%281992%E2%80%932006%29.svg/1024px-Flag_of_Serbia_and_Montenegro_%281992%E2%80%932006%29.svg.png",
      },
    });

    const slovakia = await prisma.country.upsert({
      where: { id: "SK" },
      update: {},
      create: {
        id: "SK",
        name: "Slovakia",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/1024px-Flag_of_Slovakia.svg.png",
      },
    });

    const slovenia = await prisma.country.upsert({
      where: { id: "SI" },
      update: {},
      create: {
        id: "SI",
        name: "Slovenia",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/1024px-Flag_of_Slovenia.svg.png",
      },
    });

    const spain = await prisma.country.upsert({
      where: { id: "ES" },
      update: {},
      create: {
        id: "ES",
        name: "Spain",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1024px-Bandera_de_Espa%C3%B1a.svg.png",
      },
    });

    const sweden = await prisma.country.upsert({
      where: { id: "SE" },
      update: {},
      create: {
        id: "SE",
        name: "Sweden",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1024px-Flag_of_Sweden.svg.png",
      },
    });

    const switzerland = await prisma.country.upsert({
      where: { id: "CH" },
      update: {},
      create: {
        id: "CH",
        name: "Switzerland",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/800px-Flag_of_Switzerland_%28Pantone%29.svg.png",
      },
    });

    const turkiye = await prisma.country.upsert({
      where: { id: "TR" },
      update: {},
      create: {
        id: "TR",
        name: "Türkiye",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1024px-Flag_of_Turkey.svg.png",
      },
    });

    const ukraine = await prisma.country.upsert({
      where: { id: "UA" },
      update: {},
      create: {
        id: "UA",
        name: "Ukraine",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1024px-Flag_of_Ukraine.svg.png",
      },
    });

    const unitedKingdom = await prisma.country.upsert({
      where: { id: "UK" },
      update: {},
      create: {
        id: "UK",
        name: "United Kingdom",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1024px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
      },
    });

    const yugoslavia = await prisma.country.upsert({
      where: { id: "YU" },
      update: {},
      create: {
        id: "YU",
        name: "Yugoslavia",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Flag_of_Yugoslavia_%281946-1992%29.svg/1024px-Flag_of_Yugoslavia_%281946-1992%29.svg.png",
      },
    });

    console.log({
      albania,
      andorra,
      armenia,
      australia,
      austria,
      azerbaijan,
      belarus,
      belgium,
      bosniaAndHerzegovina,
      bulgaria,
      croatia,
      cyprus,
      czechia,
      denmark,
      estonia,
      finland,
      france,
      georgia,
      germany,
      greece,
      hungary,
      iceland,
      ireland,
      israel,
      italy,
      latvia,
      lithuania,
      luxembourg,
      malta,
      moldova,
      monaco,
      montenegro,
      morocco,
      netherlands,
      northMacedonia,
      norway,
      poland,
      portugal,
      romania,
      russia,
      sanMarino,
      serbia,
      serbiaAndMontenegro,
      slovakia,
      slovenia,
      spain,
      sweden,
      switzerland,
      turkiye,
      ukraine,
      unitedKingdom,
      yugoslavia,
    });
  } catch (error) {
    console.error("Error seeding countries:", error);
    throw error; // Rethrow the error to be caught by the catch block below
  }
}

seedCountries()
  .catch(async (error) => {
    console.error("Error seeding countries:", error);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
