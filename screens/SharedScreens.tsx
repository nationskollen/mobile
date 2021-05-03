import React from 'react'
import TitleOffsetOptions from './TitleOffsetOptions'
import LanguageContextType from '../translate/LanguageContextType'

import EventPage from '../components/Events/EventPage'
import NationHomePage from '../components/Nations/NationHomePage'
import NationMenuPage from '../components/Nations/NationMenuPage'
import NationMenusPage from '../components/Nations/NationMenusPage'
import NavigationBackArrow from '../components/NavigationBackArrow'
import NationEventsPage from '../components/Nations/NationEventsPage'
import NationLocationsAndHoursPage from '../components/Nations/NationLocationsAndHoursPage'

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
            headerLeft: () => <NavigationBackArrow />,
            ...TitleOffsetOptions,
        }}
    />,
    <Stack.Screen
        key="NationEvents"
        name="NationEvents"
        component={NationEventsPage}
        options={{
            title: translate.titles.nationEvents,
            headerLeft: () => <NavigationBackArrow />,
            ...TitleOffsetOptions,
        }}
    />,
    <Stack.Screen
        key="NationMenus"
        name="NationMenus"
        component={NationMenusPage}
        options={{
            title: translate.titles.nationMenus,
            headerLeft: () => <NavigationBackArrow />,
            ...TitleOffsetOptions,
        }}
    />,
    <Stack.Screen
        key="NationMenu"
        name="NationMenu"
        component={NationMenuPage}
        options={{
            title: null,
            headerLeft: () => <NavigationBackArrow />,
            ...TitleOffsetOptions,
        }}
    />,
    <Stack.Screen
        key="Event"
        name="Event"
        component={EventPage}
        options={{
            title: translate.titles.event,
            headerLeft: () => <NavigationBackArrow />,
            ...TitleOffsetOptions,
        }}
    />,
]

export default SharedScreens
