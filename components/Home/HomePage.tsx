import React, { useState } from "react";
import { SafeAreaView } from "react-native";

import Header from './Header'
import Timeline from './Timeline'
import FilterBar from './FilterBar'
import Calendar from './Calendar'

const Home = () => {
    // This should probably be replaced with a context so that we
    // do not have to pass the props all the way down.
    const [date, setDate] = useState(new Date())
    const [state, setState] = useState(false)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header />
            <FilterBar
                state={state}
                setState={setState}
            />

            {state && <Calendar date={date} setDate={setDate} />}

            {/*Render timeline of events*/}
            <Timeline date={date} />
        </SafeAreaView>
    )
}

export default Home
