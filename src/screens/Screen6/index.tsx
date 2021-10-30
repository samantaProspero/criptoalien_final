import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, StatusBar } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  Container,
  Content,
  TextContainer,
  WelcomeText,
  ButtonSeguir,
  ButtonText,
} from "./styles";
import { ReturnButton } from "../../componnents/ReturnButton";
import { RootStackParamList } from "../../routes/stack.routes";
import ceuMeteoros from "../../assets/ceuMeteoros.jpg";
type RotasProps = NativeStackNavigationProp<RootStackParamList>;

export function Screen6() {
  const navigation = useNavigation<RotasProps>();

  function handleScreen7() {
    navigation.navigate("Screen7");
  }

  return (
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
          <TextContainer>
            <WelcomeText>
              {"\n"}Avise ao espião que o ataque foi evitado...
            </WelcomeText>
            <WelcomeText>
              Para isto, você precisará cifrar a palavra DESATIVADA seguindo
              algumas regras.
            </WelcomeText>
          </TextContainer>

          <ButtonSeguir onPress={handleScreen7}>
            <ButtonText>Vamos lá</ButtonText>
          </ButtonSeguir>
        </Content>
      </ImageBackground>
    </Container>
  );
}
