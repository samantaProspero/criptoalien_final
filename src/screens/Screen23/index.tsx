import React from 'react';
import { ImageBackground, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ceu from "../../assets/ceu.jpg";
import { Button } from '../../componnents/Button';
import { Container, Content, Title} from './styles';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../routes/stack.routes";

type RotasProps = NativeStackNavigationProp<RootStackParamList>;


export function Screen23(){
  const navigation = useNavigation<RotasProps>();
  
  function handleInicio() {
    navigation.navigate("Welcome");
  }
  return (
    <Container>
      <ImageBackground source={ceu} resizeMode="cover" style={{ flex: 1 }}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <Content>
          <Title>Parabéns! Você aprendeu criptografia e salvou o mundo!</Title>
          <Title>Os alienígenas desistiram da Terra!</Title>
          <Button description="Voltar ao Início" onPress={handleInicio} />
        </Content>
      </ImageBackground>
    </Container>
  );
};