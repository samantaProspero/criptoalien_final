import React from 'react';

import { Container, Tabela, ItemTabela } from './styles';

export function DesativadaCifra(){
  const letters = [ 
    {id:1 ,name: 'D', value: '4'}, 
    {id:2 ,name: 'E', value: '5'}, 
    {id:3 ,name: 'S', value: '19'}, 
    {id:4 ,name: 'A', value: '1'}, 
    {id:5 ,name: 'T', value: '20'}, 
    {id:6 ,name: 'I', value: '9'}, 
    {id:7 ,name: 'V', value: '25'}, 
    {id:8 ,name: 'A', value: '1'}, 
    {id:9 ,name: 'D', value: '4'},  
    {id:10 ,name: 'A', value: '1'}
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