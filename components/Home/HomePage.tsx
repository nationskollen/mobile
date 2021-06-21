/**
 * @category Home
 * @module HomePage
 */
import React, { useState } from 'react'

import { View, Image, StyleSheet, ScrollView } from 'react-native'
import { useTheme } from '../ThemeContext'
import { RouteProp } from '@react-navigation/native'
import { Nation, useEvents } from '@nationskollen/sdk'
import { TabStackParamList } from '../Footer/Footer'
import { DatePickerProvider } from './DatePickerContext'
import { SheetProvider } from './SheetContext'
import { FilterProvider } from './Filtering/FilterContext'

import Timeline from './Timeline'
import Calendar from './Calendar'
import FilterBar from './FilterBar'
import FocusAwareStatusBar from '../Common/FocusAwareStatusBar'
import BottomSheet from './Bottomsheet'
import FilterButtons from './Filtering/FilterButtons'
import PopularEvents from './PopularEvents'
import CategoryCarousel from './CategoryCarousel'
//import NKLogo from '../../assets/NK_logo.png'

export interface Props {
    route: RouteProp<TabStackParamList, 'Home'>
}

const Home = () => {
    const { colors, isDarkMode } = useTheme()
    // TODO: Use setSelectedNation to filter by nation via FilterBar
    const [selectedNation, setSelectedNation] = useState<Nation | null>(null)

    return (
        <DatePickerProvider>
            <FocusAwareStatusBar backgroundColor={colors.primary} />
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: colors.background,
                }}
            >
                <PopularEvents></PopularEvents>
                <FilterProvider>
                    <CategoryCarousel showTitle={true} title={'Categories'}></CategoryCarousel>
                    {/* TODO: translate title */}

                    {/* <SheetProvider>
                        <FilterBar />
                        <Calendar />
                        <Timeline nation={selectedNation} />
                        <BottomSheet>
                            <FilterButtons />
                        </BottomSheet>
                    </SheetProvider> */}
                </FilterProvider>
            </ScrollView>
        </DatePickerProvider>
    )
}

export default Home
