/**
 * @category Home
 * @module Event
 */
import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'

import { useTheme } from '../ThemeContext'
import { useNation, Nation, Event as EventResponse } from '@dsp-krabby/sdk'
import { useLocation } from '@dsp-krabby/sdk'
import { useNavigation } from '@react-navigation/native'


