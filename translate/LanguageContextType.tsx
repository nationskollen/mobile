export type LanguageContextType = {
    footer: {
        notifications: string
        nations: string
        home: string
        map: string
        settings: string
    }

    notifications: {
        header: string
    }

    nations: {
        header: string
    }

    home: {
        header: string
        headline: string
        nationbutton: string
    }

    map: {
        header: string
	popup : {
	    openingtimes : string
	    montofri : string
	    sattosun : string
	    shownation : string
	    closed : string
	    alerts : {
		openinmaps : string
		presstoopen : string
		decline : string
		accept : string
	    }

	}
	marker : {
	    activitylevel : {
		header : string
		low : string
		medium : string
		high : string
	    }
	}
    }
    settings: {
        header: string
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
}

export default LanguageContextType;
