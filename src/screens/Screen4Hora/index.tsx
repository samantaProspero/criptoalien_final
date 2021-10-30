import React from "react";
import { ImageBackground, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  Container,
  PrincipalContent,
  Content,
  TextContainer,
  DescriptionText,
  Images,
  ImageContainer,
  ImageContainerRight,
  Horario,
  BombaImg,
} from "./styles";

import { ReturnButton } from "../../componnents/ReturnButton";
import bombaData from "../../assets/bombaData.png";
import cometa from "../../assets/cometa.jpg";
import { RootStackParamList } from "../../routes/stack.routes";

type RotasProps = NativeStackNavigationProp<RootStackParamList>;

export function Screen4Hora() {
  const navigation = useNavigation<RotasProps>();

  function handleExplosion() {
    navigation.navigate("TenteNovamente");
  }
  function handleCongratulations() {
    navigation.navigate("Trilha");
  }
  return (
    <Container>
      <ImageBackground source={cometa} resizeMode="cover" style={{ flex: 1 }}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <PrincipalContent>
          <ReturnButton />
          <Content>
            <TextContainer>
              <DescriptionText>Clique na bomba correta</DescriptionText>
              <DescriptionText>
                Desta vez, decodifique o horário recebido e clique na bomba correspondente:
              </DescriptionText>
              <DescriptionText>hora 95</DescriptionText>
            </TextContainer>
            <Images>
              <ImageContainerRight onPress={handleCongratulations}>
                <BombaImg source={bombaData} resizeMode={"contain"} />
                <Horario>Sábado{"\n"}às 23h</Horario>
              </ImageContainerRight>
              <ImageContainer onPress={handleExplosion}>
                <BombaImg source={bombaData} resizeMode={"contain"} />
                <Horario>Sábado{"\n"}às 11h</Horario>
              </ImageContainer>
              <ImageContainerRight onPress={handleExplosion}>
                <BombaImg source={bombaData} resizeMode={"contain"} />
                <Horario>Sábado{"\n"}às 16h</Horario>
              </ImageContainerRight>
            </Images>
          </Content>
        </PrincipalContent>
      </ImageBackground>
    </Container>
  );
}
