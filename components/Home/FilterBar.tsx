import { View, StyleSheet } from 'react-native'

import { useTheme } from '../ThemeContext'
import ChooseDateBar from './ChooseDateBar'
import ChooseNationButton from './ChooseNationButton'

interface Props {
    state: boolean
    setState: React.Dispatch<React.SetStateAction<boolean>>
}

const FilterBar: React.FC<Props> = ({state, setState}) => {
    const { colors } = useTheme();

    return (
        <View style={[styles.mainWrapper, { backgroundColor: colors.backgroundExtra }]}>
            <ChooseDateBar state={state} setState={setState} />
            <ChooseNationButton />
        </View>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#AEAEAE',
    },
})

export default FilterBar
