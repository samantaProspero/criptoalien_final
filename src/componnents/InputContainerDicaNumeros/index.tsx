import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useForm } from 'react-hook-form';

import { Container, Inputs} from './styles'; 
import { Button } from '../../componnents/Button';
import { InputForm } from '../../componnents/InputForm';

interface FormData {
  resp1: string;
  resp2: string;
  resp3: string;
  resp4: string;
}

export function InputContainerDicaNumeros({lista, screen='Trilha'}){
  const navigation = useNavigation();
  const [numeros, setNumeros] = useState([...lista])

  const { control, handleSubmit } = useForm();

  const letters = ["Z", "A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X", "Y"]

  function handleVerify(form: FormData) {
    const data ={
      resp1:form.resp1,
      resp2:form.resp2,
      resp3:form.resp3,
      resp4:form.resp4,
    }
    console.log(numeros)
    console.log(letters[numeros[0]], letters[numeros[1]], letters[numeros[2]], letters[numeros[3]])
    data.resp1==letters[numeros[0]] &&
    data.resp2==letters[numeros[1]] &&
    data.resp3==letters[numeros[2]] &&
    data.resp4==letters[numeros[3]]
    ? navigation.navigate(screen) 
    : Alert.alert("Preencha corretamente os campos")
  }

  return(
    <Container>
      <Inputs>
      <InputForm
        name = "resp1"
        control={control}
        width= {35}
        height={35}
        maxLength={1}
        autoCapitalize="characters"
      />
      <InputForm
        name = "resp2"
        control={control}
        width= {35}
        height={35}
        maxLength={1}
        autoCapitalize="characters"

      />
      <InputForm
        name = "resp3"
        control={control}
        width= {35}
        height={35}
        maxLength={1}
        autoCapitalize="characters"
      />
      <InputForm
        name = "resp4"
        control={control}
        width= {35}
        height={35}
        maxLength={1}
        autoCapitalize="characters"
      />
      </Inputs>
      <Button 
        onPress = {handleSubmit(handleVerify)}
        description="Verificar"
      />
    </Container>
  )
}
