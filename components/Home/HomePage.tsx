/**
 * @category Home
 * @module HomePage
 */
import React, { useState } from 'react'
import { View } from 'react-native'
import { Nation } from '@dsp-krabby/sdk'
import { useTheme } from '../ThemeContext'
import { TabStackParamList } from '../Footer'
import { DatePickerProvider } from './DatePickerContext'
import { RouteProp } from '@react-navigation/native'

import Timeline from './Timeline'
import Calendar from './Calendar'
import FilterBar from './FilterBar'

export interface Props {
    route: RouteProp<TabStackParamList, 'Home'>
}

const Home = () => {
    const { colors, isDarkMode } = useTheme()
    // TODO: Use setSelectedNation to filter by nation via FilterBar
    const [selectedNation, setSelectedNation] = useState<Nation | null>(null)

    return (
        <DatePickerProvider>
            <View
                style={{
                    flex: 1,
                    backgroundColor: isDarkMode ? colors.background : colors.backgroundExtra,
                }}
            >
                <FilterBar />
                <Calendar />
                <Timeline nation={selectedNation} />
            </View>
        </DatePickerProvider>
    )
}

export default Home
