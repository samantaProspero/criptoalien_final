import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
flex-direction: row;
align-items: center;
padding-bottom: 15px;
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

export const Operador = styled.View`
flex-direction: row;
`;
export const Vetor = styled.View`
`;
export const ComVetor = styled.View`
  flex-direction: row;
  align-items: center;
  /* justify-content: start; */
`;
export const ComConta = styled.View`
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
export const SemNada = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
export const Inputs = styled.View`
`;

