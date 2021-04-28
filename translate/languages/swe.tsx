import LanguageContextType from '../LanguageContextType'

const Swedish: LanguageContextType = {
    general: {
        ok: 'OK',
        cancel: 'Avbryt',
        loading: 'Laddar',
    },

    footer: {
        notifications: 'Notifikationer',
        nations: 'Nationer',
        home: 'Hem',
        map: 'Karta',
        settings: 'Inställningar',
    },

    notifications: {
        header: 'Notifikationer',
    },

    nations: {
        header: 'Nationer',
        menu: 'Meny',
        events: 'Evenemang',
        activitylevel: {
            header: 'Aktivitetsnivå',
            closed: 'Stängt',
            low: 'Låg',
            medium: 'Medel',
            high: 'Hög',
        },
        alerts: {
            mapTitle: 'Öppna i kartor?',
            mapDescription: 'Tryck OK för att öppna addressen i kartor',
        },
    },

    home: {
        header: 'Hem',
        headline: 'Nationskollen',
        nationbutton: 'Nation',
        reminderbutton: 'Påminn mig',
        todaysEvents: 'Dagens händelser',
    },

    map: {
        header: 'Karta',
        popup: {
            openingtimes: 'Öppettider',
            montofri: 'Mån-Fri ',
            sattosun: 'Lör-Sön ',
            shownation: 'Visa nation',
            closed: 'Stängt',
            alerts: {
                openinmaps: 'Öppna i kartor?',
                presstoopen: 'Tryck OK för att öppna i kartor',
                decline: 'Avbryt',
                accept: 'Ok',
            },
        },

        marker: {
            activitylevel: {
                header: 'Aktivitetsnivå',
                low: 'Låg',
                medium: 'Medel',
                high: 'Hög',
                closed: 'Stängt',
            },
        },
    },

    settings: {
        header: 'Inställningar',
        darkmodeheader: 'Mörkt läge',
        darkmodedescription: 'Ställ in detta för att förhindra ansträngda ögon',
        login: 'Logga in',
        notifications: 'Anpassa notifikationer',
        language: 'Välj språk',
        loginsetting: {
            header: 'Nationskollen',
            username: 'Användarnamn',
            password: 'Lösenord',
            loginbutton: 'Login',
        },

        notificationsetting: {
            header: 'Anpassa Notifikationer',
        },
    },

    events: {
        createdAt: 'Skapad',
        updatedAt: 'Senast uppdaterad',
        failedToLoad: 'Kunde inte ladda event',
    },
}

export default Swedish
