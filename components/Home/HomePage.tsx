import React from 'react'
import { SafeAreaView } from 'react-native'
import { DatePickerProvider } from './DatePickerContext'

import Header from './Header'
import Timeline from './Timeline'
import FilterBar from './FilterBar'
import Calendar from './Calendar'

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
