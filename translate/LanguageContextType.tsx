export default interface LanguageContextType {
    general: {
        ok: string
        cancel: string
        loading: string
    }

    titles: {
        home: string
        notifications: string
        map: string
        settings: string
        nation: string
        nations: string
        chooseNation: string
        nationMenus: string
        nationEvents: string
        nationLocationAndHours: string
        events: string
        event: string
        login: string
        customizeNotificaitions: string
        language: string
        aboutUs: string
    }

    activityLevels: {
        header: string
        low: string
        medium: string
        high: string
        closed: string
        veryHigh: string
        max: string
    }

    days: {
        today: string
        monday: string
        tuesday: string
        wednesday: string
        thursday: string
        friday: string
        saturday: string
        sunday: string
    }

    alerts: {
        showOnMapTitle: string
        showOnMapDescription: string
    }

    home: {
        headline: string
        nationbutton: string
        reminderbutton: string
        todaysEvents: string
    }

    map: {
        currentActivityLevel: string
        popup: {
            navigateTo: string
            closed: string
        }
    }

    openingHours: {
        openToday: string
        closedToday: string
        missing: string
    }

    settings: {
        darkmodeheader: string
        darkmodedescription: string
        login: string
        notifications: string
        language: string
        loginsetting: {
            header: string
            username: string
            password: string
            loginbutton: string
        }

        notificationsetting: {
            header: string
            events: string
            news: string
        }
    }

    events: {
        createdAt: string
        updatedAt: string
        failedToLoad: string
        empty: string
    }

    location: {
        showOnMap: string
        regularOpeningHours: string
        exceptionOpeningHours: string
    }

    nation: {
        description: string
        contactInformation: string
        people: string
    }

    menus: {
        empty: string
    }

    menu: {
        empty: string
        noResults: string
        searchPlaceholder: string
    }

    aboutUs: {
        whatIsNationskollen: string
        contactInformation: string
        whoAreWe: string
        telephone: string
        email: string
    }
}
