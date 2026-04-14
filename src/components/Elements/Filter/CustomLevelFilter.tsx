"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";

import * as Styles from "./Filter.styles";

import { Animal } from "@/types/animal";
import Chevron from "@/components/ui/Icons/Chevron";
import ShelterLevelBadge from "@/components/ui/Badges/ShelterLevelBadge";

interface CustomLevelFilterProps {
  animals: Animal[];
  selectedLevel: string;
  onSelectAction: (value: string) => void;
}

export default function CustomLevelFilter({
  animals = [],
  selectedLevel,
  onSelectAction,
}: CustomLevelFilterProps) {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Der Click-Outside Hook (den wir später in Phase 2 in einen Custom Hook auslagern könnten)
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

  // Einzigartige Level extrahieren & sortieren
  const uniqueLevels = Array.from(new Set(animals.map((a) => a.shelterLevel)))
    .filter((lvl): lvl is number => lvl !== undefined && lvl !== null)
    .sort((a, b) => a - b);

  return (
    <Styles.SelectWrapper ref={wrapperRef}>
      <Styles.SelectHeader onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
        {selectedLevel === "all" || selectedLevel === "Alle" ? (
          <span>{t("animals.filter.all_levels")}</span>
        ) : (
          <Styles.SelectedValue>
            <Styles.ScaledBadge>
              <ShelterLevelBadge
                level={Number(selectedLevel)}
                habitat="gras"
                showTooltip={false}
                size={60}
              />
            </Styles.ScaledBadge>
            <Styles.Label>
              {t("animals.filter.level_label")} {selectedLevel}
            </Styles.Label>
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
            {t("animals.filter.all_levels")}
          </Styles.Option>

          {uniqueLevels.map((lvl) => (
            <Styles.Option
              key={lvl}
              onClick={() => {
                onSelectAction(String(lvl));
                setIsOpen(false);
              }}
            >
              <Styles.ScaledBadge>
                <ShelterLevelBadge
                  level={lvl}
                  habitat="gras"
                  showTooltip={false}
                  size={60}
                />
              </Styles.ScaledBadge>
              <Styles.Label>
                {t("animals.filter.level_label")} {lvl}
              </Styles.Label>
            </Styles.Option>
          ))}
        </Styles.OptionsList>
      )}
    </Styles.SelectWrapper>
  );
}
