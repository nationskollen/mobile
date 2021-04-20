import styled from 'styled-components/native';
import { useTheme } from '../../components/ThemeContext'

export function RenderBottomLoadingCircle () {
    const { colors } = useTheme();

    const loading = styled.ActivityIndicator.attrs({
        size : 'small',
        color : colors.background,
    })

    return loading
}
