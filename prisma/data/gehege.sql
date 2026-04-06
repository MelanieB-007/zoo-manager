INSERT INTO `biome` (`id`, `price`, `priceTypeId`, `expansionsCost`, `priceTypeExpansionsCostId`, `size`, `image`)
VALUES (100, 500, 1, 500, 1, 144, 'gras.webp'),
       (200, 1000, 1, 1000, 1, 144, 'steppe.webp'),
       (300, 2000, 1, 2000, 1, 144, 'wald.webp'),
       (400, 4000, 1, 4000, 1, 144, 'berg.webp'),
       (500, 8000, 1, 8000, 1, 144, 'savanne.webp'),
       (600, 16000, 1, 16000, 1, 144, 'dschungel.webp'),
       (700, 32000, 1, 32000, 1, 144, 'eis.webp'),
       (800, 64000, 1, 64000, 1, 144, 'wasser.webp'),
       (1100, 20000, 1, 20000, 1, 144, 'blattdickicht.jpg'),
       (1200, 30000, 1, 30000, 1, 144, 'felsenwueste.jpg'),
       (2100, 80000, 1, 80000, 1, 144, 'suesswasser.jpg'),
       (2200, 90000, 1, 90000, 1, 144, 'salzwasser.jpg'),
       (3100, 150000, 1, 150000, 1, 144, 'noctarium.jpg');


INSERT INTO biomesText (biomeId, languageCode, biomeName, biomeDescription) VALUES
-- 100: Gras
(100, 'de', 'Gras', 'Gras-Gehege'),
(100, 'en', 'Grass', 'Grass Enclosure'),
-- 200: Steppe
(200, 'de', 'Steppe', 'Steppen-Gehege'),
(200, 'en', 'Plains', 'Plains Enclosure'),
-- 300: Wald
(300, 'de', 'Wald', 'Wald-Gehege'),
(300, 'en', 'Forest', 'Forest Enclosure'),
-- 400: Berg
(400, 'de', 'Berg', 'Berg-Gehege'),
(400, 'en', 'Mountain', 'Mountain Enclosure'),
-- 500: Savanne
(500, 'de', 'Savanne', 'Savannen-Gehege'),
(500, 'en', 'Savanna', 'Savanna Enclosure'),
-- 600: Dschungel
(600, 'de', 'Dschungel', 'Dschungel-Gehege'),
(600, 'en', 'Jungle', 'Jungle Enclosure'),
-- 700: Eis
(700, 'de', 'Eis', 'Eis-Gehege'),
(700, 'en', 'Ice', 'Ice Enclosure'),
-- 800: Wasser
(800, 'de', 'Wasser', 'Wasser-Gehege'),
(800, 'en', 'Water', 'Water Enclosure'),
-- 1100: Blattdickicht
(1100, 'de', 'Blattdickicht', 'Blattdickicht-Gehege'),
(1100, 'en', 'Leafy Thicket', 'Leafy Thicket Enclosure'),
-- 1200: Felsenwüste
(1200, 'de', 'Felsenwüste', 'Felsenwüsten-Gehege'),
(1200, 'en', 'Rocky Desert', 'Rocky Desert Enclosure'),
-- 2100: Süßwasser
(2100, 'de', 'Süßwasser', 'Süßwasser-Gehege'),
(2100, 'en', 'Freshwater', 'Freshwater Enclosure'),
-- 2200: Salzwasser
(2200, 'de', 'Salzwasser', 'Salzwasser-Gehege'),
(2200, 'en', 'Saltwater', 'Saltwater Enclosure'),
-- 3100: Noctarium
(3100, 'de', 'Noctarium', 'Noctarium-Gehege'),
(3100, 'en', 'Noctarium', 'Noctarium Enclosure');