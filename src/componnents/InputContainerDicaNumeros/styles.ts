import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';


export const Container = styled.View`
  align-items: center;
`;
export const Inputs = styled.View`
  /* flex: 1; */
  flex-direction: row;
  margin-bottom: 15px;
`;

// export const Decifra = styled.View`
// flex-direction: column;
// justify-content: center;
// align-items: center;
// `;

// export const DecifraInput = styled(TextInput)`
//   background-color: ${({theme}) => theme.colors.primary_light};
//   width: 35px;
//   height: 35px;
//   border-radius: 5px;
//   border: 1px solid ${({theme}) => theme.colors.text};
//   font-size: ${RFValue(14)}px;
//   color: ${({theme}) => theme.colors.primary};
//   font-family: ${({theme}) => theme.fonts.poppins_700};
//   font-size: 18px;
//   font-weight: bold;
//   text-align: center;
// `;


