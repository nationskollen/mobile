/**
 * Sets the status bar color of a certain page that
 * updates on (re)focus. This makes sure that we always
 * get the correct background, despite the rendering order.
 *
 * @category Common
 * @module FocusAwareStatusBar
 */
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
