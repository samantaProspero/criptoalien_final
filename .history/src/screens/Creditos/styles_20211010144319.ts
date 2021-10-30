import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { MotiView, MotiText } from 'moti';
import { RectButton } from 'react-native-gesture-handler';



export const Container = styled.View`
  flex: 1;
`;
export const Content = styled.View`
  flex: 1;
  justify-content: center;
  /* align-items: center; */
  padding: 10px;
`;
// export const ReturnButton = styled(RectButton)`
//   position: absolute;
//   top: 50px;
//   right: 40px;
//   color: ${({ theme }) => theme.colors.shape};
//   width: ${RFValue(40)}px;
//   height: ${RFValue(40)}px;
// `;

export const TexTContainer = styled(MotiView)`
  flex: 1;
  justify-content: center;
`;

export const Title = styled(MotiText)`
  font-family: ${({theme}) => theme.fonts.poppins_400};
  font-size: 18px;
  color: ${({theme}) => theme.colors.shape};
  text-align: left;
  margin-bottom: 15px;
`;
export const WelcomeText = styled.Text`
  font-family: ${({theme}) => theme.fonts.poppins_400};
  font-size: 14px;
  color: ${({theme}) => theme.colors.shape};
  text-align: left;
  margin-bottom: 15px;
`;
