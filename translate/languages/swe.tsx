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
        chooseNation: 'Välj nation',
        nations: 'Nationer',
        nationMenus: 'Menyer',
        nationEvents: 'Evenemang',
        nationLocationAndHours: 'Öppettider och platser',
        events: 'Evenemang',
        event: 'Event',
        login: 'Logga in',
        customizeNotificaitions: 'Anpassa notifikationer',
        language: 'Välj språk',
        aboutUs: 'Om Nationskollen',
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
        today: 'Idag',
        monday: 'Måndag',
        tuesday: 'Tisdag',
        wednesday: 'Onsdag',
        thursday: 'Torsdag',
        friday: 'Fredag',
        saturday: 'Lördag',
        sunday: 'Söndag',
    },

    openingHours: {
        openToday: 'Öppet idag',
        closedToday: 'Stängt idag',
        missing: 'Inga öppettider',
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
            navigateTo: 'Vägbeskrivning',
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
            events: 'Evenemang',
            news: 'Nyheter',
        },
    },

    events: {
        createdAt: 'Skapad',
        updatedAt: 'Senast uppdaterad',
        failedToLoad: 'Kunde inte ladda event',
        empty: 'Inga händelser',
    },

    location: {
        showOnMap: 'Visa på karta',
        regularOpeningHours: 'Öppettider',
        exceptionOpeningHours: 'Undantag',
    },

    nation: {
        description: 'Beskrivning',
        contactInformation: 'Kontaktinformation',
        people: 'Personer',
    },

    menus: {
        empty: 'Inga tillgängliga menyer',
    },

    menu: {
        empty: 'Menyn är tom',
        noResults: 'Inga matchande resultat',
        searchPlaceholder: 'Sök i menyn',
    },

    aboutUs: {
        whatIsNationskollen: 'Vad är Nationskollen?',
        contactInformation: 'Kontaktinformation',
        whoAreWe: 'Vilka är vi?',
        telephone: 'Telefon',
        email: 'Email',
    },
}

export default Swedish
