import React from 'react';
import { useRoute } from '@react-navigation/native';
import { ImageBackground, StatusBar } from "react-native";
import fase3 from "../../assets/fase3.jpg";


import { Container, Content, PrincipalContainer, DescriptionText,Title} from './styles'; 
import { ReturnButton } from '../../componnents/ReturnButton';
import { ListaCifra } from '../../componnents/ListaCifra';
import { InputContainerDicaNumeros } from '../../componnents/InputContainerDicaNumeros';

type Params = {
  formatadas:[];
}


export function Screen14b(){
  const route = useRoute()
  const {formatadas} = route.params as Params

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
            <ListaCifra />
            <Title>
              [
              {formatadas.map((conta: number, key) => (
                <DescriptionText key={key}>{conta} </DescriptionText>
              ))}
              ]
            </Title>
            <InputContainerDicaNumeros lista={formatadas} />
          </PrincipalContainer>
        </Content>
      </ImageBackground>
    </Container>
  );
}
