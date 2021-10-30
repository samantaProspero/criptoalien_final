import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
  flex: 1;
`;
export const Content = styled.View`
  flex: 1;
  align-items: center;
  padding: 60px 30px;

`;

export const PrincipalContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
`;

export const WelcomeText = styled.Text`
  font-family: ${({theme}) => theme.fonts.poppins_400};
  font-size: 20px;
  color: ${({theme}) => theme.colors.shape};
  text-align: left;
`;


