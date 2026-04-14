"use client";

import React from "react";
import styled from "styled-components";

interface ChevronProps {
  isOpen: boolean; // ohne das $ Zeichen in den Props
  className?: string;
}

export default function Chevron({ isOpen, className }: ChevronProps) {
  return (
    <StyledChevron $isOpen={isOpen} className={className}>
      ▼
    </StyledChevron>
  );
}

const StyledChevron = styled.span<{ $isOpen: boolean }>`
  display: inline-block;
  font-size: 0.7rem;
  transition: transform 0.3s ease-in-out;
  /* Hier nutzen wir das $isOpen für das CSS */
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  color: ${({ theme }) => theme.colors.brand.greenLighter};
  user-select: none;
  line-height: 1;
`;
