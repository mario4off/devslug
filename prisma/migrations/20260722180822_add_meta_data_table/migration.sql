/*
  Warnings:

  - You are about to drop the column `clickCount` on the `Url` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Url" DROP COLUMN "clickCount";

-- CreateTable
CREATE TABLE "UrlMeta" (
    "id" SERIAL NOT NULL,
    "urlId" INTEGER NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "image" TEXT,
    "favicon" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UrlMeta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UrlMeta_urlId_key" ON "UrlMeta"("urlId");

-- AddForeignKey
ALTER TABLE "UrlMeta" ADD CONSTRAINT "UrlMeta_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES "Url"("id") ON DELETE CASCADE ON UPDATE CASCADE;
