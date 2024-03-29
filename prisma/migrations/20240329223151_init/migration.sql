-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Year" (
    "year" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    "hostCountryId" TEXT NOT NULL,

    CONSTRAINT "Year_pkey" PRIMARY KEY ("year")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "flag" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Act" (
    "id" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "photo" TEXT NOT NULL,

    CONSTRAINT "Act_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ranking" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "yearId" INTEGER,
    "potentialRanks" INTEGER[],
    "finalRank" INTEGER,

    CONSTRAINT "Ranking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_YearCompetingCountries" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ActToRanking" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Year_year_key" ON "Year"("year");

-- CreateIndex
CREATE UNIQUE INDEX "Country_id_key" ON "Country"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_YearCompetingCountries_AB_unique" ON "_YearCompetingCountries"("A", "B");

-- CreateIndex
CREATE INDEX "_YearCompetingCountries_B_index" ON "_YearCompetingCountries"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ActToRanking_AB_unique" ON "_ActToRanking"("A", "B");

-- CreateIndex
CREATE INDEX "_ActToRanking_B_index" ON "_ActToRanking"("B");

-- AddForeignKey
ALTER TABLE "Year" ADD CONSTRAINT "Year_hostCountryId_fkey" FOREIGN KEY ("hostCountryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Act" ADD CONSTRAINT "Act_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ranking" ADD CONSTRAINT "Ranking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ranking" ADD CONSTRAINT "Ranking_yearId_fkey" FOREIGN KEY ("yearId") REFERENCES "Year"("year") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_YearCompetingCountries" ADD CONSTRAINT "_YearCompetingCountries_A_fkey" FOREIGN KEY ("A") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_YearCompetingCountries" ADD CONSTRAINT "_YearCompetingCountries_B_fkey" FOREIGN KEY ("B") REFERENCES "Year"("year") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActToRanking" ADD CONSTRAINT "_ActToRanking_A_fkey" FOREIGN KEY ("A") REFERENCES "Act"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActToRanking" ADD CONSTRAINT "_ActToRanking_B_fkey" FOREIGN KEY ("B") REFERENCES "Ranking"("id") ON DELETE CASCADE ON UPDATE CASCADE;
