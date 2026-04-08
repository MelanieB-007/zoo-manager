"use client";

import styled from "styled-components";

import { Link } from "@/i18n/routing";

export default function Logo() {
  return (
    <Link href="/" style={{ textDecoration: "none" }}>
      <StyledImage src="/images/logo.png" alt="Klub der tollen Tiere Logo" />
    </Link>
  );
}

const StyledImage = styled.img`
  width: 120px;
  height: auto;
  object-fit: contain;

  /* Hier nutzen wir die Props vom ThemeProvider */
  filter: drop-shadow(${({ theme }) => theme.shadows.shadowHeaderButton});
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05) rotate(-2deg);
  }

  /* Dynamischer Breakpoint aus dem Theme */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 80px;
  }
`;
