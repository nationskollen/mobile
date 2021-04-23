import React from 'react'
import { SafeAreaView } from 'react-native'
import { DatePickerProvider } from './DatePickerContext'

import Header from './Header'
import Calendar from './Calendar'
import Timeline from './Timeline'
import FilterBar from './FilterBar'

const Home = () => {
    return (
        <DatePickerProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <Header />
                <FilterBar />
                <Calendar />
                <Timeline />
            </SafeAreaView>
        </DatePickerProvider>
    )
}

export default Home
