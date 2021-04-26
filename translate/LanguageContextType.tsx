export type LanguageContextType = {
    footer: {
        notifications: string,
        nations  : string,
        home  : string,
        map  : string,
        settings  :  string,
    },

    notifications  : {
        header  : string,
    },

    nations  : {
        header  : string,
    },

    home  : {
        header  :  string,
        headline  :  string,
        nationbutton  : string,
    },

    map  : {
        header  :  string,
    },
    settings  : {
        header  :  string,
        darkmodeheader  :  string,
        darkmodedescription  :  string,
        login  :  string,
        notifications  :  string,
        language : string,
        loginsetting  : {
            header  :  string,
            username  :  string,
            password  :  string,
            loginbutton  : string

        },

        notificationsetting  : {
            header  : string
        }
    }
}
