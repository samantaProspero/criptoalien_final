import React from "react";
import { StatusBar, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  Container,
  Content,
  TexTContainer,
  Title,
  WelcomeText,
} from "./styles";
import { Footer } from "../../componnents/Footer";
import { ReturnButton } from "../../componnents/ReturnButton";
import cometa from "../../assets/cometa.jpg";

import { RootStackParamList } from "../../routes/stack.routes";

type RotasProps = NativeStackNavigationProp<RootStackParamList>;

export function Screen2() {
  const navigation = useNavigation<RotasProps>();

  function handleScreen3() {
    navigation.navigate("Screen3");
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
          <ReturnButton />
          <TexTContainer>
            <Title
              from={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: [
                  { value: 0, type: "timing" },
                  { value: 1.2, type: "spring" },
                  { value: 1, type: "timing" },
                ],
                opacity: 1,
              }}
            >
              Primeira Missão
            </Title>
            <WelcomeText>
              Para esta missão você contará com a ajuda de um espião que está infiltrado entre os alienígenas.
            </WelcomeText>
            <WelcomeText>
              Para sua segurança as pistas foram criptografadas.O grande desafio será decifrá-las e salvar o mundo!
            </WelcomeText>
          </TexTContainer>
          <Footer onPress={handleScreen3} description={"Vamos lá"} />
        </Content>
      </ImageBackground>
    </Container>
  );
}
