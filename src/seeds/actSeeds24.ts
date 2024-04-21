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

    const electricFields = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "AU",
        artist: "Electric Fields",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-03/Electric%20Fields.png?itok=7NcRNr4c",
        song: "One Milkali (One Blood)",
        yearId: 2024,
      },
    });

    const kaleen = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "AT",
        artist: "Kaleen",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-03/66a111f6-7be9-4880-8bfd-e583fdb91f83.jpg?h=31af62f8&itok=7vah7hq0",
        song: "We Will Rave",
        yearId: 2024,
      },
    });

    const fahree = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "AZ",
        artist: "FAHREE feat. Ilkin Dovlatov",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-04/c12c265d-7fe5-479b-bb4a-c7d2760fca69_0.jpeg?itok=bRhPkgTq",
        song: "Özünlə Apar",
        yearId: 2024,
      },
    });

    const mustii = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "BE",
        artist: "Mustii",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2023-08/230826_EUROVISION%20MUSTII_VLADVDK_0001.jpg?h=97fc8756&itok=uuVkfb-U",
        song: "Before the Party's Over",
        yearId: 2024,
      },
    });

    const babyLasgna = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "HR",
        artist: "Baby Lasagna",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-04/a2363ecf-8c36-4d9a-a7de-4cfe2b480bb4.jpeg?h=0fe9b156&itok=sh4vEmxV",
        song: "Rim Tim Tagi Dim",
        yearId: 2024,
      },
    });

    const siliaKapsis = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "CY",
        artist: "Silia Kapsis",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-03/e97581ab-3bf1-4df9-a329-c1af528799d4.jpeg?h=b5dab265&itok=gUcSleZn",
        song: "Liar",
        yearId: 2024,
      },
    });

    const aiko = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "CZ",
        artist: "Aiko",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2023-11/Aiko_Teki%20Shine2_0.jpg?h=864e960e&itok=AtmelNZ2",
        song: "Pedestal",
        yearId: 2024,
      },
    });

    const saba = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "DK",
        artist: "SABA",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-03/ca99a608-036b-4894-be32-2845f3ece9be.jpeg?h=e0b85778&itok=6su3wDm1",
        song: "SAND",
        yearId: 2024,
      },
    });

    const miinustxPuuluup = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "EE",
        artist: "5MIINUST x Puuluup",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-03/d460e990-c3c7-44bb-96d3-02118f6dcb7d.jpg?h=35240c6b&itok=Ff3UEX_t",
        song: "(nendest) narkootikumidest ei tea me (küll) midagi",
        yearId: 2024,
      },
    });

    const windows95man = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "FI",
        artist: "Windows95man",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-04/Kopio_%20Pepino_1_Kredit_Nelli_Kentt%C3%A4_pixelated.jpg?h=49f8be56&itok=4fDWWrLR",
        song: "No Rules!",
        yearId: 2024,
      },
    });

    const silmane = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "FR",
        artist: "Silmane",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-03/422b352c-cda4-49e5-9acc-7edd24957b81.jpg?h=b591f92e&itok=LV8Mxxk0",
        song: "Mon amour",
        yearId: 2024,
      },
    });

    const nutsaBuzladze = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "GE",
        artist: "Nutsa Buzaladze",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-03/41e382f4-2859-4faa-9e12-11d4d8788db2.jpg?itok=YpRTHTUn",
        song: "Firefighter",
        yearId: 2024,
      },
    });

    const isaak = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "DE",
        artist: "ISAAK",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-03/d92b4070-0922-4039-8d1e-cbec04048fe5.jpg?h=9d5f578d&itok=Ts64H9CV",
        song: "Always On The Run",
        yearId: 2024,
      },
    });

    const marinaSatti = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "GR",
        artist: "Marina Satti",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-03/%CE%9C%CE%91%CE%A1%CE%99%CE%9D%CE%91-%CE%A3%CE%91%CE%A4%CE%A4%CE%99-1.jpg?h=60eb612a&itok=y9EwvZFc",
        song: "ZARI",
        yearId: 2024,
      },
    });

    const heraBjork = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "IS",
        artist: "Hera Björk",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-03/Hera.jpg?h=678bbb2e&itok=Zib2yffy",
        song: "Scared of Heights",
        yearId: 2024,
      },
    });

    const bambieThug = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "IE",
        artist: "Bambie Thug",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-03/c0408b44-073e-4df1-adbe-ebe30b042110.jpg?itok=DdpD5gmF",
        song: "Doomsday Blue",
        yearId: 2024,
      },
    });

    const edenGolan = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "IL",
        artist: "Eden Golan",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-03/78f0cd32-90f6-4dc0-8cf8-323ba46b5617.jpeg?h=e80050ca&itok=sR05jjXJ",
        song: "Hurricane",
        yearId: 2024,
      },
    });

    const angelinaMango = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "IT",
        artist: "Angelina Mango",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-03/d4d74119-da30-4e7c-a6f1-730b61a8b718.jpg?h=d86b0c30&itok=rnLB90CV",
        song: "La noia",
        yearId: 2024,
      },
    });

    const dons = prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "LV",
        artist: "Dons",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-03/aa4632a5-6613-459c-8351-9ed6719def2a.jpeg?h=7d15c495&itok=RvNKR7nM",
        song: "Hollow",
        yearId: 2024,
      },
    });

    const silvesterBelt = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "LT",
        artist: "Silvester Belt",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-03/7099fff6-411b-4c80-ad70-2610b2f529e7.jpg?itok=Jd98-bIz",
        song: "Luktelk",
        yearId: 2024,
      },
    });

    const tali = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "LU",
        artist: "TALI",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-03/b3257b21-dd6d-4797-a69b-e7bde206db55.jpeg?h=b9209174&itok=xJqGASdc",
        song: "Fighter",
        yearId: 2024,
      },
    });

    const sarahBonnici = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "MT",
        artist: "Sarah Bonnici",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-03/sarahbonnici2024.jpg?h=fa14d438&itok=ZAxTOxs9",
        song: "Loop",
        yearId: 2024,
      },
    });

    const nataliaBarbu = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "MD",
        artist: "Natalia Barbu",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-04/fda74c97-c476-4152-b0ed-7e52f75c9e45.jpg?h=a4b88cc5&itok=mechQJxM",
        song: "In The Middle",
        yearId: 2024,
      },
    });

    const joostKlein = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "NL",
        artist: "Joost Klein",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-03/1.2_1.jpg?h=c475ac5f&itok=bwLwROx-",
        song: "Europapa",
        yearId: 2024,
      },
    });

    const gate = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "NO",
        artist: "Gåte",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-04/Ole_Ekker_G%C3%A5te_DSCF8863.jpg?h=ab89cd99&itok=ihlC96iA",
        song: "Ulveham",
        yearId: 2024,
      },
    });

    const luna = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "PL",
        artist: "LUNA",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-02/231212_Luna_0901_0.jpg?h=71f3be87&itok=0dOHrWcR",
        song: "The Tower",
        yearId: 2024,
      },
    });

    const iolanda = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "PT",
        artist: "iolanda",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-03/FOTO_OFICIAL_iolanda.JPG?h=ad329e53&itok=JnZFLjQV",
        song: "Grito",
        yearId: 2024,
      },
    });

    const megara = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "SM",
        artist: "MEGARA",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-03/27a0abea-950b-4c18-a960-2a7d105cd95b.jpg?itok=wHIa8Rd2",
        song: "11:11",
        yearId: 2024,
      },
    });

    const teyaDora = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "RS",
        artist: "TEYA DORA",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-03/42855f59-20e9-4c94-93e4-085a74e66015.png?itok=UGc8qkRq",
        song: "RAMONDA",
        yearId: 2024,
      },
    });

    const raiven = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "SI",
        artist: "Raiven",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-04/01713778-0e3f-4487-a839-7eeb5d5e505d.jpg?itok=Ydr_mpK_",
        song: "Veronika",
        yearId: 2024,
      },
    });

    const nebulossa = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "ES",
        artist: "Nebulossa",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-02/nebu.jpeg?h=d3950e45&itok=u2wkvjrY",
        song: "ZORRA",
        yearId: 2024,
      },
    });

    const marcusMartinus = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "SE",
        artist: "Marcus & Martinus",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-03/375f9a78-133d-409d-9204-e7ffb1c51654.jpg?h=a4be10c8&itok=L9AjlDPB",
        song: "Unforgettable",
        yearId: 2024,
      },
    });

    const nemo = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "CH",
        artist: "Nemo",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-02/Nemo_Cover_and_Press_1743-Edit.jpg?itok=VWZz6S1_",
        song: "The Code",
        yearId: 2024,
      },
    });

    const alyonaAlyonaJerryHeil = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "UA",
        artist: "alyona alyona & Jerry Heil",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2024-04/85467096-d8bf-45a4-96c4-5dceea4c7def.jpg?h=3d20ae59&itok=kMTsgW0R",
        song: "Teresa & Maria",
        yearId: 2024,
      },
    });

    const ollyAlexander = await prisma.act.upsert({
      where: { id: uuid() },
      update: {},
      create: {
        countryId: "UK",
        artist: "Olly Alexander",
        photo:
          "https://eurovision.tv/sites/default/files/styles/banner/public/media/image/2023-12/2023_OllyAlexander_Lead%20Image.jpg?h=8a62489a&itok=y-EpCPjo",
        song: "Dizzy",
        yearId: 2024,
      },
    });

    console.log({
      besa,
      ladaniva,
      electricFields,
      kaleen,
      fahree,
      mustii,
      babyLasgna,
      siliaKapsis,
      aiko,
      saba,
      miinustxPuuluup,
      windows95man,
      silmane,
      nutsaBuzladze,
      isaak,
      marinaSatti,
      heraBjork,
      bambieThug,
      edenGolan,
      angelinaMango,
      dons,
      silvesterBelt,
      tali,
      sarahBonnici,
      nataliaBarbu,
      joostKlein,
      gate,
      luna,
      iolanda,
      megara,
      teyaDora,
      raiven,
      nebulossa,
      marcusMartinus,
      nemo,
      alyonaAlyonaJerryHeil,
      ollyAlexander,
    });
  } catch (error) {
    console.error("Error seeding 2024 acts:", error);
    throw error;
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
