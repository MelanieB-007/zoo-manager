"use client";
import styled from "styled-components";
import { useTranslations } from "next-intl";

const Container = styled.div`
  background: ${({ theme }) => theme.colors.ui.bodyBg};
  color: ${({ theme }) => theme.colors.brand.petrol};
  padding: 50px;
  min-height: 100vh;
  font-family: sans-serif;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.brand.green};
`;

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <Container>
      <Title>{t("title")}</Title>
      <p>{t("badge")}</p>
      <p style={{ color: "grey" }}>Das Theme und die Sprache funktionieren!</p>
    </Container>
  );
}
