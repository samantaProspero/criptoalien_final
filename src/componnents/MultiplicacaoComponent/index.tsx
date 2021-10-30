import React from "react";
import { useForm } from "react-hook-form";

import {
  Container,
  Celula,
  CelulaText,
  Operador,
  Vetor,
  Conta,
  CelulaConta,
  ComVetor,
  ComConta,
  SemNada,
  Inputs,
} from "./styles";
import { MatrizRecebida } from "../../componnents/MatrizRecebida";
import { InputForm } from "../../componnents/InputForm";

interface Props {
  vetor: number[];
  PrimPosicaoVetor: number;
  SegPosicaoVetor: number;
  semResultado?: boolean;
  semConta?: boolean;
  semNada?: boolean;
  data: {};
}

export function MultiplicacaoComponent({
  vetor,
  PrimPosicaoVetor,
  SegPosicaoVetor,
  data,
  semResultado,
  semConta,
  semNada,
}: Props) {
  const { control } = useForm();

  function handleConta() {
    const contasFinais = [
      data.A11 * vetor[0] + data.A12 * vetor[1],
      data.A21 * vetor[0] + data.A22 * vetor[1],
      data.A11 * vetor[2] + data.A12 * vetor[3],
      data.A21 * vetor[2] + data.A22 * vetor[3],
      data.A11 * vetor[4] + data.A12 * vetor[5],
      data.A21 * vetor[4] + data.A22 * vetor[5],
      data.A11 * vetor[6] + data.A12 * vetor[7],
      data.A21 * vetor[6] + data.A22 * vetor[7],
      data.A11 * vetor[8] + data.A12 * vetor[9],
      data.A21 * vetor[8] + data.A22 * vetor[9],
    ];
    return contasFinais;
  }
  return (
    <Container>
      <MatrizRecebida />
      {semNada ? (
        <SemNada>
          <Operador>
            <Celula
              style={{
                width: 25,
                height: 25,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CelulaText>x</CelulaText>
            </Celula>
          </Operador>
          <Inputs>
            <InputForm
              style={{ backgroundColor: "pink", width: 35, height: 35 }}
              name="resp7"
              control={control}
              keyboardType="numeric"
              placeholder="R7"
              width={35}
              height={35}
            />
            <InputForm
              name="resp8"
              control={control}
              keyboardType="numeric"
              placeholder="R8"
              width={35}
              height={35}
              style={{ backgroundColor: "pink", width: 35, height: 35 }}
            />
          </Inputs>
          <Operador>
            <Celula
              style={{
                width: 25,
                height: 25,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CelulaText>=</CelulaText>
            </Celula>
          </Operador>
          <Inputs>
            <InputForm
              style={{ backgroundColor: "pink", width: 35, height: 35 }}
              name="resp5"
              control={control}
              keyboardType="numeric"
              placeholder="R5"
              width={35}
              height={35}
            />
            <InputForm
              name="resp6"
              control={control}
              keyboardType="numeric"
              placeholder="R6"
              width={35}
              height={35}
              style={{ backgroundColor: "pink", width: 35, height: 35 }}
            />
          </Inputs>
        </SemNada>
      ) : (
        <ComVetor>
          <Operador>
            <Celula
              style={{
                width: 25,
                height: 25,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CelulaText>x</CelulaText>
            </Celula>
          </Operador>

          <Vetor>
            <Celula>
              <CelulaText>{vetor[PrimPosicaoVetor]}</CelulaText>
            </Celula>
            <Celula>
              <CelulaText>{vetor[SegPosicaoVetor]}</CelulaText>
            </Celula>
          </Vetor>
          <Operador>
            <Celula
              style={{
                width: 25,
                height: 25,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CelulaText>=</CelulaText>
            </Celula>
          </Operador>

          {semConta ? (
            <Vetor>
              <InputForm
                name="resp3"
                control={control}
                keyboardType="numeric"
                placeholder="R3"
                width={35}
                height={35}
                style={{ backgroundColor: "pink", width: 35, height: 35 }}
              />
              <InputForm
                name="resp4"
                control={control}
                keyboardType="numeric"
                placeholder="R4"
                width={35}
                height={35}
                style={{ backgroundColor: "pink", width: 35, height: 35 }}
              />
            </Vetor>
          ) : (
            <ComConta>
              <Conta>
                <CelulaConta>
                  <CelulaText>
                    {data.A11} x {vetor[PrimPosicaoVetor]} + {data.A12} x{" "}
                    {vetor[SegPosicaoVetor]}
                  </CelulaText>
                </CelulaConta>
                <CelulaConta>
                  <CelulaText>
                    {data.A21} x {vetor[PrimPosicaoVetor]} + {data.A22} x{" "}
                    {vetor[SegPosicaoVetor]}
                  </CelulaText>
                </CelulaConta>
              </Conta>
              <Operador>
                <Celula
                  style={{
                    width: 25,
                    height: 25,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CelulaText>=</CelulaText>
                </Celula>
              </Operador>
              {semResultado ? (
                <Vetor>
                  <InputForm
                    name="resp1"
                    control={control}
                    keyboardType="numeric"
                    placeholder="R1"
                    width={35}
                    height={35}
                    style={{ backgroundColor: "pink", width: 35, height: 35 }}
                  />
                  <InputForm
                    name="resp2"
                    control={control}
                    keyboardType="numeric"
                    placeholder="R2"
                    width={35}
                    height={35}
                    style={{ backgroundColor: "pink", width: 35, height: 35 }}
                  />
                </Vetor>
              ) : (
                <Vetor>
                  <Celula>
                    <CelulaText>{handleConta()[PrimPosicaoVetor]}</CelulaText>
                  </Celula>
                  <Celula>
                    <CelulaText>{handleConta()[SegPosicaoVetor]}</CelulaText>
                  </Celula>
                </Vetor>
              )}
            </ComConta>
          )}
        </ComVetor>
      )}
    </Container>
  );
}
