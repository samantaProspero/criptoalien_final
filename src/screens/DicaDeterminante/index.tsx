import React from "react";
import { ImageBackground, StatusBar } from "react-native";

import { Container, Content, WelcomeText, DicaImg } from "./styles";
import { ReturnButton } from "../../componnents/ReturnButton";
import { MatrizInputContainer } from "../../componnents/MatrizInputContainer";
import { DicaButton } from "../../componnents/DicaButton";
import ceuMeteoros from "../../assets/ceuMeteoros.jpg";
import determinante from "../../assets/determinante.png";

export function DicaDeterminante() {
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
            <WelcomeText>
              {"\n"}Veja Como calcular determinate de uma matriz 2x2
            </WelcomeText>
            <DicaImg source={determinante} resizeMode={"contain"} />
        </Content>
      </ImageBackground>
    </Container>
  );
}
