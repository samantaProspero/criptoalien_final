import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, StatusBar } from "react-native";
import ceu from "../../assets/ceu.jpg";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  Container,
  Content,
  PrincipalContainer,
  DescriptionText,
  Title,
} from "./styles";
import { ReturnButton } from "../../componnents/ReturnButton";
import { Button } from "../../componnents/Button";

import { RootStackParamList } from "../../routes/stack.routes";

type RotasProps = NativeStackNavigationProp<RootStackParamList>;

export function Screen21() {
  const navigation = useNavigation<RotasProps>();

  function handleRespostas() {
    navigation.navigate("Screen22");
  }

  return (
    <Container>
      <ImageBackground source={ceu} resizeMode="cover" style={{ flex: 1 }}>
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
            <Title>[1, 0, 203, -92]</Title>
            <DescriptionText>
              Mas, nossa tabela de conversão só possui números de 0 a 25. Para
              solucionar este problema, basta pegarmos o resto da divisão de
              cada número por 26:
            </DescriptionText>
            <Title>[1, 0, 21, 12]</Title>
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
