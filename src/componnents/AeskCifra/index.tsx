import React from 'react';

import { Container, Tabela, ItemTabela } from './styles';

export function AeskCifra(){
  const letters = [ 
    {id:1 ,name: 'A', value: '1'}, 
    {id:2 ,name: 'E', value: '5'}, 
    {id:3 ,name: 'S', value: '19'}, 
    {id:4 ,name: 'C', value: '3'}, 
  ]
 return(
   <Container>
    {letters.map((letter) => { 
      return(
        <Tabela key={letter.id}>
          <ItemTabela>{letter.name}</ItemTabela>
          <ItemTabela>{letter.value}</ItemTabela>
        </Tabela>
      )})}
   </Container>
 );
};