"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const obj = [
            {
                id: 1,
                name: "dor kachlon",
                email: "dor1kachlon@gmail.com",
                user_created_at: "2020-09-12",
                created_at: "2020-09-12",
                updated_at: "2020-09-12",
                password: "123456789",
                is_admin: 1,
                preferenced:
                    '[{"preference": "Eminem"}, {"preference": "Omer Adam"}]',
                remember_token: 1,
            },
            {
                id: 2,
                name: "Guy Serfaty",
                email: "GuySerfaty@gmail.com",
                user_created_at: "2020-09-12",
                created_at: "2020-09-12",
                updated_at: "2020-09-12",
                password: "Guy123456",
                is_admin: 1,
                preferenced:
                    '[{"preference": "Maroon 5"}, {"preference": "Avicii"}]',
                remember_token: 1,
            },
            {
                id: 3,
                name: "Willis Atty",
                email: "watty0@blogtalkradio.com",
                user_created_at: "2020-09-07",
                created_at: "2020-09-07",
                updated_at: "2020-09-07",
                password: "rdsYKcbxoo5",
                is_admin: 0,
                preferenced: '{"key1": "value1"}',
                remember_token: 1,
            },
            {
                id: 4,
                name: "Vasili Yeardsley",
                email: "vyeardsley0@abc.net.au",
                user_created_at: "2019-11-10",
                created_at: "2019-11-10",
                updated_at: "2020-04-29",
                password: "Zlwz6W1WE",
                is_admin: 1,
                preferenced: "[{}, {}, {}]",
                remember_token: 1,
            },
            {
                id: 5,
                name: "Albrecht Fermin",
                email: "afermin2@sitemeter.com",
                user_created_at: "2020-02-03",
                created_at: "2020-02-03",
                updated_at: "2020-08-10",
                password: "ITD4LrB",
                is_admin: 1,
                preferenced: "[{}, {}, {}]",
                remember_token: 1,
            },
            {
                id: 6,
                name: "Sosanna Brodnecke",
                email: "sbrodnecke3@unc.edu",
                user_created_at: "2020-09-04",
                created_at: "2020-09-04",
                updated_at: "2019-09-22",
                password: "YISqFyv0I9yD",
                is_admin: 0,
                preferenced: "[{}]",
                remember_token: 0,
            },
            {
                id: 7,
                name: "Leopold Pellamonuten",
                email: "lpellamonuten4@hc360.com",
                user_created_at: "2020-05-15",
                created_at: "2020-05-15",
                updated_at: "2019-10-06",
                password: "4OAGPN5t",
                is_admin: 0,
                preferenced: "[{}, {}, {}, {}, {}]",
                remember_token: 0,
            },
            {
                id: 8,
                name: "Rosene Jewster",
                email: "rjewster5@berkeley.edu",
                user_created_at: "2019-11-17",
                created_at: "2019-11-17",
                updated_at: "2020-06-13",
                password: "P6HVyc5",
                is_admin: 1,
                preferenced: "[{}, {}]",
                remember_token: 0,
            },
            {
                id: 9,
                name: "Valentia Bushen",
                email: "vbushen6@salon.com",
                user_created_at: "2019-09-30",
                created_at: "2019-09-30",
                updated_at: "2020-07-12",
                password: "li4zwctG",
                is_admin: 1,
                preferenced: "[{}, {}]",
                remember_token: 0,
            },
            {
                id: 10,
                name: "Ainslie Leverage",
                email: "aleverage7@virginia.edu",
                user_created_at: "2020-04-10",
                created_at: "2020-04-10",
                updated_at: "2020-08-05",
                password: "VwXIAWt0aP",
                is_admin: 0,
                preferenced: "[{}, {}]",
                remember_token: 1,
            },
            {
                id: 11,
                name: "Sherline Orrobin",
                email: "sorrobin8@wp.com",
                user_created_at: "2020-07-17",
                created_at: "2020-07-17",
                updated_at: "2020-09-05",
                password: "n0uw4Gb8z6dW",
                is_admin: 1,
                preferenced: "[{}, {}]",
                remember_token: 1,
            },
            {
                id: 12,
                name: "Maren Letterese",
                email: "mletterese9@goo.gl",
                user_created_at: "2019-11-08",
                created_at: "2019-11-08",
                updated_at: "2019-10-29",
                password: "kDaW1diLol",
                is_admin: 1,
                preferenced: "[{}, {}, {}, {}, {}]",
                remember_token: 0,
            },
            {
                id: 13,
                name: "Ruperto Greydon",
                email: "rgreydona@hp.com",
                user_created_at: "2020-03-09",
                created_at: "2020-03-09",
                updated_at: "2020-08-05",
                password: "jUkTui7CP4ye",
                is_admin: 1,
                preferenced: "[{}, {}]",
                remember_token: 0,
            },
            {
                id: 14,
                name: "Olimpia Assad",
                email: "oassadb@webeden.co.uk",
                user_created_at: "2019-10-26",
                created_at: "2019-10-26",
                updated_at: "2019-11-24",
                password: "phq0vEo",
                is_admin: 1,
                preferenced: "[{}, {}]",
                remember_token: 1,
            },
            {
                id: 15,
                name: "Forbes Cameron",
                email: "fcameronc@ucla.edu",
                user_created_at: "2020-07-06",
                created_at: "2020-07-06",
                updated_at: "2020-08-28",
                password: "piaXBWSb",
                is_admin: 0,
                preferenced: "[{}]",
                remember_token: 1,
            },
            {
                id: 16,
                name: "Anthony Thay",
                email: "athayd@digg.com",
                user_created_at: "2020-07-28",
                created_at: "2020-07-28",
                updated_at: "2019-10-22",
                password: "N7pi5ixgNNn",
                is_admin: 1,
                preferenced: "[{}]",
                remember_token: 0,
            },
            {
                id: 17,
                name: "Naoma Haynes",
                email: "nhaynese@google.cn",
                user_created_at: "2019-11-09",
                created_at: "2019-11-09",
                updated_at: "2019-10-17",
                password: "ki422HDzPQ9b",
                is_admin: 1,
                preferenced: "[{}]",
                remember_token: 0,
            },
            {
                id: 18,
                name: "Ricard Stampfer",
                email: "rstampferf@dailymotion.com",
                user_created_at: "2019-11-02",
                created_at: "2019-11-02",
                updated_at: "2020-03-22",
                password: "MPjudv",
                is_admin: 0,
                preferenced: "[{}, {}, {}, {}, {}]",
                remember_token: 0,
            },
            {
                id: 19,
                name: "Petra Tourne",
                email: "ptourneg@creativecommons.org",
                user_created_at: "2020-07-31",
                created_at: "2020-07-31",
                updated_at: "2020-07-25",
                password: "Ye2LVNO97P",
                is_admin: 0,
                preferenced: "[{}, {}, {}, {}]",
                remember_token: 0,
            },
            {
                id: 20,
                name: "Patrica Schwandt",
                email: "pschwandth@nymag.com",
                user_created_at: "2020-08-06",
                created_at: "2020-08-06",
                updated_at: "2019-09-27",
                password: "WOyDLzjiUyFb",
                is_admin: 0,
                preferenced: "[{}, {}, {}, {}]",
                remember_token: 1,
            },
            {
                id: 21,
                name: "Abran Pottage",
                email: "apottagei@goo.gl",
                user_created_at: "2019-11-29",
                created_at: "2019-11-29",
                updated_at: "2020-07-17",
                password: "ERkh1z5yDkPr",
                is_admin: 1,
                preferenced: "[{}, {}]",
                remember_token: 0,
            },
            {
                id: 22,
                name: "Carly Dacres",
                email: "cdacresj@360.cn",
                user_created_at: "2019-12-15",
                created_at: "2019-12-15",
                updated_at: "2020-03-09",
                password: "ttN0Nxuj5B",
                is_admin: 0,
                preferenced: "[{}, {}, {}]",
                remember_token: 1,
            },
            {
                id: 23,
                name: "Rube Barkus",
                email: "rbarkusk@zimbio.com",
                user_created_at: "2019-12-26",
                created_at: "2019-12-26",
                updated_at: "2020-07-26",
                password: "WV080nG",
                is_admin: 1,
                preferenced: "[{}, {}]",
                remember_token: 0,
            },
            {
                id: 24,
                name: "Veronica Farthin",
                email: "vfarthinl@1und1.de",
                user_created_at: "2020-04-15",
                created_at: "2020-04-15",
                updated_at: "2020-07-30",
                password: "9xymIXXy2sjI",
                is_admin: 1,
                preferenced: "[{}, {}, {}, {}, {}]",
                remember_token: 1,
            },
            {
                id: 25,
                name: "Mala Jobern",
                email: "mjobernm@newsvine.com",
                user_created_at: "2020-03-18",
                created_at: "2020-03-18",
                updated_at: "2020-05-07",
                password: "joQ6qxYOf",
                is_admin: 1,
                preferenced: "[{}, {}, {}]",
                remember_token: 0,
            },
            {
                id: 26,
                name: "Jeremie Killner",
                email: "jkillnern@unicef.org",
                user_created_at: "2020-09-04",
                created_at: "2020-09-04",
                updated_at: "2020-09-14",
                password: "2NVtUY",
                is_admin: 0,
                preferenced: "[{}, {}, {}, {}, {}]",
                remember_token: 0,
            },
            {
                id: 27,
                name: "Leon Moiser",
                email: "lmoisero@desdev.cn",
                user_created_at: "2020-02-10",
                created_at: "2020-02-10",
                updated_at: "2020-01-05",
                password: "tZR0ryKfXw",
                is_admin: 0,
                preferenced: "[{}]",
                remember_token: 1,
            },
            {
                id: 28,
                name: "Gelya Korting",
                email: "gkortingp@google.es",
                user_created_at: "2020-06-17",
                created_at: "2020-06-17",
                updated_at: "2019-11-27",
                password: "18GF7i",
                is_admin: 0,
                preferenced: "[{}, {}, {}, {}, {}]",
                remember_token: 1,
            },
            {
                id: 29,
                name: "Oralle Bowe",
                email: "oboweq@histats.com",
                user_created_at: "2020-07-04",
                created_at: "2020-07-04",
                updated_at: "2020-04-15",
                password: "vJE8RVc6",
                is_admin: 0,
                preferenced: "[{}, {}, {}, {}, {}]",
                remember_token: 0,
            },
            {
                id: 30,
                name: "Forster Scoles",
                email: "fscolesr@w3.org",
                user_created_at: "2020-04-03",
                created_at: "2020-04-03",
                updated_at: "2019-10-24",
                password: "Gog1s2UPKA",
                is_admin: 1,
                preferenced: "[{}, {}, {}, {}, {}]",
                remember_token: 0,
            },
            {
                id: 31,
                name: "Tomaso Cameli",
                email: "tcamelis@meetup.com",
                user_created_at: "2020-05-12",
                created_at: "2020-05-12",
                updated_at: "2019-12-25",
                password: "qVPElxbM9lD",
                is_admin: 0,
                preferenced: "[{}, {}]",
                remember_token: 1,
            },
            {
                id: 32,
                name: "Valera Hyams",
                email: "vhyamst@webmd.com",
                user_created_at: "2019-11-09",
                created_at: "2019-11-09",
                updated_at: "2020-05-04",
                password: "he0iOjfb",
                is_admin: 0,
                preferenced: "[{}]",
                remember_token: 1,
            },
            {
                id: 33,
                name: "Bronson Church",
                email: "bchurchu@clickbank.net",
                user_created_at: "2020-03-16",
                created_at: "2020-03-16",
                updated_at: "2019-12-10",
                password: "d4AbAx",
                is_admin: 1,
                preferenced: "[{}, {}]",
                remember_token: 1,
            },
            {
                id: 34,
                name: "Filberto Chisolm",
                email: "fchisolmv@etsy.com",
                user_created_at: "2020-07-19",
                created_at: "2020-07-19",
                updated_at: "2020-05-09",
                password: "KKNgi2eep5wx",
                is_admin: 0,
                preferenced: "[{}, {}, {}]",
                remember_token: 0,
            },
            {
                id: 35,
                name: "Otha Hullot",
                email: "ohullotw@unesco.org",
                user_created_at: "2019-11-03",
                created_at: "2019-11-03",
                updated_at: "2020-08-17",
                password: "srjJFSiN",
                is_admin: 1,
                preferenced: "[{}]",
                remember_token: 0,
            },
            {
                id: 36,
                name: "Abey McGuffie",
                email: "amcguffiex@chicagotribune.com",
                user_created_at: "2020-02-23",
                created_at: "2020-02-23",
                updated_at: "2020-08-21",
                password: "1bOX4oblh",
                is_admin: 1,
                preferenced: "[{}, {}]",
                remember_token: 0,
            },
            {
                id: 37,
                name: "Yul Kittel",
                email: "ykittely@squidoo.com",
                user_created_at: "2020-08-11",
                created_at: "2020-08-11",
                updated_at: "2020-04-07",
                password: "uJm8iLzMu",
                is_admin: 1,
                preferenced: "[{}, {}, {}, {}]",
                remember_token: 1,
            },
            {
                id: 38,
                name: "Darrelle Mocher",
                email: "dmocherz@t.co",
                user_created_at: "2020-04-04",
                created_at: "2020-04-04",
                updated_at: "2020-07-10",
                password: "k5BwU7Axp",
                is_admin: 1,
                preferenced: "[{}, {}, {}, {}, {}]",
                remember_token: 1,
            },
            {
                id: 39,
                name: "Delphine Bruck",
                email: "dbruck10@ow.ly",
                user_created_at: "2019-10-16",
                created_at: "2019-10-16",
                updated_at: "2020-01-09",
                password: "jdwwY1Sa36s",
                is_admin: 0,
                preferenced: "[{}, {}, {}]",
                remember_token: 1,
            },
            {
                id: 40,
                name: "Dorris Lowne",
                email: "dlowne11@cyberchimps.com",
                user_created_at: "2020-03-22",
                created_at: "2020-03-22",
                updated_at: "2020-03-15",
                password: "fcvMetIqi",
                is_admin: 0,
                preferenced: "[{}, {}, {}, {}]",
                remember_token: 1,
            },
            {
                id: 41,
                name: "Godfree Kilmartin",
                email: "gkilmartin12@tmall.com",
                user_created_at: "2020-06-13",
                created_at: "2020-06-13",
                updated_at: "2020-02-15",
                password: "yYrt2iG",
                is_admin: 1,
                preferenced: "[{}, {}, {}]",
                remember_token: 1,
            },
        ];
        return queryInterface.bulkInsert("Users", obj);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
