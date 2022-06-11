/*
  Warnings:

  - You are about to alter the column `due_date` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `DateTime` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "due_date" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "special" TEXT NOT NULL
);
INSERT INTO "new_Event" ("description", "due_date", "id", "image", "name", "special") SELECT "description", "due_date", "id", "image", "name", "special" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
CREATE UNIQUE INDEX "Event_special_key" ON "Event"("special");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
