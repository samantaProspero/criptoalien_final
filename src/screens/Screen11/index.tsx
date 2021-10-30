import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ImageBackground, StatusBar } from "react-native";
import fase3 from "../../assets/fase3.jpg";

import { Container, Content, TextContainer, WelcomeText,ButtonSeguir, ButtonText } from './styles'; 
import { ReturnButton } from '../../componnents/ReturnButton';
import {RootStackParamList} from '../../routes/stack.routes'

type RotasProps = NativeStackNavigationProp<RootStackParamList>


export function Screen11(){
  const navigation = useNavigation<RotasProps>();

  function handleScreen12() {
    navigation.navigate('Screen12');
  }

  return (
    <Container>
      <ImageBackground source={fase3} resizeMode="cover" style={{ flex: 1 }}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <Content>
          <ReturnButton />
          <TextContainer>
            <WelcomeText>
              {"\n"}Foi encontrada uma bomba deixada pelos alienígenas e precisamos urgentemente cortar o cabo  certo.
            </WelcomeText>
            <WelcomeText>
              Para isto você precisa pedir uma dica ao espião.
            </WelcomeText>
            <WelcomeText>
              Codifique a palavra "DICA".
            </WelcomeText>
          </TextContainer>

          <ButtonSeguir onPress={handleScreen12}>
            <ButtonText>Vamos lá</ButtonText>
          </ButtonSeguir>
        </Content>
      </ImageBackground>
    </Container>
  );
}
