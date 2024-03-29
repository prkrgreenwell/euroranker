/*
  Warnings:

  - Added the required column `song` to the `Act` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Act" ADD COLUMN     "song" TEXT NOT NULL;
