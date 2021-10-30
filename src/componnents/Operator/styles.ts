import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
 flex-direction: row;
`;
export const Celula = styled.View`
  width: ${RFValue(22)}px;
  height: ${RFValue(22)}px;

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

