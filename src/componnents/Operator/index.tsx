import React from 'react';

import { Container, Celula, CelulaText } from './styles';

interface Props {
  operator: string;
}

export function Operator({operator}:Props){
 return(
   <Container>
     <Celula>
       <CelulaText>{operator}</CelulaText>
     </Celula>
   </Container>
 );
};