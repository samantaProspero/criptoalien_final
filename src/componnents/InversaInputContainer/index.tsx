import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, Inputs, Line1, Line2} from './styles'; 
import { Footer } from '../../componnents/Footer';
import { InputForm } from '../../componnents/InputForm';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';

interface FormData {
  a: number;
  b: number;
  c: number;
  d: number;
}

export function InversaInputContainer({screen = "Screen9"}){
  const matrizKey = '@mestrado:matriz';
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm();

  async function handleVerify(form: FormData) {
    const data ={
      a:form.a,
      b: form.b,
      c: form.c,
      d:form.d,
    }
    console.log(data)
    try {
      const jsonValue = JSON.stringify(data)
      await AsyncStorage.setItem(matrizKey, jsonValue)
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível salvar!")
    }
    data.a==11 && data.b==(-2) && data.c == (-5) && data.d==1
    ? navigation.navigate(screen) 
    : alert("Vc errou, tente novamente")
  }
  return(
    <Container>
      <Inputs>
        <Line1>
          <InputForm
            name = "a"
            control={control}
            keyboardType="numeric"
            maxLength={2}
            placeholder={"a"}
            width= {55}
            height={55}
          />
          <InputForm
            name = "c"
            control={control}
            keyboardType="numeric"
            maxLength={2}
            placeholder="c"
            width= {55}
            height={55}
          />
        </Line1>
        <Line2>
          <InputForm
            name = "b"
            control={control}
            maxLength={2}
            keyboardType="numeric"
            placeholder="b"
            width= {55}
            height={55}
          />
          <InputForm
            name = "d"
            control={control}
            maxLength={2}
            keyboardType="numeric"
            placeholder="d"
            width= {55}
            height={55}
          />
        </Line2>
      </Inputs>
      <Footer 
        onPress = {handleSubmit(handleVerify)}
        description="Verificar"
      />
    </Container>
  )
}
