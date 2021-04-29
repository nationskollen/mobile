import React from 'react'
import LanguageContextType from '../translate/LanguageContextType'

import NationHomePage from '../components/Nations/NationHomePage'
import NavigationBackArrow from '../components/NavigationBackArrow'
import NationMenusPage from '../components/Nations/NationMenusPage'
import NationEventsPage from '../components/Nations/NationEventsPage'
import NationLocationsAndHoursPage from '../components/Nations/NationLocationsAndHoursPage'

// https://github.com/react-navigation/react-navigation/issues/3790
const SharedScreens = (Stack: any, translate: LanguageContextType) => ([
    <Stack.Screen
        key="NationHome"
        name="NationHome"
        component={NationHomePage}
        options={{
            title: null,
            headerTransparent: true,
            headerLeft: () => <NavigationBackArrow />,
        }}
    />,
    <Stack.Screen
        key="NationLocationsAndHours"
        name="NationLocationsAndHours"
        component={NationLocationsAndHoursPage}
        options={{
            title: translate.titles.nationLocationAndHours,
            headerLeft: () => <NavigationBackArrow />,
        }}
    />,
    <Stack.Screen
        key="NationEvents"
        name="NationEvents"
        component={NationEventsPage}
        options={{
            title: translate.titles.nationEvents,
            headerLeft: () => <NavigationBackArrow />,
        }}
    />,
    <Stack.Screen
        key="NationMenus"
        name="NationMenus"
        component={NationMenusPage}
        options={{
            title: translate.titles.nationMenus,
            headerLeft: () => <NavigationBackArrow />,
        }}
    />,
])

export default SharedScreens
