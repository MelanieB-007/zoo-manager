"use client";

import { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import styled from "styled-components";

import Navigation from "@/components/page-structure/Header/Navigation";
import Logo from "@/components/page-structure/Header/Logo";
import MobileNavigation from "@/components/page-structure/Header/MobileNavigation";
import Login from "@/components/page-structure/Header/Login";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup-Funktion, um Scrollen wieder zu erlauben, wenn Komponente unmountet
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <StyledHeader>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <TitleSection>
        <MainTitle>Klub der tollen Tiere</MainTitle>
      </TitleSection>

      <MobileMenuButton onClick={toggleMenu} aria-label="Toggle Menu">
        {isMenuOpen ? <IoClose size={32} /> : <IoMenu size={32} />}
      </MobileMenuButton>

      <MobileNavigation isOpen={isMenuOpen} onClose={toggleMenu} />

      <NavSection>
        <Navigation />
      </NavSection>

      <RightSection>
        <Login />
      </RightSection>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 140px 1fr 140px;
  grid-template-rows: 80px 50px;
  column-gap: 1.5rem;

  padding: 10px 1.5rem;
  margin: 10px auto 5px auto;
  width: 100%;

  /* Nutzt das Theme vom Provider */
  max-width: ${({ theme }) => theme.widthPage};
  background: ${({ theme }) => theme.colors.brand.orange};
  backdrop-filter: ${({ theme }) => theme.glassBlur};
  border: ${({ theme }) => theme.glassBorder};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.soft};

  position: relative;
  z-index: 2000;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 70px 1fr 60px;
    grid-template-rows: 70px;
    /* ... */
  }
`;

const LogoWrapper = styled.div`
  grid-column: 1;
  grid-row: 1 / span 2;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-row: 1;

    & svg,
    & img {
      width: 60px;
      height: auto;
    }
  }
`;

const TitleSection = styled.div`
  grid-column: 2;
  grid-row: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.club};
  font-size: clamp(1.2rem, 5vw, 2.4rem);
  color: ${({ theme }) => theme.colors.brand.green};
  margin: 0;
  line-height: 1.1;

  text-shadow:
    2px 2px 0 ${({ theme }) => theme.colors.brand.petrol},
    4px 4px 0 ${({ theme }) => theme.colors.brand.petrolDark},
    6px 6px 0 ${({ theme }) => theme.colors.brand.black};

  letter-spacing: 0.15em;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    letter-spacing: 0.05em;
    text-shadow:
      1px 1px 0 ${({ theme }) => theme.colors.brand.petrol},
      2px 2px 0 ${({ theme }) => theme.colors.brand.black};
  }
`;

const NavSection = styled.div`
  grid-column: 2;
  grid-row: 2;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const RightSection = styled.div`
  grid-column: 3;
  grid-row: 1 / span 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  z-index: 10000;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.brand.white} !important;
  cursor: pointer;

  &:hover {
    transform: rotate(90deg);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    grid-column: 3;
    grid-row: 1;
    align-items: center;
    justify-content: center;
  }
`;
