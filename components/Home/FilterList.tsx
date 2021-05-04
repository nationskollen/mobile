// /**
//  * This file contains components for filtering the displayed events on the timeline
//  * @category Home
//  * @module FilterList
//  */
// import React from 'react'
// import { View, StyleSheet, FlatList, Text } from 'react-native'
// import { CheckBox } from 'react-native-elements'

// import ListButton from '../ListButton'
// import NationLogo from '../Nations/NationLogo'
// import { NationCollection } from '@dsp-krabby/sdk'
// import ContentContainer from '../ContentContainer'

// interface Props {
//     filterTab: string
//     nations: NationCollection
//     categories: Array<ArrayObject>
//     student: Array<ArrayObject>
// }

// interface ArrayObject {
//     name: string
//     oid?: number
//     icon_img_src?: string
// }

// //TODO: add category and student filtering
// const FilterList = ({ filterTab, nations, categories, student }: Props) => {
//     var data: NationCollection | Array<ArrayObject> =
//         (filterTab == 'nations' && nations) ||
//         (filterTab == 'categories' && categories) ||
//         (filterTab == 'student' && student)

//     return (
//         <View style={styles.container}>
//             {data && (
//                 <FlatList
//                     data={data}
//                     renderItem={({ item }) => (
//                         <ContentContainer direction={'row'}>
//                             <NationLogo src={item?.icon_img_src} />
//                             <CheckBox
//                                 center
//                                 size = {24}
//                                 title = {<Text style = {{flex : 1}}>{item.name}</Text>}
//                                 containerStyle={{width:'90%'}}
//                                 iconRight
//                             />
//                         </ContentContainer>
//                     )}
//                     keyExtractor={(item) => (item?.oid ? item.oid.toString() : item.name)}
//                 />
//             )}
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'white',
//         borderRadius: 10,
//         marginTop: 5,
//     },

//     itemContainer: {
//         flexDirection:'row',
//     }
// })

// export default FilterList
