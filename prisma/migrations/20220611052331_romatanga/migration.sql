-- CreateTable
CREATE TABLE "Picture" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "link" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "due_date" DATETIME NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "special" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Picture_link_key" ON "Picture"("link");

-- CreateIndex
CREATE UNIQUE INDEX "Event_special_key" ON "Event"("special");
