-- DropForeignKey
ALTER TABLE "Rooms" DROP CONSTRAINT "Rooms_apartamentId_fkey";

-- AddForeignKey
ALTER TABLE "Rooms" ADD CONSTRAINT "Rooms_apartamentId_fkey" FOREIGN KEY ("apartamentId") REFERENCES "Apartaments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
