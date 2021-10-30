import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Error = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_400};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.attention};

  margin: 7px 0;
`;