import React from 'react'
import { View } from 'react-native'
import { useTheme } from '../ThemeContext'
import { DatePickerProvider } from './DatePickerContext'

import Timeline from './Timeline'
import FilterBar from './FilterBar'
import Calendar from './Calendar'

interface Props {
    route: any
}

const Home: React.FC<Props> = ({ route }) => {
    const oid = route.params?.oid
    const { colors, isDarkMode } = useTheme()

    return (
        <DatePickerProvider>
            <View style={{ flex: 1, backgroundColor: isDarkMode ? colors.background : colors.backgroundExtra }}>
                <FilterBar hideNationFilter={route.params?.hideNationFilter} />
                <Calendar />
                <Timeline oid={oid} />
            </View>
        </DatePickerProvider>
    )
}

export default Home
