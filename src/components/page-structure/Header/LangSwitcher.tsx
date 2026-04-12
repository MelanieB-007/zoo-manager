"use client";

import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { IoChevronDown } from "react-icons/io5";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export default function LangSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const flagMap: Record<string, string> = {
    de: "fi-de",
    en: "fi-gb",
    dk: "fi-dk",
    nl: "fi-nl",
  };

  return (
    <LangSwitcherContainer ref={wrapperRef}>
      <CurrentLanguage onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
        <span className={`fi ${flagMap[locale] || "fi-de"}`}></span>
        <StyledChevron $isOpen={isOpen} />
      </CurrentLanguage>

      <LangDropdown $show={isOpen}>
        <LangOption onClick={() => handleLocaleChange("de")}>
          <span className="fi fi-de"></span> DE
        </LangOption>
        <LangOption onClick={() => handleLocaleChange("en")}>
          <span className="fi fi-gb"></span> EN
        </LangOption>
      </LangDropdown>
    </LangSwitcherContainer>
  );
}

// --- Styled Components ---

const LangSwitcherContainer = styled.div`
  position: relative;
`;

const CurrentLanguage = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0.5rem 0.8rem;

  background: ${({ theme }) => theme.colors.brand.grey};
  border: ${({ theme }) => theme.glassBorder};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.brand.greyLight};
    transform: translateY(-1px);
  }

  .fi {
    border-radius: 2px;
  }
`;

const StyledChevron = styled(IoChevronDown)<{ $isOpen: boolean }>`
  width: 14px;
  height: 14px;
  color: ${({ theme }) => 
    theme.colors.brand.green};
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

const LangDropdown = styled.div<{ $show: boolean }>`
  position: absolute;
  top: 120%;
  right: 0;
  background: ${({ theme }) =>
    theme.colors.header.orange}; 
  backdrop-filter: ${({ theme }) => 
    theme.glassBlur};
  border: ${({ theme }) => 
    theme.glassBorder};
  border-radius: ${({ theme }) => 
    theme.borderRadius};
  padding: 5px;
  box-shadow: ${({ theme }) => 
    theme.shadows.soft};
  min-width: 80px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 3000;
  overflow: hidden;

  opacity: ${({ $show }) => 
    ($show ? 1 : 0)};
  visibility: ${({ $show }) => 
    ($show ? "visible" : "hidden")};
  transform: ${({ $show }) => 
    ($show ? "translateY(0)" : "translateY(10px)")};
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const LangOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 8px;
  color: ${({ theme }) => 
    theme.colors.brand.petrol};
  font-size: 0.8rem;
  font-weight: 800;
  border-radius: 5px;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => 
      theme.colors.header.dropdownLink};
    color: ${({ theme }) => 
      theme.colors.brand.green};
  }

  .fi {
    font-size: 0.9rem;
    border-radius: 2px;
  }
`;
