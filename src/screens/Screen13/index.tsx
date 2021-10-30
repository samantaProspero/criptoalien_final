import React from 'react';
import { ImageBackground, StatusBar } from "react-native";
import fase3 from "../../assets/fase3.jpg";

import { Container, Content, PrincipalContainer, WelcomeText} from './styles'; 
import { ReturnButton } from '../../componnents/ReturnButton';
import { MatrizInputContainer } from '../../componnents/MatrizInputContainer';
import { DicaButton } from '../../componnents/DicaButton';
export function Screen13(){
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
          <PrincipalContainer>
            <WelcomeText>
              2. Escreva uma matriz 2x2 com determinante sendo um dos
              seguintes números:
            </WelcomeText>
            <WelcomeText>
              1,3,5,7,9,11,15,17,19,21,23,25
            </WelcomeText>
            <MatrizInputContainer screen="Screen14" />
          </PrincipalContainer>
        </Content>
      </ImageBackground>
    </Container>
  );
}
