import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
 /* flex: 1; */
 /* background-color: ${({theme}) => theme.colors.primary}; */
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: center;
 align-items: center;
`;
export const Tabela = styled.View`
  border: 1px solid #fff;
  padding: 4px 2px;
`;
export const ItemTabela = styled.Text`
  width: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.poppins_400};
  font-size: 12px;
  color: ${({theme}) => theme.colors.shape};
  margin: 3px;
  text-align: center;
`;

