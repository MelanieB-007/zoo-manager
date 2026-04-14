"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import React, { useTransition } from "react";
import { useTranslations } from "next-intl";

import * as Styles from "./Filter.styles";
import CustomBiomeFilter from "@/components/Elements/Filter/CustomBiomeFilter";
import CustomLevelFilter from "@/components/Elements/Filter/CustomLevelFilter";
import { Animal } from "@/types/animal";

interface FilterBarProps {
  animals: Animal[];
  showBiomeFilter?: boolean;
  showLevelFilter?: boolean;
}

export default function FilterBar({
  animals = [],
  showBiomeFilter = true,
  showLevelFilter = true,
}: Partial<FilterBarProps>) {
  // Props stark reduziert!

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations();
  const [isPending, startTransition] = useTransition();

  // Aktuelle Werte aus der URL holen
  const searchTerm = searchParams.get("search") || "";
  const selectedBiome = searchParams.get("biome") || "all";
  const selectedLevel = searchParams.get("level") || "all";

  // Die zentrale "Update"-Funktion
  const updateFilters = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());

    // Neue Werte setzen
    Object.entries(updates).forEach(([key, value]) => {
      if (value && value !== "all") {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    // Bei jedem Filter-Wechsel Seite auf 1 zurücksetzen
    params.set("page", "1");

    // "startTransition" verhindert, dass die UI während des URL-Updates einfriert
    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <Styles.FilterBar style={{ opacity: isPending ? 0.7 : 1 }}>
      <Styles.SearchInput
        type="text"
        placeholder={t("animals.search_placeholder")}
        value={searchTerm}
        onChange={(e) => updateFilters({ search: e.target.value })}
      />

      {showBiomeFilter && (
        <CustomBiomeFilter
          animals={animals}
          selectedBiome={selectedBiome}
          onSelectAction={(value) => updateFilters({ biome: value })}
        />
      )}

      {showLevelFilter && (
        <CustomLevelFilter
          animals={animals}
          selectedLevel={selectedLevel}
          onSelectAction={(value) => updateFilters({ level: value })}
        />
      )}
    </Styles.FilterBar>
  );
}
