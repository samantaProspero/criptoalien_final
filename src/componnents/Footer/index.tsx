import React from 'react';

import { Container} from './styles';
import { Button } from '../Button';

interface Props {
  description: string;
  onPress: () => void;
}


export function Footer({description, onPress}:Props){
 return(
   <Container>
     <Button
      description={description}
      onPress={onPress}
     />
   </Container>
 );
};