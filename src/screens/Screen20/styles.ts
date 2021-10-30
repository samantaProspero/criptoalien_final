import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;
export const Content = styled.View`
  flex: 1;
  align-items: center;
  padding: 60px 20px 20px 20px;
`;

export const PrincipalContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
`;
export const Inputs = styled.View`
`;

export const WelcomeText = styled.Text`
  font-family: ${({theme}) => theme.fonts.poppins_400};
  font-size: 20px;
  color: ${({theme}) => theme.colors.shape};
  text-align: center;
  margin-top: 20px;
`;
export const Celula = styled.View`
  width: 35px;
  height: 35px;

  background-color: ${({theme}) => theme.colors.primary_light};
  border-radius: 5px;
  border: 1px solid ${({theme}) => theme.colors.text};
  align-items: center;
  justify-content: center;
  margin: 1px;
`;

export const CelulaText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.poppins_400};
  font-weight: bold;
  text-align: center;
`;

export const Vetor = styled.View`
`;
export const Multiplicacao = styled.View`
  flex-direction: row;
  align-items: center;
  /* justify-content: start; */
`;
export const Conta = styled.View`
`;
export const CelulaConta = styled.View`
  height: 35px;
  background-color: ${({theme}) => theme.colors.primary_light};
  border-radius: 5px;
  border: 1px solid ${({theme}) => theme.colors.text};
  align-items: center;
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;
  margin: 1px;
`;
