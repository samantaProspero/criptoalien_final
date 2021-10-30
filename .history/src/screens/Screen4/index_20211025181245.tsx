import React from "react";
import { ImageBackground, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  Container,
  PrincipalContent,
  TextContainer,
  Content,
  DescriptionText,
  Images,
  ImageContainer,
  ImageContainerRight,
  Data,
  BombaImg,
} from "./styles";

import { ReturnButton } from "../../componnents/ReturnButton";
import bombaData from "../../assets/bombaData.png";
import cometa from "../../assets/cometa.jpg";
import { DicaButton } from "../../componnents/DicaButton";
import { RootStackParamList } from "../../routes/stack.routes";

type RotasProps = NativeStackNavigationProp<RootStackParamList>;

export function Screen4() {
  const navigation = useNavigation<RotasProps>();

  function handleExplosion() {
    navigation.navigate("TenteNovamente");
  }
  function handleCongratulations() {
    navigation.navigate("Screen4Hora");
  }
  function handleDica() {
    navigation.navigate("DicaData");
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
                O espião enviou a mensagem "dia 156", descubra o que isto
                significa, sabendo que o primeiro dia do ano foi em uma sexta
                feira:
              </DescriptionText>
              <DescriptionText>
                Se precisar, clique no botão de ajuda!
              </DescriptionText>
            </TextContainer>
            <Images>
              <ImageContainerRight onPress={handleExplosion}>
                <BombaImg source={bombaData} resizeMode={"contain"} />
                <Data>Domingo</Data>
              </ImageContainerRight>
              <ImageContainer onPress={handleCongratulations}>
                <BombaImg source={bombaData} resizeMode={"contain"} />
                <Data>Sábado</Data>
              </ImageContainer>
              <ImageContainerRight onPress={handleExplosion}>
                <BombaImg source={bombaData} resizeMode={"contain"} />
                <Data>Quarta</Data>
              </ImageContainerRight>
            </Images>
            <DicaButton onPress={handleDica} description="AJUDA" />
          </Content>
        </PrincipalContent>
      </ImageBackground>
    </Container>
  );
}
