import React from 'react';
import { ImageBackground, StatusBar } from "react-native";
import ceu from "../../assets/ceu.jpg";

import { Container, Content, PrincipalContainer, DescriptionText,Title} from './styles'; 
import { ReturnButton } from '../../componnents/ReturnButton';
import { ListaCifra } from '../../componnents/ListaCifra';
import { InputContainerDicaNumeros } from '../../componnents/InputContainerDicaNumeros';


export function Screen22(){
  const formatadas = [1, 0, 21, 12]

  return (
    <Container>
      <ImageBackground source={ceu} resizeMode="cover" style={{ flex: 1 }}>
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
              {formatadas.map((conta, key) => (
                <DescriptionText key={key}>{conta} </DescriptionText>
              ))}
              ]
            </Title>
            <InputContainerDicaNumeros lista={formatadas} screen="Screen23" />
          </PrincipalContainer>
        </Content>
      </ImageBackground>
    </Container>
  );
}
