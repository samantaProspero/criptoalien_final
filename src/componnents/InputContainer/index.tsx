import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Alert } from 'react-native';

import { Container, Inputs} from './styles'; 
import { Button } from '../../componnents/Button';
import { InputForm } from '../../componnents/InputForm';

import {RootStackParamList} from '../../routes/stack.routes'

type RotasProps = NativeStackNavigationProp<RootStackParamList>

interface FormData {
  D1: string;
  E: string;
  S: string;
  A1: string;
  T: string;
  I: string;
  V: string;
  A2: string;
  D2: string;
  A3: string;
}

export function InputContainer(){
  const navigation = useNavigation<RotasProps>();

  const { control, handleSubmit } = useForm();

  function handleVerify(form: FormData) {
    const data ={
      D1:form.D1,
      E: form.E,
      S: form.S,
      A1:form.A1,
      T: form.T,
      I: form.I,
      V: form.V,
      A2:form.A2,
      D2:form.D2,
      A3:form.A3,
    }
    data.A1=="1" && data.A2 =="1" && data.A3=="1" && data.D1=="4" && data.D2=="4" && data.E=="5" && data.I=="9" && data.S=="19" && data.T=="20"&& data.V=="22"
    ? navigation.navigate('Screen8') 
    : Alert.alert("Preencha corretamente os campos")
  }

  return(
    <Container>
      <Inputs>
      <InputForm
        name = "D1"
        control={control}
        placeholder="D"
        keyboardType="numeric"
        maxLength={2}
        width= {35}
        height={35}


      />
      <InputForm
        name = "E"
        control={control}
        placeholder="E"
        keyboardType="numeric"
        width= {35}
        height={35}

      />
      <InputForm
        name = "S"
        control={control}
        placeholder="S"
        keyboardType="numeric"
        width= {35}
        height={35}

      />
      <InputForm
        name = "A1"
        control={control}
        placeholder="A"
        keyboardType="numeric"
        width= {35}
        height={35}

      />
      <InputForm
        name = "T"
        control={control}
        placeholder="T"
        keyboardType="numeric"
        width= {35}
        height={35}

      />
      <InputForm
        name = "I"
        control={control}
        placeholder="I"
        keyboardType="numeric"
        width= {35}
        height={35}

      />
      <InputForm
        name = "V"
        control={control}
        placeholder="V"
        keyboardType="numeric"
        width= {35}
        height={35}

      />
      <InputForm
        name = "A2"
        control={control}
        placeholder="A"
        keyboardType="numeric"
        width= {35}
        height={35}

      />
      <InputForm
        name = "D2"
        control={control}
        placeholder="D"
        keyboardType="numeric"
        width= {35}
        height={35}

      />
      <InputForm
        name = "A3"
        control={control}
        placeholder="A"
        keyboardType="numeric"
        width= {35}
        height={35}

      />
      </Inputs>
      <Button 
        onPress = {handleSubmit(handleVerify)}
        description="Verificar"
      />
      {/* <Decifra>
        <Letter>D</Letter>
        <DecifraInput/>
      </Decifra>
      <Decifra>
        <Letter>E</Letter>
        <DecifraInput/>
      </Decifra> */}
    </Container>
  )
}
