import styled from 'styled-components/native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

//import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  padding: 8px;
  border-radius: 5px;
  align-items: center;
  align-self: flex-end;
  background-color: black;
`;

export const Content = styled.View`
  /* width: 100%;
  height: 100%; */
  align-items: center;
  justify-content: center;

`;
export const ButtonText = styled.Text`
  font-family: ${({theme}) => theme.fonts.poppins_400};
  font-size: 18px;
  color: ${({theme}) => theme.colors.shape};
`;
