import React from 'react'
import TitleOffsetOptions from './TitleOffsetOptions'
import LanguageContextType from '../translate/LanguageContextType'

import EventPage from '../components/Events/EventPage'
import NationHomePage from '../components/Nations/Front/NationHomePage'
import NationMenuPage from '../components/Nations/Menu/NationMenuPage'
import NationMenusPage from '../components/Nations/Menus/NationMenusPage'
import NationEventsPage from '../components/Nations/Events/NationEventsPage'
import NationLocationsAndHoursPage from '../components/Nations/Locations/NationLocationsAndHoursPage'

// https://github.com/react-navigation/react-navigation/issues/3790
const SharedScreens = (Stack: any, translate: LanguageContextType) => [
    <Stack.Screen
        key="NationHome"
        name="NationHome"
        component={NationHomePage}
        options={{
            title: null,
            headerTransparent: true,
            ...TitleOffsetOptions,
        }}
    />,
    <Stack.Screen
        key="NationLocationsAndHours"
        name="NationLocationsAndHours"
        component={NationLocationsAndHoursPage}
        options={{
            title: translate.titles.nationLocationAndHours,
            ...TitleOffsetOptions,
        }}
    />,
    <Stack.Screen
        key="NationEvents"
        name="NationEvents"
        component={NationEventsPage}
        options={{
            title: translate.titles.nationEvents,
            ...TitleOffsetOptions,
        }}
    />,
    <Stack.Screen
        key="NationMenus"
        name="NationMenus"
        component={NationMenusPage}
        options={{
            title: translate.titles.nationMenus,
            ...TitleOffsetOptions,
        }}
    />,
    <Stack.Screen
        key="NationMenu"
        name="NationMenu"
        component={NationMenuPage}
        options={{
            title: null,
            ...TitleOffsetOptions,
        }}
    />,
    <Stack.Screen
        key="Event"
        name="Event"
        component={EventPage}
        options={{
            title: null,
            headerTransparent: true,
            ...TitleOffsetOptions,
        }}
    />,
]

export default SharedScreens
