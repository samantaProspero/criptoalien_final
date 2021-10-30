import styled from 'styled-components/native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`
  flex: 1;
`;
export const PrincipalContent = styled.View`
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
  text-align: left;
  margin-bottom: 15px;
`;
export const Content = styled.View`
flex: 1;
flex-direction: column;
`;
export const DescriptionText = styled.Text`
  font-family: ${({theme}) => theme.fonts.poppins_400};
  font-size: 20px;
  color: ${({theme}) => theme.colors.shape};
  text-align: left;
  margin-bottom: 15px;
`;

export const Images = styled.View`
flex: 0.5;
justify-content: center;
/* padding-left: 50px; */
margin-bottom: 100px;
`;

export const BombaImg = styled.Image`
width: ${RFValue(350)}px;
/* height: ${RFValue(300)}px; */
`;




