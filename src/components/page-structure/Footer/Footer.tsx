"use client";

import styled from "styled-components";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <StyledFooter>
      <FooterContent>
        <p>
          © 2026 - Klub der tollen Tiere |{" "}
          <Link href="/imprint">{t("footer_imprint")}</Link>
        </p>
      </FooterContent>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: relative;
  flex-shrink: 0;
  padding: 1rem 0;
  margin: 10px auto;
  width: 100%;
  max-width: ${({ theme }) => theme.widthPage};
  min-height: 70px;
  z-index: 1;
  text-align: center;

  /* Nutzung deines Themes */
  background-color: ${({ theme }) => theme.colors.header.orange};
  backdrop-filter: ${({ theme }) => theme.glassBlur};
  border: ${({ theme }) => theme.glassBorder};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.soft};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 2px;
    background: ${({ theme }) => theme.colors.brand.orange};
    box-shadow: 0 4px 16px ${({ theme }) => theme.colors.brand.orange};
  }

  p {
    margin: 0.5rem 0;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.brand.white};
    font-family: ${({ theme }) => theme.fonts.text};
    font-weight: 500;
    /* Ein leichter Text-Shadow sorgt für bessere Lesbarkeit auf dem Glas-Effekt */
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  a {
    color: ${({ theme }) => theme.colors.brand.white};
    text-decoration: none;
    margin-left: 5px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.brand.orange};
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.brand.orange};
      text-shadow: 0 0 8px ${({ theme }) => theme.colors.brand.orange};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem;
    width: 95%; /* Etwas Platz am Rand auf mobilen Geräten */
  }
`;

const FooterContent = styled.div`
  padding: 0.5rem 0;
  opacity: 0.95;
`;
