import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useForm } from 'react-hook-form';
import { Alert } from "react-native";

import { Container, Inputs, Line1, Line2} from './styles'; 
import { Footer } from '../../componnents/Footer';
import { InputForm } from '../../componnents/InputForm';

interface FormData {
  A11: number;
  A12: number;
  A21: number;
  A22: number;
}

export function MatrizInputContainer({screen = "Screen9"}){
  const matrizKey = '@mestrado:matriz';
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm();

  async function handleVerify(form: FormData) {
    const data ={
      A11:form.A11,
      A12: form.A12,
      A21: form.A21,
      A22:form.A22,
    }
    // Calcula o determinante da matriz digitada:
    const determinante = (data.A11*data.A22) - (data.A12*data.A21)
    //  Calcula o resto da divisão do determinante por 26
    const determinateReduzida = determinante % 26
    // Cria um array de todos os valores inversíveis em Z_26
    const inversivel = [1,3,5,7,9,11,15,17,19,21,23,25]
    // Verifica se determinante Reduzida é um dos valores do array
    try {
      const jsonValue = JSON.stringify(data)
      await AsyncStorage.setItem(matrizKey, jsonValue)
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível salvar!")
    }
    inversivel.includes(determinateReduzida) 
    ? navigation.navigate(screen) 
    : alert("Vc errou, tente novamente")
  }
  return(
    <Container>
      <Inputs>
        <Line1>
          <InputForm
            name = "A11"
            control={control}
            keyboardType="numeric"
            maxLength={2}
            placeholder={"A11"}
            width= {55}
            height={55}
          />
          <InputForm
            name = "A21"
            control={control}
            keyboardType="numeric"
            maxLength={2}
            placeholder="A21"
            width= {55}
            height={55}
          />
          </Line1>
          <Line2>
            <InputForm
              name = "A12"
              control={control}
              maxLength={2}
              keyboardType="numeric"
              placeholder="A12"
              width= {55}
              height={55}
            />
            <InputForm
              name = "A22"
              control={control}
              maxLength={2}
              keyboardType="numeric"
              placeholder="A22"
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
