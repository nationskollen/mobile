import styled from 'styled-components/native';
import { useTheme } from '@react-navigation/native'


export function RenderBottomLoadingCircle () {
const { colors } = useTheme();
const Loading = styled.ActivityIndicator.attrs({
    size : 'small',
    color : colors.background, 
}) `
    margin : 30px 0;
    `
;

return Loading;
}
