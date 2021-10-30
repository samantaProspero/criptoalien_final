import React from "react";

import { Container, Content, PrincipalContainer, WelcomeText } from "./styles";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  StatusBar,
  ImageBackground,
} from "react-native";
import { ReturnButton } from "../../componnents/ReturnButton";
import { ListaCifra } from "../../componnents/ListaCifra";
import { InputContainerAesk } from "../../componnents/InputContainerAesk";
import ceu from "../../assets/ceu.jpg";
export function Screen17() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-50}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              <PrincipalContainer>
                <WelcomeText>
                  {"\n"}1. Substitua cada letra da palavra "AESC" ao seu número
                  correspondente, conforme tabela:
                </WelcomeText>
                <ListaCifra />
                <InputContainerAesk />
              </PrincipalContainer>
            </Content>
          </ImageBackground>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
