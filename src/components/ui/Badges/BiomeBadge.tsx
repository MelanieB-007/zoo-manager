"use client";

import React from "react";
import styled from "styled-components";
import NextImage from "next/image";
import { useTranslations } from "next-intl";

import { habitatColors } from "@/utils/habitatConstants";
import Tooltip from "@/components/ui/Tooltip/Tooltip";

interface BiomeBadgeProps {
  type: string;
  showTooltip?: boolean;
  size?: number;
  label?: string;
}

export default function BiomeBadge({
  type,
  showTooltip = true,
  size = 20,
  label,
}: BiomeBadgeProps) {
  const t = useTranslations("animals");

  // Normalisierung des Typs für Dateipfade und Farben
  const safeType = type?.toLowerCase() || "default";

  const BadgeContent = (
    <StyledBadge $biomeType={safeType}>
      <NextImage
        src={`/images/gehege/icons/${safeType}.webp`}
        alt={type || "Biome"}
        width={size}
        height={size}
      />
      {label && <LabelText>{label}</LabelText>}
    </StyledBadge>
  );

  if (!showTooltip) return BadgeContent;

  return (
    <Tooltip text={`${type} ${t("table.enclosure")}`}>{BadgeContent}</Tooltip>
  );
}

const StyledBadge = styled.div<{ $biomeType: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 4px 10px;
  border-radius: 20px;

  background-color: ${({ $biomeType }) =>
    (habitatColors[$biomeType]?.main || "#666") +
    "33"}; // 33 = ca. 20% Transparenz

  border: 2px solid
    ${({ $biomeType }) => habitatColors[$biomeType]?.main || "#666"};

  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const LabelText = styled.span`
  font-weight: 700;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.brand.greenDark};
  text-transform: capitalize;
`;
