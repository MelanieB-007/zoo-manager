if (typeof window === "undefined") {
  process.env.PRISMA_CLIENT_ENGINE_TYPE = "library";
}

import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prismaClientSingleton = () => {
  return new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
    log: ["query", "error", "warn"],
  } as any); // Das "as any" verhindert, dass TypeScript den Start blockiert
};

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
