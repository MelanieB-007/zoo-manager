import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import StyledComponentsRegistry from "@/lib/registry";
import "../globals.css"; // Deine CSS-Variablen laden

// Hier definierst du den Titel für den Browser-Tab
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
      <body style={{ margin: 0 }}>
        <StyledComponentsRegistry>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
