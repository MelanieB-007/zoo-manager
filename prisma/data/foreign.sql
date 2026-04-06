INSERT INTO `origin` (`id`, `name`, `image`)
VALUES (1, 'Akademie', 'akademie.png'),
       (2, 'Sammelalbum', 'sammelalbum.png'),
       (3, 'Zuchtwochen', 'zucht.png'),
       (4, 'Event', 'event.png'),
       (5, 'Klubwettbewerb', 'klubwettbewerb.png'),
       (6, 'normale Zucht', 'zucht.png'),
       (7, 'Vip-Tier', 'vip.png'),
       (8, 'Kalender', 'kalender.png'),
       (9, 'Premium-Tier', 'premium.png'),
       (10, 'Shop', 'shop.png'),
       (11, 'Klubshop', 'shop.png'),
       (12, 'Freundschaftstruhe', 'freundschaftstruhe.png'),
       (13, 'Retro Truhe', 'retro-truhe.png'),
       (14, 'Legendäre Truhe', 'legendaere-truhe.png'),
       (15, 'Quest', 'quest.png'),
       (16, 'Level Up', 'level-up.png'),
       (17, 'Epische Truhe', 'epische-truhe.png'),
       (18, 'Seltene Truhe', 'seltene-truhe.png'),
       (19, 'Top-Angebot', 'top.png'),
       (20, 'Glücksrad', 'gluecksrad.png'),
       (21, 'Eismann', 'eismann.png');

INSERT INTO originText (originId, languageCode, originName, originDescription)
VALUES
-- 1: Akademie
(1, 'de', 'Akademie', NULL),
(1, 'en', 'Academy', NULL),
-- 2: Sammelalbum
(2, 'de', 'Sammelalbum', NULL),
(2, 'en', 'Collector\'s Album', NULL),
-- 3: Zuchtwochen
(3, 'de', 'Zuchtwochen', NULL),
(3, 'en', 'Breeding Weeks', NULL),
-- 4: Event
(4, 'de', 'Event', NULL),
(4, 'en', 'Event', NULL),
-- 5: Klubwettbewerb
(5, 'de', 'Klubwettbewerb', NULL),
(5, 'en', 'Club Competition', NULL),
-- 6: normale Zucht
(6, 'de', 'normale Zucht', NULL),
(6, 'en', 'Regular Breeding', NULL),
-- 7: Vip-Tier
(7, 'de', 'VIP-Tier', NULL),
(7, 'en', 'VIP Animal', NULL),
-- 8: Kalender
(8, 'de', 'Kalender', NULL),
(8, 'en', 'Calendar', NULL),
-- 9: Premium-Tier
(9, 'de', 'Premium-Tier', NULL),
(9, 'en', 'Premium Animal', NULL),
-- 10: Shop
(10, 'de', 'Shop', NULL),
(10, 'en', 'Shop', NULL),
-- 11: Klubshop
(11, 'de', 'Klubshop', NULL),
(11, 'en', 'Club Shop', NULL),
-- 12: Freundschaftstruhe
(12, 'de', 'Freundschaftstruhe', NULL),
(12, 'en', 'Friendship Chest', NULL),
-- 13: Retro Truhe
(13, 'de', 'Retro Truhe', NULL),
(13, 'en', 'Retro Chest', NULL),
-- 14: Legendäre Truhe
(14, 'de', 'Legendäre Truhe', NULL),
(14, 'en', 'Legendary Chest', NULL),
-- 15: Quest
(15, 'de', 'Quest', NULL),
(15, 'en', 'Quest', NULL),
-- 16: Level Up
(16, 'de', 'Level Up', NULL),
(16, 'en', 'Level Up', NULL),
-- 17: Epische Truhe
(17, 'de', 'Epische Truhe', NULL),
(17, 'en', 'Epic Chest', NULL),
-- 18: Seltene Truhe
(18, 'de', 'Seltene Truhe', NULL),
(18, 'en', 'Rare Chest', NULL),
-- 19: Top-Angebot
(19, 'de', 'Top-Angebot', NULL),
(19, 'en', 'Top Offer', NULL),
-- 20: Glücksrad
(20, 'de', 'Glücksrad', NULL),
(20, 'en', 'Wheel of Fortune', NULL),
-- 21: Eismann
(21, 'de', 'Eismann', NULL),
(21, 'en', 'Ice Cream Man', NULL);

INSERT INTO `pricetype` (`id`, `name`, `image`)
VALUES (1, 'Zoo-Dollar', 'zoodollar.webp'),
       (2, 'Diamanten', 'diamant.webp');

INSERT INTO `pricetypetext` (id, priceTypeId, languageCode, priceTypeName)
VALUES (1, 1, 'DE', 'Zoo-Dollar'),
       (2, 1, 'EN', 'Zoo-Dollar'),
       (3, 2, 'DE', 'Diamanten'),
       (4, 2, 'EN', 'Diamonds');


INSERT INTO `language` (`code`, `name`, `flag`)
VALUES ('de', 'Deutsch', NULL),
       ('en', 'English', NULL);


