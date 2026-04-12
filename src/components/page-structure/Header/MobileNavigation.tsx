"use client";

import { useState } from "react";
import styled from "styled-components";
import { IoChevronDown } from "react-icons/io5";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";

import { Link } from "@/i18n/routing";
import { navConfig } from "@/config/navigationData";
import Login from "@/components/page-structure/Header/Login"; // Unser i18n Link-Wrapper
//import Login from "./Login";

// @ts-ignore
export default function MobileNavigation({ isOpen, onClose }) {
  const t = useTranslations("Navigation");
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const { data: session } = useSession();

  const toggleSubMenu = (menuId: string) => {
    setOpenSubMenu(openSubMenu === menuId ? null : menuId);
  };

  return (
    <Overlay $isOpen={isOpen}>
      <MenuContent>
        {navConfig.map((item) => {
          // Falls der Hauptpunkt Auth braucht und wir nicht eingeloggt sind: überspringen
          if (item.requiresAuth && !session) return null;

          // Fall A: Einfacher Link (z.B. Home)
          if (item.href && !item.subMenu) {
            return (
              <MobileNavLink key={item.id} href={item.href} onClick={onClose}>
                {t(item.labelKey)}
              </MobileNavLink>
            );
          }

          // Fall B: Dropdown / Menügruppe
          return (
            <MobileMenuWrapper key={item.id}>
              <MenuHeader onClick={() => toggleSubMenu(item.id)}>
                {t(item.labelKey)}
                <StyledChevron $isRotated={openSubMenu === item.id} />
              </MenuHeader>

              <SubMenu $isOpen={openSubMenu === item.id}>
                {item.subMenu?.map((sub) => {
                  // Prüfe Auth für Untermenüpunkte
                  if (sub.requiresAuth && !session) return null;

                  return (
                    <SubNavLink
                      key={sub.href}
                      href={sub.href}
                      onClick={onClose}
                    >
                      {t(sub.labelKey)}
                    </SubNavLink>
                  );
                })}
              </SubMenu>
            </MobileMenuWrapper>
          );
        })}

        <Divider />

        <LoginContainer>
          <Login />
        </LoginContainer>
      </MenuContent>
    </Overlay>
  );
}

const Overlay = styled.nav<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.brand.petrolDark};
  z-index: 9999;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  /* Animation */
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(100%)"};

  transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);

  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};

  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 100px 0 120px 0;
  width: 100%;
`;

const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const MenuHeader = styled.div`
  font-family: ${({ theme }) => theme.fonts.club}; /* Deine Zoo-Schrift */
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.ui.surface};
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 0.5rem;
`;

const StyledChevron = styled(IoChevronDown)<{ $isRotated: boolean }>`
  transition: transform 0.3s ease;
  transform: ${({ $isRotated }) =>
    $isRotated ? "rotate(180deg)" : "rotate(0deg)"};
`;

const SubMenu = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  max-height: ${({ $isOpen }) => ($isOpen ? "300px" : "0")};
  transition: all 0.3s ease-in-out;
  background: rgba(255, 255, 255, 0.05);
  width: 100%;
  padding: ${({ $isOpen }) => ($isOpen ? "10px 0" : "0")};
`;

const SubNavLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.brand.orange};
  text-decoration: none;
  padding: 12px 0;
  font-weight: bold;

  &:active {
    color: ${({ theme }) => theme.colors.ui.surface};
  }
`;

const MobileNavLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.club};
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.ui.surface};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 1rem 0;
`;

const LoginContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
`;

const Divider = styled.div`
  width: 60px;
  height: 2px;
  background: rgba(255, 255, 255, 0.2);
  margin: 1rem 0;
`;
