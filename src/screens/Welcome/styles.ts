import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
 flex: 1;
 padding: 0;
 margin: 0;
`;
export const Content = styled.View`
 flex: 1;
 margin: 40px;
 align-items: center;
 /* justify-content: center; */
 /* margin: 0; */

`;
export const LogoContainer = styled.View`
flex: 1;
justify-content: center;
align-items: center;
margin-top: ${RFValue(150)}px;
`;
export const LogoImg = styled.Image`
/* width: ${RFValue(320)}px; */
/* height: ${RFValue(300)}px; */
`;
