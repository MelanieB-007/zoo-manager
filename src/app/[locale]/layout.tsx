import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import StyledComponentsRegistry from "@/lib/registry";
import React from "react";

import Providers from "@/components/Providers";
import Header from "@/components/page-structure/Header/Header";

import "../globals.css";

export const metadata: Metadata = {
  title: "Zoo 2: Animal Park Manager",
  description: "Klub der tollen Tiere - Community Tool",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <StyledComponentsRegistry>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {/* Hier kommen alle Client-Kontexte rein */}
            <Providers>
              <Header />
            </Providers>
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
