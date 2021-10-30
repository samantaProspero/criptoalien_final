import React from "react";
import { StatusBar, ImageBackground } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Content,
  TexTContainer,
  Title,
  WelcomeText,
} from "./styles";
import { Footer } from "../../componnents/Footer";
import nave from "../../assets/nave.jpg";

import { RootStackParamList } from "../../routes/stack.routes";

type RotasProps = NativeStackNavigationProp<RootStackParamList>;

export function Dashboard() {
  const navigation = useNavigation<RotasProps>();

  function handleNextScreen() {
    navigation.navigate("Trilha");
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ImageBackground source={nave} resizeMode="stretch" style={{ flex: 1 }}>
        <Content>
          <TexTContainer>
            <Title
            // from={{ scale: 0, opacity: 0 }}
            // animate={{ scale: 1, opacity: 1 }}
            // transition={{
            //   type: "timing",
            //   duration: 1000,
            // }}
            >
              {"Bem-vindo(a),{" "}
            </Title>
            <WelcomeText
            // from={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{
            //   type: "timing",
            //   duration: 4000,
            // }}
            >
              Precisamos de sua ajuda para salvar o mundo de ataques
              alienígenas!!!
            </WelcomeText>
          </TexTContainer>
          <Footer onPress={handleNextScreen} description={"Desafio aceito"} />
        </Content>
      </ImageBackground>
    </Container>
  );
}
