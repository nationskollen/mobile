/**
 * @category Home
 * @module HomePage
 */
import React from 'react'
import { View } from 'react-native'
import { useTheme } from '../ThemeContext'
import { TabStackParamList } from '../Footer'
import { DatePickerProvider } from './DatePickerContext'
import { RouteProp } from '@react-navigation/native'

import Timeline from './Timeline'
import Calendar from './Calendar'
import FilterBar from './FilterBar'
import ReminderButton from './ReminderButton'

export interface Props {
    route: RouteProp<TabStackParamList, 'Hem'>
}

const Home = ({ route }: Props) => {
    const { colors, isDarkMode } = useTheme()

    return (
        <DatePickerProvider>
            <View
                style={{
                    flex: 1,
                    backgroundColor: isDarkMode ? colors.background : colors.backgroundExtra,
                }}
            >
                <FilterBar hideNationFilter={route.params?.hideNationFilter} />
                <Calendar />
                <Timeline oid={route.params?.oid} />
                
            </View>
        </DatePickerProvider>
    )
}

export default Home
