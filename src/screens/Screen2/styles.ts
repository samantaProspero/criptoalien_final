import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { MotiView, MotiText } from 'moti';



export const Container = styled.View`
  flex: 1;
`;
export const Content = styled.View`
  flex: 1;
  justify-content: center;
  /* align-items: center; */
  padding: 50px;
`;

export const TexTContainer = styled(MotiView)`
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
  font-size: 18px;
  color: ${({theme}) => theme.colors.shape};
  text-align: left;
  margin-bottom: 15px;
`;
