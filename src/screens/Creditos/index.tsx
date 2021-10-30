import React from "react";
import { StatusBar, ImageBackground, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import {
  Container,
  Content,
  TexTContainer,
  Title,
  WelcomeText,
  ReturnButton
} from "./styles";
import cometa from "../../assets/cometa.jpg";

import { RootStackParamList } from "../../routes/stack.routes";

type RotasProps = NativeStackNavigationProp<RootStackParamList>;

export function Creditos() {
  const navigation = useNavigation<RotasProps>();

  return (
    <Container>
      <ImageBackground source={cometa} resizeMode="cover" style={{ flex: 1 }}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <Content>
          {/* <ReturnButton onPress={navigation.navigate('Trilha')}>
            <AntDesign name="leftcircleo" />
          </ReturnButton> */}
          <TexTContainer>
            <Title>Créditos</Title>
            <WelcomeText
              onPress={() =>
                Linking.openURL("https://br.freepik.com/vetores/luz")
              }
            >
              Imagem Nave: Luz vetor criado por macrovector - br.freepik.com
            </WelcomeText>
            <WelcomeText
              onPress={() =>
                Linking.openURL("https://br.freepik.com/vetores/sol")
              }
            >
              Imagem Foquete: Sol vetor criado por macrovector - br.freepik.com
            </WelcomeText>
            {/* <WelcomeText
              onPress={() =>
                Linking.openURL("https://br.freepik.com/vetores/viagem")
              }
            >
              Imagem Naves: Viagem vetor criado por macrovector - br.freepik.com
            </WelcomeText> */}
            <WelcomeText
              onPress={() =>
                Linking.openURL(
                  "https://unsplash.com/@jdiegoph?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                )
              }
            >
              Imagem Background Fase 1: Photo by {"Diego PH"} on {"Unsplash"}
            </WelcomeText>
            <WelcomeText
              onPress={() =>
                Linking.openURL(
                  "https://unsplash.com/@mischievous_penguins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                )
              }
            >
              Imagem Background Fase 2: Photo by{" Casey Horner"} on
              {" Unsplash"}
              {/* <a href="https://unsplash.com/s/photos/space?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"></a> */}
            </WelcomeText>
            <WelcomeText
              onPress={() =>
                Linking.openURL(
                  "https://unsplash.com/@ventiviews?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                )
              }
            >
              Imagem Background Fase 3: Photo by{" Cameron Venti"} on
              {" Unsplash"}
              {/* <a href="https://unsplash.com/s/photos/galaxy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a> */}
            </WelcomeText>
            <WelcomeText>
              {/* O grande desafio será decifrar as pistas e salvar o mundo */}
            </WelcomeText>
          </TexTContainer>
        </Content>
      </ImageBackground>
    </Container>
  );
}
