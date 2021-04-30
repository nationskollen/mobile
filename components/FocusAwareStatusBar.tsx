import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useIsFocused } from '@react-navigation/native'

export interface Props {
    backgroundColor: string
}

const FocusAwareStatusBar = ({ backgroundColor }: Props) => {
    const isFocused = useIsFocused()
    return isFocused ? <StatusBar style="light" backgroundColor={backgroundColor} /> : null
}

export default FocusAwareStatusBar
