import React from 'react';
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
  D: string;
  I: string;
  C: string;
  A: string;
}

export function InputContainerDica(){
  const navigation = useNavigation<RotasProps>();

  const { control, handleSubmit } = useForm();

  function handleVerify(form: FormData) {
    const data ={
      D: form.D,
      I: form.I,
      C: form.C,
      A:form.A,
    }
    data.D=="4" && data.I =="9" && data.C=="3" && data.A=="1"? navigation.navigate('Screen13') : Alert.alert("Preencha corretamente os campos")
  }

  return(
    <Container>
      <Inputs>
        <InputForm
          name = "D"
          control={control}
          placeholder="D"
          keyboardType="numeric"
          maxLength={2}
          width= {60}
          height={60}


        />
        <InputForm
          name = "I"
          control={control}
          placeholder="I"
          keyboardType="numeric"
          width= {60}
          height={60}

        />
        <InputForm
          name = "C"
          control={control}
          placeholder="C"
          keyboardType="numeric"
          width= {60}
          height={60}

        />
        <InputForm
          name = "A"
          control={control}
          placeholder="A"
          keyboardType="numeric"
          width= {60}
          height={60}
        />
      </Inputs>
      <Button 
        onPress = {handleSubmit(handleVerify)}
        description="Verificar"
      />
    </Container>
  )
}
