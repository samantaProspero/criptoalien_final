import React from 'react';
import { ImageBackground, StatusBar } from "react-native";
import ceu from "../../assets/ceu.jpg";

import { Container, Content, TextContainer,DescriptionText, MatrizContainer, Matriz, Line, Celula, CelulaText, Conta, ContaText } from './styles'; 
import { ReturnButton } from '../../componnents/ReturnButton';
import { DicaButton } from '../../componnents/DicaButton';
import { Operator } from '../../componnents/Operator';
import { InversaInputContainer } from '../../componnents/InversaInputContainer';


export function Screen19() {
  return (
    <Container>
      <ImageBackground source={ceu} resizeMode="cover" style={{ flex: 1 }}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <Content>
          <DicaButton onPress={() => {}} description="Ajuda" />
          <ReturnButton />
          <TextContainer>
            <MatrizContainer>
              <Matriz>
                <Line>
                  <Celula>
                    <CelulaText>1</CelulaText>
                  </Celula>
                  <Celula>
                    <CelulaText>2</CelulaText>
                  </Celula>
                </Line>
                <Line>
                  <Celula>
                    <CelulaText>5</CelulaText>
                  </Celula>
                  <Celula>
                    <CelulaText>11</CelulaText>
                  </Celula>
                </Line>
              </Matriz>
              <Operator operator="x" />
              <Matriz>
                <Line>
                  <Celula>
                    <CelulaText>a</CelulaText>
                  </Celula>
                  <Celula>
                    <CelulaText>b</CelulaText>
                  </Celula>
                </Line>
                <Line>
                  <Celula>
                    <CelulaText>c</CelulaText>
                  </Celula>
                  <Celula>
                    <CelulaText>d</CelulaText>
                  </Celula>
                </Line>
              </Matriz>
              <Operator operator="=" />
              <Matriz>
                <Line>
                  <Celula>
                    <CelulaText>1</CelulaText>
                  </Celula>
                  <Celula>
                    <CelulaText>0</CelulaText>
                  </Celula>
                </Line>
                <Line>
                  <Celula>
                    <CelulaText>0</CelulaText>
                  </Celula>
                  <Celula>
                    <CelulaText>1</CelulaText>
                  </Celula>
                </Line>
              </Matriz>
            </MatrizContainer>

            <MatrizContainer>
              <Matriz>
                <Line>
                  <Conta>
                    <ContaText>1 x a + 2 x c =1</ContaText>
                  </Conta>
                  <Conta>
                    <ContaText>1 x b + 2 x d =0</ContaText>
                  </Conta>
                </Line>
                <Line>
                  <Conta>
                    <ContaText>5 x a + 11 x c =0</ContaText>
                  </Conta>
                  <Conta>
                    <ContaText>5 x b + 11 x d =1 </ContaText>
                  </Conta>
                </Line>
              </Matriz>
            </MatrizContainer>
            <DescriptionText>
              Resolva o sistema linear acima e preencha as lacunas.
            </DescriptionText>
            <InversaInputContainer screen={"Screen20"} />
          </TextContainer>
        </Content>
      </ImageBackground>
    </Container>
  );
}
