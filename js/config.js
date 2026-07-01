/*
==========================================================
    AetherNovels
    Configuration
==========================================================
*/

const AetherConfig = {

    app: {

        name: "AetherNovels",

        version: "1.0.0",

        developer: "Rhapnel",

        environment: "production"

    },

    api: {

        /*
        ======================================================
        Manga Hook
        ======================================================
        */

        mangahook: {

            baseURL: "https://YOUR-MANGAHOOK-API.com",

            timeout: 15000

        },

        /*
        ======================================================
        SHIRO API
        ======================================================
        */

        shiro: {

            baseURL: "https://shiro.kuuhaku.space"

        },

        /*
        ======================================================
        Mangamint API
        ======================================================
        */

        mangamint: {

            baseURL: "https://mangamint.kaedenoki.net"

        }

    },

    image: {

        placeholder:
            "assets/images/placeholder.png",

        logo:
            "assets/logo.png"

    },

    reader: {

        defaultMode: "long-strip",

        preloadPages: 3,

        imageQuality: "high"

    },

    search: {

        debounce: 350,

        minimumCharacters: 2

    },

    homepage: {

        trendingLimit: 12,

        latestLimit: 18,

        popularLimit: 18,

        recommendationLimit: 12,

        hiddenGemLimit: 12

    },

    animation: {

        duration: 300,

        stagger: 100

    }

};

/*
==========================================================
Utility Helpers
==========================================================
*/

const API = AetherConfig.api;

const APP = AetherConfig.app;

const HOME = AetherConfig.homepage;

const SEARCH = AetherConfig.search;

const READER = AetherConfig.reader;
