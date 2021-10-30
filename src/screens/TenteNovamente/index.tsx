import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, StatusBar } from "react-native";

import { Container, Content } from "./styles";
import { ReturnButton } from "../../componnents/ReturnButton";
import { Footer } from "../../componnents/Footer";
import cometa from "../../assets/cometa.jpg";
import explosao from "../../assets/explosao.png";

export function TenteNovamente() {
  const navigation = useNavigation();

  function handleTryAgain() {
    navigation.goBack();
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
      <ImageBackground source={explosao} resizeMode="contain" style={{ flex: 1 }}>
        <ReturnButton />
      </ImageBackground>
      <Footer onPress={handleTryAgain} description={"Tente Novamente"} />
      </Content>
      </ImageBackground>
    </Container>
  );
}
