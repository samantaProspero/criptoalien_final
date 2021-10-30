import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, StatusBar } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  Container,
  Content,
  TrilhaContainer,
  TrilhaItem,
  TrilhaItemText,
} from "./styles";
import { RootStackParamList } from "../../routes/stack.routes";
import cometa from "../../assets/cometa.jpg";

type RotasProps = NativeStackNavigationProp<RootStackParamList>;

export function Trilha() {
  const navigation = useNavigation<RotasProps>();

  function handleFase1() {
    navigation.navigate("Screen2");
  }
  function handleFase2() {
    navigation.navigate("Screen6");
  }
  function handleFase3() {
    navigation.navigate("Screen11");
  }
  function handleFase4() {
    navigation.navigate("Screen15");
  }
  function handleCreditos() {
    navigation.navigate("Creditos");
  }

  return (
    <Container>
      <ImageBackground source={cometa} resizeMode="cover" style={{ flex: 1 }}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <Content>
          <TrilhaContainer>
            <TrilhaItem onPress={handleFase1}>
              <TrilhaItemText>FASE 1</TrilhaItemText>
            </TrilhaItem>
            <TrilhaItem onPress={handleFase2}>
              <TrilhaItemText>FASE 2</TrilhaItemText>
            </TrilhaItem>
            <TrilhaItem onPress={handleFase3}>
              <TrilhaItemText>FASE 3</TrilhaItemText>
            </TrilhaItem>
            <TrilhaItem onPress={handleFase4}>
              <TrilhaItemText>FASE 4</TrilhaItemText>
            </TrilhaItem>
            <TrilhaItem onPress={handleCreditos}>
              <TrilhaItemText>Créditos</TrilhaItemText>
            </TrilhaItem>
          </TrilhaContainer>
        </Content>
      </ImageBackground>
    </Container>
  );
}
