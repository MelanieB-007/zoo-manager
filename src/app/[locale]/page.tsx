import { prisma } from "@/lib/prisma";
import { getTranslations } from "next-intl/server";
import PageWrapper from "@/components/page-structure/PageWrapper";
import {
  getCountAnimals,
  getCountSpecialCoats,
} from "@/services/AnimalService";
import HomeView from "@/components/pages/home/HomeViex";

export default async function IndexPage() {
  const t = await getTranslations("home");

  // Daten auf dem Server holen
  const stats = {
    tierCount: await getCountAnimals(),
    specialCoatCount: await getCountSpecialCoats(),
    habitatCount: await prisma.biome.count(),
  };

  const trans = {
    badge_community: t("badge_community"),
    stats_animals: t("stats.animals"),
    stats_specialCoat: t("stats.specialCoat"),
    stats_biomes: t("stats.biomes"),
    stats_regions: t("stats.regions"),
    cards_lexicon_title: t("cards.lexicon.title"),
    cards_lexicon_text: t("cards.lexicon.text"),
    cards_specialCoat_title: t("cards.specialCoat.title"),
    cards_specialCoat_text: t("cards.specialCoat.text"),
    cards_club_title: t("cards.club.title"),
    cards_club_text: t("cards.club.text"),
  };

  return (
    <PageWrapper>
      <HomeView stats={stats} t={trans} />
    </PageWrapper>
  );
}
