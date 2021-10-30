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
  justify-content: center;
`;
export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.poppins_400};
  font-size: 22px;
  color: ${({theme}) => theme.colors.shape};
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const DescriptionText = styled.Text`
  font-family: ${({theme}) => theme.fonts.poppins_400};
  font-size: 18px;
  color: ${({theme}) => theme.colors.shape};
  text-align: left;
`;
