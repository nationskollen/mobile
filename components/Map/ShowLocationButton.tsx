import React from 'react'
import { ViewStyle } from 'react-native'
import { Location } from '@nationskollen/sdk'
import { applicationId } from 'expo-application'
import { showLocation } from 'react-native-map-link'
import { useTranslation } from '../../translate/LanguageContext'

import Button from '../Common/Button'

export interface Props {
    type: 'primary' | 'light'
    location: Location
    style?: ViewStyle
}

const ShowLocationButton = ({ type, style, location }: Props) => {
    const { translate } = useTranslation()
    const navigate = () =>
        showLocation({
            latitude: location.latitude,
            longitude: location.longitude,
            title: location.name,
            googleForceLatLon: true,
            naverCallerName: applicationId,
        })

    return (
        <Button
            type={type}
            onPress={navigate}
            label={translate.map.popup.navigateTo}
            icon="chevron-forward"
            style={style}
        />
    )
}

export default ShowLocationButton
