import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starte Seeding...");

  // 1. Sprachen anlegen
  const de = await prisma.sprachen.upsert({
    where: { code: "de" },
    update: {},
    create: { code: "de", name: "Deutsch" },
  });

  // 2. Preisarten (Coins, Diamanten)
  const coins = await prisma.preisart.upsert({
    where: { id: 1 },
    update: {},
    create: { id: 1, name: "Coins" },
  });

  // 3. Gehege / Biome
  const gras = await prisma.gehege.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: "Gras",
      nameEn: "Grass",
      namegehege: "Grasgehege",
      namegehegeEn: "Grass Enclosure",
      pfad: "/assets/biome/grass.png",
      hintergrundfarbe: "#8dbd5b",
      schriftfarbe: "#ffffff",
    },
  });

  // 4. Ein Beispiel-Tier mit Namen in mehreren Sprachen
  const hase = await prisma.tiere.create({
    data: {
      id: 1,
      preis: 500,
      preisartId: coins.id,
      gehegeId: gras.id,
      texte: {
        create: [
          {
            spracheCode: "de",
            name: "Hase",
            beschreibung: "Ein flinker kleiner Kerl.",
          },
          {
            spracheCode: "de",
            name: "Rabbit",
            beschreibung: "A fast little fellow.",
          },
        ],
      },
    },
  });

  // 5. Wettbewerb anlegen
  await prisma.wettbewerbe.create({
    data: {
      start: new Date("2026-04-01T12:00:00Z"),
      ende: new Date("2026-04-08T12:00:00Z"),
      aktiv: 1,
    },
  });

  console.log("✅ Seeding erfolgreich abgeschlossen!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
