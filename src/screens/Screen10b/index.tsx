import React from "react";
import { useRoute } from "@react-navigation/native";
import { ImageBackground, StatusBar } from "react-native";
import ceuMeteoros from "../../assets/ceuMeteoros.jpg";

import {
  Container,
  Content,
  PrincipalContainer,
  DescriptionText,
  Title,
} from "./styles";
import { ReturnButton } from "../../componnents/ReturnButton";
import { ListaCifra } from "../../componnents/ListaCifra";
import { InputContainerNumeros } from "../../componnents/InputContainerNumeros";

type Params = {
  formatadas: [];
};

export function Screen10b() {
  const route = useRoute();
  const { formatadas } = route.params as Params;

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
          <PrincipalContainer>
            <ListaCifra />
            <Title>
              [
              {formatadas.map((conta: string) => (
                <DescriptionText>{conta} </DescriptionText>
              ))}
              ]
            </Title>
            <InputContainerNumeros lista={formatadas} />
          </PrincipalContainer>
        </Content>
      </ImageBackground>
    </Container>
  );
}
