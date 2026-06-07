-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Media" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "filename" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Article" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "originalUrl" TEXT,
    "originalTitle" TEXT,
    "originalContent" TEXT,
    "aiTitle" TEXT NOT NULL,
    "aiContent" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "metaTitle" TEXT NOT NULL,
    "metaDescription" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "area" TEXT,
    "topic" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "featuredImageUrl" TEXT,
    "publishedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "tags" TEXT NOT NULL,
    "faq" TEXT,
    "schemaMarkup" TEXT,
    "canonicalUrl" TEXT NOT NULL,
    "isDuplicate" BOOLEAN NOT NULL DEFAULT false,
    "isBreaking" BOOLEAN NOT NULL DEFAULT false,
    "isTrending" BOOLEAN NOT NULL DEFAULT false,
    "isPinned" BOOLEAN NOT NULL DEFAULT false,
    "scheduledAt" DATETIME
);
INSERT INTO "new_Article" ("aiContent", "aiTitle", "area", "canonicalUrl", "category", "city", "createdAt", "faq", "featuredImageUrl", "id", "isBreaking", "isDuplicate", "isTrending", "metaDescription", "metaTitle", "originalContent", "originalTitle", "originalUrl", "publishedAt", "schemaMarkup", "slug", "status", "tags", "topic", "updatedAt") SELECT "aiContent", "aiTitle", "area", "canonicalUrl", "category", "city", "createdAt", "faq", "featuredImageUrl", "id", "isBreaking", "isDuplicate", "isTrending", "metaDescription", "metaTitle", "originalContent", "originalTitle", "originalUrl", "publishedAt", "schemaMarkup", "slug", "status", "tags", "topic", "updatedAt" FROM "Article";
DROP TABLE "Article";
ALTER TABLE "new_Article" RENAME TO "Article";
CREATE UNIQUE INDEX "Article_slug_key" ON "Article"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
