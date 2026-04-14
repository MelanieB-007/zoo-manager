"use client";

import React from "react";
import styled from "styled-components";

interface GameBadgeProps {
  type: string;
  fileName: string;
  size?: number;
  borderColor?: string;
}

export default function GameBadge({
  type,
  fileName,
  size = 50,
  borderColor = "#4ca64c",
}: GameBadgeProps) {
  const name = fileName?.trim();

  // Pfad-Logik
  const imagePath =
    fileName === "placeholder.png"
      ? `/images/placeholder.jpg`
      : `/images/${type}/${name}`;

  const cleanPath = imagePath.replace(/([^:]\/)\/+/g, "$1");

  return (
    <IconFrame $size={size} $borderColor={borderColor}>
      <StyledImage
        src={cleanPath}
        alt={fileName}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          console.error("Bild nicht gefunden:", cleanPath);
          target.src = "/images/placeholder.png";
        }}
      />
    </IconFrame>
  );
}

// Interface für die Styled Components
interface StyledFrameProps {
  $size: number;
  $borderColor: string;
}

const IconFrame = styled.div<StyledFrameProps>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background: #eee;

  border: 2px solid ${({ $borderColor }) => $borderColor};
  border-radius: 10px;

  padding: 0;
  display: flex;
  overflow: hidden;

  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.15);
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;

  -webkit-backface-visibility: hidden;
`;