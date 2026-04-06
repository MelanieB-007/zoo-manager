import "dotenv/config";
import { defineConfig } from "prisma/config";

// Kleiner Debug-Check: Falls die URL leer ist, wirf einen Fehler
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in .env file");
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // Hier erzwingen wir den String-Typ
    url: process.env.DATABASE_URL as string,
  },
});
