import React from 'react';
import { useNavigation, useRoute} from '@react-navigation/native';
import { ImageBackground, StatusBar } from "react-native";
import fase3 from "../../assets/fase3.jpg";

import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Container, Content, PrincipalContainer, DescriptionText,Title} from './styles'; 
import { ReturnButton } from '../../componnents/ReturnButton';
import { Button } from '../../componnents/Button';

import {RootStackParamList} from '../../routes/stack.routes'

type RotasProps = NativeStackNavigationProp<RootStackParamList>

type Params = {
  contasFinais:[];
}


export function Screen14a(){
  const navigation = useNavigation<RotasProps>();
  const route = useRoute()
  const {contasFinais} = route.params as Params

  function handleRespostas() {
    const formatadas = contasFinais.map((conta:number) => conta % 26)
    navigation.navigate('Screen14b', {formatadas})
   }

  return (
    <Container>
      <ImageBackground source={fase3} resizeMode="cover" style={{ flex: 1 }}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <Content>
          <ReturnButton />
          <PrincipalContainer>
            <DescriptionText>
              Agora só falta converter os números em letras novamente.
              {"\n"}
              {"\n"}Os valores encontrados foram:
            </DescriptionText>
            <Title>
              [
              {contasFinais.map((conta: number) => (
                <DescriptionText>{conta} </DescriptionText>
              ))}
              ]
            </Title>
            <DescriptionText>
              Mas, nossa tabela de conversão só possui números de 0 a 25. Para
              solucionar este problema, basta pegarmos o resto da divisão de
              cada número por 26:
            </DescriptionText>
            <Title>
              [
              {contasFinais.map((conta: number) => (
                <DescriptionText>{conta % 26} </DescriptionText>
              ))}
              ]
            </Title>
            <DescriptionText>
              Agora podemos fazer a conversão ...
            </DescriptionText>
          </PrincipalContainer>
          <Button description="Próximo" onPress={handleRespostas} />
        </Content>
      </ImageBackground>
    </Container>
  );
}
