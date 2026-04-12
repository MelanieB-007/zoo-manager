import { PrismaClient } from "@prisma/client";

// 1. TypeScript mitteilen, dass 'prisma' auf dem globalen Objekt existieren kann
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// 2. Die Instanz erstellen oder die vorhandene nutzen
export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export function getCountAnimals() {
  return prisma.animal.count();
}

export function getCountSpecialCoats() {
  return prisma.specialCoat.count();
}
