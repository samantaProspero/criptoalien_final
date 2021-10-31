import React from 'react';

import { Container, Tabela, ItemTabela } from './styles';

export function DicaCifra(){
  const letters = [ 
    {id:1 ,name: 'D', value: '4'}, 
    {id:2 ,name: 'I', value: '9'}, 
    {id:3 ,name: 'C', value: '3'}, 
    {id:4 ,name: 'A', value: '1'}, 
  ]
 return(
   <Container>
    {letters.map((letter, key) => { 
      return(
        <Tabela key={letter.id}>
          <ItemTabela>{letter.name}</ItemTabela>
          <ItemTabela>{letter.value}</ItemTabela>
        </Tabela>
      )})}
   </Container>
 );
};