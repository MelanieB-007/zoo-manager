"use client";

import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Deine Zoo-Charaktere
const ROLE_IMAGES = {
  Director: "/images/roles/Grandpa.webp",
  Employee: "/images/roles/Lucy.webp",
  Member: "/images/roles/Jenkins.webp",
  Visitor: "/images/roles/Vicky.webp",
};

interface RoleBadgeProps {
  role: "Director" | "Employee" | "Member" | "Visitor" | string;
}

export default function RoleBadge({ role }: RoleBadgeProps) {
  const t = useTranslations("Navigation"); // Wir bleiben im Navigation-Namespace oder "Common"

  // Fallback auf Besucher, falls die Rolle unbekannt ist
  const imageSrc =
    ROLE_IMAGES[role as keyof typeof ROLE_IMAGES] || ROLE_IMAGES.Visitor;

  return (
    <BadgeContainer>
      <RoleIconWrapper>
        <Image src={imageSrc} alt={role} width={45} height={45} priority />
      </RoleIconWrapper>

      <Tooltip className="tooltip">
        {/* Erwartet in deiner JSON z.B. "role_Direktor": "Zoodirektor" */}
        {t(`role_${role}`)}
      </Tooltip>
    </BadgeContainer>
  );
}

// --- Animationen ---

const hoverBounce = keyframes`
  0% { transform: scale(1) translateY(0); }
  50% { transform: scale(1.1) translateY(-5px); }
  100% { transform: scale(1.05) translateY(-3px); }
`;

const popIn = keyframes`
  0% { transform: scale(0); rotate: -20deg; }
  70% { transform: scale(1.2); rotate: 10deg; }
  100% { transform: scale(1); rotate: 0deg; }
`;

// --- Styled Components ---

const BadgeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &:hover .tooltip {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
  }
`;

const Tooltip = styled.span`
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);

  background: ${({ theme }) => theme.colors.brand.petrol};
  color: white;
  padding: 5px 12px;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  white-space: nowrap;
  letter-spacing: 0.05em;

  box-shadow: 3px 3px 0 ${({ theme }) => theme.colors.brand.black};
  border: 2px solid white;

  opacity: 0;
  visibility: hidden;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  pointer-events: none;
  z-index: 1000;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.ui.surface} transparent
      transparent transparent;
  }
`;

const RoleIconWrapper = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.brand.green};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.brand.warmWhite};
  box-shadow: 2px 2px 0 ${({ theme }) => theme.colors.brand.petrol};
  cursor: help;

  animation: ${popIn} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: all 0.3s ease;

  &:hover {
    animation: ${hoverBounce} 0.4s forwards;
    border-color: ${({ theme }) => theme.colors.brand.orange};
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
