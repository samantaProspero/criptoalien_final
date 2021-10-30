import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ImageBackground,
  StatusBar,
} from "react-native";

import { Container, Content, PrincipalContainer, WelcomeText } from "./styles";
import { ReturnButton } from "../../componnents/ReturnButton";
import { ListaCifra } from "../../componnents/ListaCifra";
import { InputContainerDica } from "../../componnents/InputContainerDica";
import fase3 from "../../assets/fase3.jpg";

export function Screen12() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-50}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <ImageBackground
            source={fase3}
            resizeMode="cover"
            style={{ flex: 1 }}
          >
            <StatusBar
              barStyle="dark-content"
              translucent
              backgroundColor="transparent"
            />
            <Content>
              <ReturnButton />
              <PrincipalContainer>
                <WelcomeText>
                  {"\n"}1. Substitua cada letra da palavra "DICA" ao seu número
                  correspondente, conforme tabela:
                </WelcomeText>
                <ListaCifra />
                <InputContainerDica />
              </PrincipalContainer>
            </Content>
          </ImageBackground>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
