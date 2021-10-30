import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { MotiView, MotiText } from 'moti';

export const Container = styled(MotiView)`
  flex: 1;
  padding: 0;
`;
export const Content = styled(MotiView)`
  flex: 1;
  /* justify-content: space-around; */
  align-items: center;
  padding: 60px 30px;

  /* background-color: ${({theme}) => theme.colors.primary}; */
`;

export const TexTContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled(MotiText)`
  font-family: ${({theme}) => theme.fonts.poppins_400};
  font-size: 22px;
  color: ${({theme}) => theme.colors.shape};
  text-align: left;
  margin-bottom: 15px;
`;
export const WelcomeText = styled(MotiText)`
  font-family: ${({theme}) => theme.fonts.poppins_400};
  font-size: 20px;
  color: ${({theme}) => theme.colors.shape};
  text-align: left;
  margin-bottom: 15px;
`;


