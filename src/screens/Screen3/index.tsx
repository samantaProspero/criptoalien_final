import React from "react";
import { ImageBackground, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  Container,
  Content,
  TextContainer,
  Title,
  WelcomeText,
} from "./styles";
import { Footer } from "../../componnents/Footer";
import { ReturnButton } from "../../componnents/ReturnButton";
import cometa from "../../assets/cometa.jpg";
import { RootStackParamList } from "../../routes/stack.routes";

type RotasProps = NativeStackNavigationProp<RootStackParamList>;

export function Screen3() {
  const navigation = useNavigation<RotasProps>();

  function handleScreen4() {
    navigation.navigate("Screen4");
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
          <TextContainer>
            <Title>Missão:</Title>
            <WelcomeText>
              O espião enviou informações com data e horário do primeiro ataque.
              {"\n"}
              {"\n"}
              Sua missão é decifrar e evitar o ataque.
            </WelcomeText>
          </TextContainer>
          <Footer onPress={handleScreen4} description={"Vamos lá"} />
        </Content>
      </ImageBackground>
    </Container>
  );
}
