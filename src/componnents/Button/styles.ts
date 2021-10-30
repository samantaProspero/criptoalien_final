import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

//import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  background-color: ${({theme}) => theme.colors.primary_light};
  padding: 8px;
  width: 100%;
  border-radius: 5px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: ${({theme}) => theme.fonts.poppins_700};
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.primary};
`;
