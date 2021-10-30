import React from "react";
import { ImageBackground, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  Container,
  PrincipalContent,
  TextContainer,
  Title,
  DescriptionText,
  Images,
  BombaImg,
} from "./styles";

import { ReturnButton } from "../../componnents/ReturnButton";
import calendario from "../../assets/calendario.png";
import cometa from "../../assets/cometa.jpg";
import { RootStackParamList } from "../../routes/stack.routes";
import { DicaButton } from "../../componnents/DicaButton";

type RotasProps = NativeStackNavigationProp<RootStackParamList>;

export function DicaData() {
  const navigation = useNavigation<RotasProps>();

  function handleExplosion() {
    navigation.navigate("TenteNovamente");
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

          {/* <Content> */}
            <TextContainer>
            <Title>AJUDA{"\n"}</Title>
              <DescriptionText>
                Lembre-se: A vida se vive em ciclos de 7 dias
              </DescriptionText>
            </TextContainer>
            <Images>
              {/* <ImageContainer onPress={()=>{}}> */}
                <BombaImg source={calendario} resizeMode={"contain"} />
                {/* <Data>Domingo</Data> */}
              {/* </ImageContainer> */}
            </Images>
          {/* </Content> */}
        </PrincipalContent>
      </ImageBackground>
    </Container>
  );
}
