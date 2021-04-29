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
        nationHours: string
        nationMenus: string
        nationEvents: string
        nationLocations: string
        events: string
        event: string
        login: string
        customizeNotificaitions: string
        language: string
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
            shownation: string
            closed: string
        }
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
        }
    }

    events: {
        createdAt: string
        updatedAt: string
        failedToLoad: string
    }
}
