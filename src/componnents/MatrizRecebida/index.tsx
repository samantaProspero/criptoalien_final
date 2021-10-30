import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, Line1, Line2,Celula, CelulaText} from './styles';

export function MatrizRecebida(){
  const [data, setData] = useState([])
  const matrizKey = '@mestrado:matriz'

  async function getItem(){
    try {
      await AsyncStorage.getItem(matrizKey)
        .then(value => {
          const dataNova = JSON.parse(value!)
          setData(dataNova)
        })
    } catch(error) {
      console.log(error);
      alert("Não foi possível pegar os dados!")
    }
  }
  
  useEffect(()=>{getItem()},[])

  return(
    <Container>
    <Line1>
      <Celula><CelulaText>{data.A11 | data.a}</CelulaText></Celula>
      <Celula><CelulaText>{data.A12 | data.b}</CelulaText></Celula>
    </Line1>
    <Line2>
      <Celula><CelulaText>{data.A21 | data.c}</CelulaText></Celula>
      <Celula><CelulaText>{data.A22 | data.d}</CelulaText></Celula>
    </Line2>
    </Container>
  );
};