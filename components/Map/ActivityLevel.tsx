import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet } from 'react-native'

interface IndicatorProps {
    level: number
}

//renders activity bar
// TODO: Take in a location as prop
const ActivityLevel: React.FC = () => {
    return (
        <View style={styles.activitybar}>
            <View style={styles.activitybarLogo}>
                <Ionicons name="md-people-outline" size={24} color="white" />
            </View>

            <Text style={styles.activitybarText}>Aktivitet</Text>

            <ActivityIndicator level={0} />
        </View>
    )
}

//function that returns a component with a colored circle and text - determined by the activity level
const ActivityIndicator: React.FC<IndicatorProps> = ({ level }) => {
    let color: string
    let title: string

    switch (level) {
        case 0:
            {
                title = 'Stängt'
                color = 'black'
            }
            break
        case 1:
            {
                title = 'Låg'
                color = 'green'
            }
            break
        case 2:
            {
                title = 'Medel'
                color = 'yellow'
            }
            break
        case 3:
            {
                title = 'Hög'
                color = 'red'
            }
            break
        // TODO: Add cases for 4 and 5 as well
        default: {
            title = 'Ej tillgänglig'
            color = 'white'
        }
    }

    return (
        <View style={styles.activityLevelWrapper}>
            <View style={[styles.activityCircle, { backgroundColor: color }]} />
            <Text style={styles.activityLevelText}>{title}</Text>
        </View>
    )
}

//styles for activitybar
const styles = StyleSheet.create({
    activitybar: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        height: 45,
        width: '100%',
        backgroundColor: '#2F2F2F',
        alignSelf: 'flex-end',
        alignItems: 'center',
    },

    activitybarText: {
        color: 'white',
        fontSize: 14,
        marginLeft: '3%',
    },

    activitybarLogo: {
        marginLeft: '5%',
        marginBottom: '0.5%',
    },

    activityLevelWrapper: {
        flexDirection: 'row',
        position: 'absolute',
        right: '5%',
    },

    activityCircle: {
        width: 12,
        height: 12,
        borderRadius: 50,
        alignSelf: 'center',
    },

    activityLevelText: {
        marginLeft: 10,
        color: 'white',
        fontSize: 16,
    },
})

export default ActivityLevel
