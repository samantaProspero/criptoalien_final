import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  Container,
  Content,
  TextContainer,
  Title,
  DescriptionText,
  ButtonSeguir,
  ButtonText,
  MatrizContainer,
  Matriz,
  Line,
  Celula,
  CelulaText,
} from "./styles";
import { ImageBackground, StatusBar } from "react-native";
import ceu from "../../assets/ceu.jpg";
import { ReturnButton } from "../../componnents/ReturnButton";
import { Operator } from "../../componnents/Operator";

import { RootStackParamList } from "../../routes/stack.routes";

type RotasProps = NativeStackNavigationProp<RootStackParamList>;

export function Screen18() {
  const navigation = useNavigation<RotasProps>();
  function handleNextScreen() {
    navigation.navigate("Screen19");
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
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />
          <ReturnButton />
          <TextContainer>
            <DescriptionText>
              O primeiro passo pra decodificação é encontrar a matriz inversa da
              matriz dada:
            </DescriptionText>
            <MatrizContainer>
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
              <Operator operator="x" />
              <Matriz>
                <Line>
                  <Celula>
                    <CelulaText>a</CelulaText>
                  </Celula>
                  <Celula>
                    <CelulaText>b</CelulaText>
                  </Celula>
                </Line>
                <Line>
                  <Celula>
                    <CelulaText>c</CelulaText>
                  </Celula>
                  <Celula>
                    <CelulaText>d</CelulaText>
                  </Celula>
                </Line>
              </Matriz>
              <Operator operator="=" />
              <Matriz>
                <Line>
                  <Celula>
                    <CelulaText>1</CelulaText>
                  </Celula>
                  <Celula>
                    <CelulaText>0</CelulaText>
                  </Celula>
                </Line>
                <Line>
                  <Celula>
                    <CelulaText>0</CelulaText>
                  </Celula>
                  <Celula>
                    <CelulaText>1</CelulaText>
                  </Celula>
                </Line>
              </Matriz>
            </MatrizContainer>
          </TextContainer>
          <ButtonSeguir onPress={handleNextScreen}>
            <ButtonText>Vamos lá</ButtonText>
          </ButtonSeguir>
        </Content>
      </ImageBackground>
    </Container>
  );
}
