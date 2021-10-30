import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, StatusBar } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Container, Content, LogoContainer, LogoImg } from "./styles";
import { Footer } from "../../componnents/Footer";
import nave from "../../assets/nave.jpg";
import { RootStackParamList} from "../../routes/stack.routes";
import logo from "../../assets/logo.png";
type RotasProps = NativeStackNavigationProp<RootStackParamList>;

export function Welcome() {
  const navigation = useNavigation<RotasProps>();

  function handleNextScreen() {
    navigation.navigate("Dashboard");
  }

  return (
    <Container>
      <ImageBackground source={nave} resizeMode="stretch" style={{ flex: 1 }}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <Content>
          <LogoContainer>
          <LogoImg source={logo} resizeMode={"contain"} />
          </LogoContainer>
          <Footer onPress={handleNextScreen} description={"Próximo"} />
        </Content>
      </ImageBackground>
    </Container>
  );
}
