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
export const TextContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.poppins_400};
  font-size: 22px;
  color: ${({theme}) => theme.colors.shape};
  text-align: center;
  margin-bottom: 15px;
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

`;

export const ButtonText = styled.Text`
  font-family: ${({theme}) => theme.fonts.poppins_700};
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.primary};
`;

export const Matriz = styled.View`
  /* flex: 1; */
  margin-bottom: 15px;
  margin: 10px;
  align-items: center;
  justify-content: center;

`;

export const Line = styled.View`
  flex-direction: row;

`;
export const Celula = styled.View`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  background-color: ${({theme}) => theme.colors.primary_light};
  border-radius: 5px;
  border: 1px solid ${({theme}) => theme.colors.text};
  justify-content: center;
`;
export const CelulaText = styled.Text`
  font-size: ${RFValue(22)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.poppins_400};
  font-weight: bold;
  text-align: center;
`;



