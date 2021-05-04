/**
 * Renders a horizontal scroll view containing cards with
 * images and (optional) bottom content, e.g. name, description, etc.
 *
 * @category Common
 * @module PersonCarousel
 */
import React, { useMemo } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { useTheme } from './ThemeContext'
import { LinearGradient } from 'expo-linear-gradient'

import Title from './Title'
import CoverImage from './CoverImage'
import Card, { CARD_HORIZONTAL_SPACING } from './Card'

/**
 * @typeParam T the type of each item in the data prop
 */
export interface Props<T> {
    height: number
    data: Array<T>
    srcExtractor: (item: T) => string
    cardWidth: number
    title?: string
    paddingBottom?: number
    renderContent?: (item: T) => Element
}

// Use <T,> to prevent typescript from complaining.
// You can also do <T extends object>, etc, but this is less verbose.
const PersonCarousel = <T,>({
    height,
    data,
    srcExtractor,
    cardWidth,
    title,
    paddingBottom,
    renderContent,
}: Props<T>) => {
    const { colors, isDarkMode } = useTheme()

    // Calculate scroll offsets and cache result
    const offsets = useMemo(() => {
        if (!data) {
            return []
        }

        return [
            ...data.map((_, index: number) => (cardWidth + CARD_HORIZONTAL_SPACING * 2) * index),
        ]
    }, [data, cardWidth])

    // Consider setting disableIntervalMomentum={true} on scrollview
    // to make sure that you can not accidentally fast-scroll
    // through the list.
    // TODO: Add loader when data is undefined (or add a separate prop)
    return (
        <View style={styles.container}>
            {title && <Title size="large" label={title} style={styles.title} />}
            <ScrollView
                horizontal={true}
                style={[styles.scrollContainer, { paddingBottom: paddingBottom ?? 0 }]}
                decelerationRate="fast"
                snapToInterval={cardWidth}
                snapToOffsets={offsets}
            >
                {data.map((item: T, index: number) => (
                    <Card key={index} style={{ width: cardWidth, overflow: 'hidden' }}>
                        <CoverImage
                            src={srcExtractor(item)}
                            height={height}
                            fallbackIcon="person-circle-outline"
                            backgroundColor={
                                isDarkMode ? colors.backgroundExtra : colors.background
                            }
                        />
                        <View style={styles.cardContentContainer}>
                            {renderContent && renderContent(item)}
                        </View>
                        {/* No need to render gradient if there are no content */}
                        {renderContent && (
                            <LinearGradient
                                colors={['transparent', isDarkMode ? colors.background : 'black']}
                                style={styles.gradient}
                            />
                        )}
                    </Card>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    title: {
        marginTop: 15,
        paddingHorizontal: 15,
    },

    scrollContainer: {
        flex: 1,
        paddingBottom: 100,
    },

    cardContentContainer: {
        position: 'absolute',
        bottom: 15,
        left: 15,
        zIndex: 2,
    },

    gradient: {
        height: 150,
        width: '100%',
        position: 'absolute',
        bottom: -25,
        left: 0,
        zIndex: 1,
    },
})

export default PersonCarousel
