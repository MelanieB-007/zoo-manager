"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";

import * as Styles from "./Filter.styles";
import { Animal } from "@/types/animal";
import BiomeBadge from "@/components/ui/Badges/BiomeBadge";
import Chevron from "@/components/ui/Icons/Chevron";

interface CustomBiomeFilterProps {
  animals: Animal[];
  selectedBiome: string;
  onSelectAction: (value: string) => void;
}

export default function CustomBiomeFilter({
  animals = [],
  selectedBiome,
  onSelectAction,
}: CustomBiomeFilterProps) {
  const t = useTranslations();
  // const locale = useLocale(); <-- Entfernt

  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Extrahiere einzigartige Biome
  const uniqueBiomes = Array.from(
    new Set(animals.map((a) => a.biomeName)),
  ).filter(Boolean);

  return (
    <Styles.SelectWrapper ref={wrapperRef}>
      <Styles.SelectHeader onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
        {selectedBiome === "all" ? (
          <span>{t("animals.filter.all_enclosures")}</span>
        ) : (
          <Styles.SelectedValue>
            {/* Tipp: Entweder label im Badge ODER Styles.Label nutzen.
              Hier nutzen wir das Label aus Styles für das Header-Design.
            */}
            <BiomeBadge type={selectedBiome} showTooltip={false} />
            <Styles.Label>{selectedBiome}</Styles.Label>
          </Styles.SelectedValue>
        )}
        <Chevron isOpen={isOpen} />
      </Styles.SelectHeader>

      {isOpen && (
        <Styles.OptionsList>
          <Styles.Option
            onClick={() => {
              onSelectAction("all");
              setIsOpen(false);
            }}
          >
            {t("animals.filter.all_enclosures")}
          </Styles.Option>

          {uniqueBiomes.map((biome) => (
            <Styles.Option
              key={biome}
              onClick={() => {
                onSelectAction(biome);
                setIsOpen(false);
              }}
            >
              <BiomeBadge type={biome} size={20} showTooltip={false} />
              <Styles.Label>{biome}</Styles.Label>
            </Styles.Option>
          ))}
        </Styles.OptionsList>
      )}
    </Styles.SelectWrapper>
  );
}
