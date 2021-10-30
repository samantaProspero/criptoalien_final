import React from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  StatusBar,
} from "react-native";

import { Container, Content, PrincipalContainer, WelcomeText } from "./styles";
import { ReturnButton } from "../../componnents/ReturnButton";
import { ListaCifra } from "../../componnents/ListaCifra";
import { InputContainer } from "../../componnents/InputContainer";
import ceuMeteoros from "../../assets/ceuMeteoros.jpg";

export function Screen7() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-50}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <ImageBackground
            source={ceuMeteoros}
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
                  {"\n"}1. Substitua cada letra da palavra "DESATIVADA" ao seu
                  número correspondente, conforme tabela:
                </WelcomeText>
                <ListaCifra />
                <InputContainer />
              </PrincipalContainer>
            </Content>
          </ImageBackground>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
