import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;
export const Content = styled.View`
  flex: 1;
  padding: 80px 30px;
  justify-content: space-around;

  /* background-color: ${({theme}) => theme.colors.primary}; */
`;
export const TrilhaContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export const TrilhaItem = styled(RectButton)`
  width: ${RFValue(110)}px;
  height: ${RFValue(110)}px;
  margin: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary_light};
  align-items: center;
  justify-content: center;
`;
export const TrilhaItemText = styled.Text`
  font-family: ${({theme}) => theme.fonts.poppins_700};
  font-size: 22px;
  color: ${({theme}) => theme.colors.primary};
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;