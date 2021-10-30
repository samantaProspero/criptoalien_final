import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(12)}px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 10px;
`;