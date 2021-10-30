import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ImageBackground, StatusBar } from "react-native";
import ceu from "../../assets/ceu.jpg";

import {
  Container,
  Content,
  TextContainer,
  Title,
  DescriptionText,
  ButtonSeguir,
  ButtonText,
  Matriz,
  Line,
  Celula,
  CelulaText,
} from "./styles";
import { ReturnButton } from "../../componnents/ReturnButton";

import { RootStackParamList } from "../../routes/stack.routes";

type RotasProps = NativeStackNavigationProp<RootStackParamList>;

export function Screen15() {
  const navigation = useNavigation<RotasProps>();

  function handleNextScreen() {
    navigation.navigate("Screen17");
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
          <TextContainer>
            <DescriptionText>
              A dica enviada pelo espião é uma matriz decodificadora e uma
              palavra cifrada:{"\n"}
            </DescriptionText>
            <Title>AESC</Title>
            <Matriz>
              <Line>
                <Celula>
                  <CelulaText>1</CelulaText>
                </Celula>
                <Celula>
                  <CelulaText>2</CelulaText>
                </Celula>
              </Line>
              <Line>
                <Celula>
                  <CelulaText>5</CelulaText>
                </Celula>
                <Celula>
                  <CelulaText>11</CelulaText>
                </Celula>
              </Line>
            </Matriz>
          </TextContainer>
          <ButtonSeguir onPress={handleNextScreen}>
            <ButtonText>Vamos lá</ButtonText>
          </ButtonSeguir>
        </Content>
      </ImageBackground>
    </Container>
  );
}
