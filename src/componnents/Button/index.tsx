import React from 'react';

import { Container, ButtonText} from './styles';

interface Props {
  description: string;
  onPress: () => void;
}

export function Button({description, onPress}:Props){
 return(
   <Container onPress={onPress}>
    <ButtonText>{description}</ButtonText>
   </Container>
 );
};