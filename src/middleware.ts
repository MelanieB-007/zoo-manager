import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Erlaube i18n nur für Pfade, die NICHT mit /api, /_next oder statischen Dateien beginnen
  matcher: [
    // Alle Pfade außer:
    "/((?!api|_next/static|_next/image|favicon.ico|images|icons|[\\w-]+\\.\\w+).*)",
  ],
};