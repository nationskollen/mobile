/**
 * @category Nations
 * @module NationBasePage
 */
import { ReactElement, useLayoutEffect } from 'react'
import { Nation } from '@dsp-krabby/sdk'
import { useNavigation } from '@react-navigation/core'

export interface Props {
    nation: Nation
    children: ReactElement
}

const NationBasePage = ({ nation, children }: Props) => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTransparent: false,
            headerStyle: {
                backgroundColor: nation.accent_color,
            },
        })
    }, [nation])

    return children
}

export default NationBasePage
