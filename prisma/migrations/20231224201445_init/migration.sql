-- CreateTable
CREATE TABLE "todos" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "deadline" TEXT NOT NULL,
    "completed" BOOLEAN DEFAULT false,
    "deleted" BOOLEAN DEFAULT false,

    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
);
