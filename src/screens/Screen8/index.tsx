import React from "react";
import { ImageBackground, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Container, Content, PrincipalContainer, WelcomeText } from "./styles";
import { ReturnButton } from "../../componnents/ReturnButton";
import { MatrizInputContainer } from "../../componnents/MatrizInputContainer";
import { DicaButton } from "../../componnents/DicaButton";
import ceuMeteoros from "../../assets/ceuMeteoros.jpg";
import { RootStackParamList } from "../../routes/stack.routes";

type RotasProps = NativeStackNavigationProp<RootStackParamList>;

export function Screen8() {
  const navigation = useNavigation<RotasProps>();
  function handleDica() {
    navigation.navigate("DicaDeterminante");
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
          <PrincipalContainer>
            <WelcomeText>
              {"\n"}2. Escreva uma matriz 2x2 com determinante sendo um dos
              seguintes números: 1,3,5,7,9,11,15,17,19,21,23,25
            </WelcomeText>
            <WelcomeText>
              Se precisar, clique no link para obter ajuda.
            </WelcomeText>
            <DicaButton onPress={handleDica} description={"Dica"} />
            <MatrizInputContainer />
          </PrincipalContainer>
        </Content>
      </ImageBackground>
    </Container>
  );
}
