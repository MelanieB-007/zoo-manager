INSERT INTO `user` (`id`, `name`, `email`, `image`, `roleId`, `last_login`)
VALUES (2147483647, 'Melanie Busse', 'android@melanie-busse.de',
        'https://cdn.discordapp.com/avatars/821692719373090846/3e37dcdbffe99d7b9322bb787b8306bb.png', 2,
        '2026-03-07 23:19:15');

INSERT INTO `role` (`id`, `name`)
VALUES (1, 'Admin'),
       (2, 'Direktor'),
       (3, 'Mitarbeiter'),
       (4, 'Mitglied'),
       (5, 'Besucher');

INSERT INTO `rolestext` (id, roleId, languageCode, roleName)
values (1, 1, 'de', 'Administrator'),
       (2,1, 'en', 'Administrator'),
       (3,2, 'de', 'Direktor'),
       (4,2, 'en', 'Director'),
       (5,3, 'de', 'Mitarbeiter'),
       (6,3, 'en', 'Employee'),
       (7,4, 'de', 'Mitglied'),
       (8,4, 'en', 'Member'),
       (9,5, 'de', 'Besucher'),
       (10,5, 'en', 'Visitor');