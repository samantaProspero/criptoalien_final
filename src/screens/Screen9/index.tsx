import React, { useEffect, useState } from "react";
import { ImageBackground, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  Container,
  Content,
  PrincipalContainer,
  WelcomeText,
  DescriptionText,
  ButtonSeguir,
  ButtonText,
} from "./styles";
import { ReturnButton } from "../../componnents/ReturnButton";
import { DesativadaCifra } from "../../componnents/DesativadaCifra";
import { MultiplicacaoComponent } from "../../componnents/MultiplicacaoComponent";
import ceuMeteoros from "../../assets/ceuMeteoros.jpg";

import { RootStackParamList } from "../../routes/stack.routes";

type RotasProps = NativeStackNavigationProp<RootStackParamList>;

export function Screen9() {
  const [data, setData] = useState([]);
  const navigation = useNavigation<RotasProps>();

  const matrizKey = "@mestrado:matriz";
  const desativada = [4, 5, 19, 1, 20, 9, 25, 1, 4, 1];

  async function getItem() {
    try {
      await AsyncStorage.getItem(matrizKey).then((value) => {
        const dataNova = JSON.parse(value!);
        setData(dataNova);
      });
    } catch (error) {
      console.log(error);
      alert("Não foi possível pegar os dados!");
    }
  }

  function handleScreen10() {
    navigation.navigate("Screen10");
  }

  useEffect(() => {
    getItem();
  }, []);

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
            {/* <WelcomeText>Multiplicação das matrizes</WelcomeText> */}
            <DescriptionText>
              3. Vamos multiplicar a matriz que você encontrou pela matriz 2x1
              cujos elementos são os dois primeiros números da palavra
              "DESATIVADA".{"\n"}Veja o exemplo:
            </DescriptionText>
            <DesativadaCifra />
            <MultiplicacaoComponent
              vetor={desativada}
              PrimPosicaoVetor={0}
              SegPosicaoVetor={1}
              data={data}
            />
            <DescriptionText>Agora é a sua vez...</DescriptionText>
            <ButtonSeguir onPress={handleScreen10}>
              <ButtonText>Próximo</ButtonText>
            </ButtonSeguir>
          </PrincipalContainer>
        </Content>
      </ImageBackground>
    </Container>
  );
}
