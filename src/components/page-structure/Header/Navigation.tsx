"use client";

import styled, { css } from "styled-components";
import { IoChevronDown } from "react-icons/io5";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";

import { Link, usePathname } from "@/i18n/routing";
import { navConfig } from "@/config/navigationData";

export default function Navigation() {
  const t = useTranslations("Navigation");
  const { data: session } = useSession();
  const pathname = usePathname();

  // Prüft, ob ein Hauptmenüpunkt (oder eines seiner Untermenüs) aktiv ist
  const checkActive = (item: any) => {
    if (item.href) return pathname === item.href;
    if (item.basePath) return pathname.startsWith(item.basePath);
    return false;
  };

  return (
    <NavContainer>
      <NavList>
        {navConfig.map((item) => {
          // Auth-Check für Hauptpunkt
          if (item.requiresAuth && !session) return null;

          return (
            <NavItem key={item.id}>
              {item.href && !item.subMenu ? (
                // Fall A: Einfacher Link
                <NavLink href={item.href} $active={pathname === item.href}>
                  {t(item.labelKey)}
                </NavLink>
              ) : (
                // Fall B: Dropdown
                <>
                  <NavButton $active={checkActive(item)}>
                    {t(item.labelKey)} <IoChevronDown className="arrow" />
                  </NavButton>
                  <Dropdown>
                    {item.subMenu?.map((sub) => {
                      // Auth-Check für Untermenü-Punkte
                      if (sub.requiresAuth && !session) return null;

                      return (
                        <li key={sub.href}>
                          <DropdownLink
                            href={sub.href}
                            $active={pathname === sub.href}
                          >
                            {t(sub.labelKey)}
                          </DropdownLink>
                        </li>
                      );
                    })}
                  </Dropdown>
                </>
              )}
            </NavItem>
          );
        })}
      </NavList>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  position: relative;

  &:hover > ul {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  &:hover .arrow {
    transform: rotate(180deg);
  }
`;

const NavElementStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 38px;
  padding: 0 1.2rem;

  background: ${({ theme }) => theme.colors.brand.grey};
  border: ${({ theme }) => theme.shadows.shadowHeaderButton};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.shadowHeaderButton};

  color: ${({ theme }) => theme.colors.brand.green};
  font-weight: 800;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.shadowHeaderButtonHover};
    background: ${({ theme }) => theme.colors.brand.orangeLight};
  }

  .arrow {
    transition: transform 0.3s ease;
  }
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  ${NavElementStyles};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.brand.orange : theme.colors.brand.green};

  &::before {
    content: "🐾";
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    display: ${({ $active }) => ($active ? "block" : "none")};
    filter: drop-shadow(1px 1px 0 ${({ theme }) => theme.colors.brand.black});
    font-size: 0.8rem;
  }
`;

// 1. Definiere, welche Props die Komponente empfangen darf
interface NavButtonProps {
  $active: boolean;
}
// 2. Übergib das Interface in spitzen Klammern <...>
const NavButton = styled.div<NavButtonProps>`
  ${NavElementStyles};

  color: ${({ $active, theme }) =>
    $active ? theme.colors.brand.orange : theme.colors.brand.green};
  cursor: pointer;

  &::before {
    content: "🐾";
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    display: ${({ $active }) => ($active ? "block" : "none")};
    filter: drop-shadow(1px 1px 0 ${({ theme }) => theme.colors.brand.black});
    font-size: 0.8rem;
  }
`;
const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 180px;

  background: ${({ theme }) => theme.colors.header.orange};
  backdrop-filter: ${({ theme }) => theme.glassBlur};
  border: ${({ theme }) => theme.glassBorder};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  overflow: hidden;

  list-style: none;
  padding: 0.5rem 0;
  margin-top: 5px;

  z-index: 2002;

  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
`;

const DropdownLink = styled(Link)<{ $active: boolean }>`
  display: block;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.brand.petrol};
  text-decoration: none;
  font-size: 0.9rem;
  font-family: ${({ theme }) => theme.fonts.text};

  background: ${({ $active, theme }) =>
    $active ? theme.colors.header.dropdownLink : "transparent"};

  font-weight: ${(props) => (props.$active ? "900" : "400")};

  border-left: 4px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.brand.green : "transparent"};

  &:hover {
    background: ${({ theme }) => theme.colors.brand.greyLight || "#f5f5f5"};

    color: ${({ theme }) => theme.colors.brand.green};

    padding-left: 25px;
  }
`;
