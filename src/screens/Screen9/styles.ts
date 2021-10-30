import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;
export const Content = styled.View`
  flex: 1;
  align-items: center;
  padding: 60px 20px 0 20px;
`;

export const PrincipalContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
`;

export const WelcomeText = styled.Text`
  font-family: ${({theme}) => theme.fonts.poppins_400};
  font-size: 20px;
  color: ${({theme}) => theme.colors.shape};
  text-align: center;
  margin-top: 20px;
`;

export const DescriptionText = styled.Text`
  font-family: ${({theme}) => theme.fonts.poppins_400};
  font-size: 20px;
  color: ${({theme}) => theme.colors.shape};
  text-align: left;
  margin-bottom: 15px;
`;


export const ButtonSeguir = styled(RectButton)`
  background-color: ${({theme}) => theme.colors.primary_light};
  padding: 8px 50px;
  border-radius: 5px;
  align-items: center;

`;

export const ButtonText = styled.Text`
  font-family: ${({theme}) => theme.fonts.poppins_700};
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.primary};
`;

