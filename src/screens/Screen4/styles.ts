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
  font-size: 18px;
  color: ${({theme}) => theme.colors.shape};
  text-align: left;
  margin-bottom: 15px;
`;

export const Images = styled.View`
flex: 0.5;
justify-content: center;
padding-left: 50px;
margin-bottom: 40px;
`;
export const ImageContainer = styled(RectButton)`
width: ${RFValue(120)}px;
height: ${RFValue(120)}px;
border-radius: 5px;
align-items: center;
justify-content: flex-start;
margin-bottom: -50px;
margin-top: -30px;
margin-left: -30px;
`;
export const ImageContainerRight = styled(RectButton)`
width: ${RFValue(120)}px;
height: ${RFValue(120)}px;
border-radius: 5px;
align-items: center;
justify-content: flex-start;
align-self: center;
/* margin-right: -40px; */

`;

export const Data = styled.Text`
  font-family: ${({theme}) => theme.fonts.poppins_700};
  font-size: 14px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.shape};
  text-align: right;
  /* margin-top: -40px; */
  margin-right: -50px;

`;
export const BombaImg = styled.Image`
width: ${RFValue(110)}px;
height: ${RFValue(110)}px;
`;




