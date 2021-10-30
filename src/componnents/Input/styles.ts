import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
  background-color: ${({theme}) => theme.colors.primary_light};
  border-radius: 5px;
  border: 1px solid ${({theme}) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.poppins_400};
  /* font-size: 20px; */
  /* font-size: 14px; */
  font-weight: bold;
  text-align: center;
`;