import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
  flex: 1;
`;
export const Content = styled.View`
  flex: 1;
  /* justify-content: space-around; */
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
export const WelcomeText = styled.Text`
  font-family: ${({theme}) => theme.fonts.poppins_400};
  font-size: 20px;
  color: ${({theme}) => theme.colors.shape};
  text-align: left;
  margin-bottom: 15px;
`;

