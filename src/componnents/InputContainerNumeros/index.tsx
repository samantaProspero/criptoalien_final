import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


import { Container, Inputs} from './styles'; 
import { Button } from '../../componnents/Button';
import { InputForm } from '../../componnents/InputForm';

import {RootStackParamList} from '../../routes/stack.routes'

type RotasProps = NativeStackNavigationProp<RootStackParamList>


interface FormData {
  resp1: string;
  resp2: string;
  resp3: string;
  resp4: string;
  resp5: string;
  resp6: string;
  resp7: string;
  resp8: string;
  resp9: string;
  resp10: string;
}

export function InputContainerNumeros({lista}){
  const navigation = useNavigation<RotasProps>();
  const [numeros, setNumeros] = useState([...lista])

  const { control, handleSubmit } = useForm();

  const letters = ["Z", "A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X", "Y"]

  function handleVerify(form: FormData) {
    const data ={
      resp1:form.resp1,
      resp2:form.resp2,
      resp3:form.resp3,
      resp4:form.resp4,
      resp5:form.resp5,
      resp6:form.resp6,
      resp7:form.resp7,
      resp8:form.resp8,
      resp9:form.resp9,
      resp10:form.resp10,
    }
    data.resp1==letters[numeros[0]] &&
    data.resp2==letters[numeros[1]] &&
    data.resp3==letters[numeros[2]] &&
    data.resp4==letters[numeros[3]] &&
    data.resp5==letters[numeros[4]] &&
    data.resp6==letters[numeros[5]] &&
    data.resp7==letters[numeros[6]] &&
    data.resp8==letters[numeros[7]] &&
    data.resp9==letters[numeros[8]] &&
    data.resp10 == letters[numeros[9]]
    ? navigation.navigate('Trilha') 
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
      <InputForm
        name = "resp5"
        control={control}
        width= {35}
        height={35}
        maxLength={1}
        autoCapitalize="characters"
      />
      <InputForm
        name = "resp6"
        control={control}
        width= {35}
        height={35}
        maxLength={1}
        autoCapitalize="characters"
      />
      <InputForm
        name = "resp7"
        control={control}
        width= {35}
        height={35}
        maxLength={1}
        autoCapitalize="characters"
      />
      <InputForm
        name = "resp8"
        control={control}
        width= {35}
        height={35}
        maxLength={1}
        autoCapitalize="characters"
      />
      <InputForm
        name = "resp9"
        control={control}
        width= {35}
        height={35}
        maxLength={1}
        autoCapitalize="characters"
      />
      <InputForm
        name = "resp10"
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
