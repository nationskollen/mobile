import React from 'react'
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { useTheme } from '../ThemeContext'
import { useTranslation } from '../../translate/LanguageContext'

import Title from '../Common/Title'
import PersonCarousel from '../Common/PersonCarousel'
import ContentSection from '../Common/ContentSection'
import ContactInformation from '../Common/ContactInformation'
import FocusAwareStatusBar from '../Common/FocusAwareStatusBar'

// TODO: Load from server?
const DATA = [
    {
        name: 'Fredrik Engstrand',
        description: 'Description',
        image: 'https://engstrand.nu/assets/img/7253137.jpg',
    },
    {
        name: 'Fahad Rami Jamil',
        description: 'Description',
        image: 'https://engstrand.nu/assets/img/7253137.jpg',
    },
    {
        name: 'Johannes Liljedahl',
        description: 'Description',
        image: 'https://engstrand.nu/assets/img/7253137.jpg',
    },
    {
        name: 'Carl Wallskog',
        description: 'Description',
        image: 'https://engstrand.nu/assets/img/7253137.jpg',
    },
    {
        name: 'Oskar Rick',
        description: 'Description',
        image: 'https://engstrand.nu/assets/img/7253137.jpg',
    },
    {
        name: 'Aria Assadi',
        description: 'Description',
        image: 'https://engstrand.nu/assets/img/7253137.jpg',
    },
    {
        name: 'Robert Martinis',
        description: 'Description',
        image: 'https://engstrand.nu/assets/img/7253137.jpg',
    },
]

const AboutUsPage = () => {
    const { colors } = useTheme()
    const { translate } = useTranslation()

    return (
        <>
            <FocusAwareStatusBar backgroundColor={colors.primary} />
            <ScrollView style={{ backgroundColor: colors.background }}>
                <View>
                    <ContentSection>
                        <Image
                            source={require('../../assets/nationskollen_logo-do_not_change.png')}
                            style={styles.logo}
                        />
                        <Title size="large" label={translate.aboutUs.whatIsNationskollen} />
                        <Text style={{ color: colors.text }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet
                            accumsan ex. Aliquam mi quam, rutrum et tempus id, mollis vel ligula.
                            Cras eget nisl ut tortor sollicitudin vulputate. Aliquam erat volutpat.
                            Nullam malesuada sollicitudin elit, a accumsan est aliquam vitae. Morbi
                            condimentum, tortor sit amet porta ullamcorper, metus elit condimentum
                            odio, non pretium ipsum mauris vitae nulla. Nam ut auctor velit, sit
                            amet tempor erat. Vestibulum luctus blandit nulla nec congue.
                        </Text>
                    </ContentSection>
                    <ContentSection>
                        <Title size="large" label={translate.aboutUs.contactInformation} />
                        <ContactInformation
                            title={translate.aboutUs.email}
                            value="kontakt@nationskollen.se"
                            icon="at-outline"
                        />
                        <ContactInformation
                            title={translate.aboutUs.telephone}
                            value="070-000 00 00"
                            icon="call-outline"
                        />
                    </ContentSection>
                </View>
                <PersonCarousel
                    height={350}
                    data={DATA}
                    cardWidth={300}
                    srcExtractor={(item) => item.image}
                    title={translate.aboutUs.whoAreWe}
                    paddingBottom={100}
                    renderContent={(item) => (
                        <>
                            <Title label={item.name} style={{ color: 'white' }} noMargin={true} />
                            <Text style={{ color: '#ccc' }}>{item.description}</Text>
                        </>
                    )}
                />
                <Text style={[styles.versionLabel, { color: colors.text }]}>
                    App version {Constants.manifest.version}
                </Text>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 15,
    },

    footer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },

    versionLabel: {
        fontWeight: 'bold',
        fontSize: 12,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 25,
    },
})

export default AboutUsPage
