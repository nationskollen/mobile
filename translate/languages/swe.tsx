import LanguageContextType from '../LanguageContextType'

const Swedish: LanguageContextType = {
    general: {
        ok: 'OK',
        cancel: 'Avbryt',
        loading: 'Laddar',
    },

    titles: {
        home: 'Hem',
        notifications: 'Notifikationer',
        map: 'Karta',
        settings: 'Inställningar',
        nation: 'Nation',
        nations: 'Välj nation',
        nationMenus: 'Menyer',
        nationEvents: 'Evenemang',
        nationLocationAndHours: 'Öppettider och platser',
        events: 'Evenemang',
        event: 'Event',
        login: 'Logga in',
        customizeNotificaitions: 'Anpassa notifikationer',
        language: 'Välj språk',
    },

    activityLevels: {
        header: 'Aktivitetsnivå',
        closed: 'Stängt',
        low: 'Låg',
        medium: 'Medel',
        high: 'Hög',
        veryHigh: 'Väldigt hög',
        max: 'Max',
    },

    alerts: {
        showOnMapTitle: 'Öppna i kartor?',
        showOnMapDescription: 'Tryck OK för att öppna addressen i kartor',
    },

    days: {
        monday: 'Måndag',
        tuesday: 'Tisday',
        wednesday: 'Onsdag',
        thursday: 'Torsdag',
        friday: 'Fredag',
        saturday: 'Lördag',
        sunday: 'Söndag',
    },

    home: {
        headline: 'Nationskollen',
        nationbutton: 'Nation',
        reminderbutton: 'Påminn mig',
        todaysEvents: 'Dagens händelser',
    },

    map: {
        currentActivityLevel: 'Aktivitetsnivå',
        popup: {
            shownation: 'Visa nation',
            closed: 'Stängt',
        },
    },

    settings: {
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
	    events : 'Evenemang',
	    news : 'Nyheter'
        },
    },

    events: {
        createdAt: 'Skapad',
        updatedAt: 'Senast uppdaterad',
        failedToLoad: 'Kunde inte ladda event',
    },
}

export default Swedish
