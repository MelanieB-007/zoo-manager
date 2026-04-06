import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Matcher für alle Pfade außer interne Next.js Dateien und statische Assets
    matcher: ['/', '/(de|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};