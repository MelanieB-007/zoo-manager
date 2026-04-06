import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
    locales: ['de', 'en'], // Hier kannst du später 'da', 'nl' etc. hinzufügen
    defaultLocale: 'de'
});

export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);