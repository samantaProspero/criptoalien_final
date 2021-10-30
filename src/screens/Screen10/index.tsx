import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar, Alert, ImageBackground } from "react-native";
import { useForm } from "react-hook-form";

import {
  Container,
  Content,
  PrincipalContainer,
  WelcomeText,
  Celula,
  CelulaText,
  Vetor,
  Conta,
  CelulaConta,
  Multiplicacao,
  Inputs,
} from "./styles";
import { ReturnButton } from "../../componnents/ReturnButton";
import { DesativadaCifra } from "../../componnents/DesativadaCifra";
import { InputForm } from "../../componnents/InputForm";
import { Footer } from "../../componnents/Footer";
import { MatrizRecebida } from "../../componnents/MatrizRecebida";
import { Operator } from "../../componnents/Operator";
import { RootStackParamList } from "../../routes/stack.routes";
import ceuMeteoros from "../../assets/ceuMeteoros.jpg";

type RotasProps = NativeStackNavigationProp<RootStackParamList>;

interface DataProps {
  data: [];
}

interface DataItemsProps extends DataProps {
  A11: number;
  A12: number;
  A21: number;
  A22: number;
}

interface FormData {
  resp1: number;
  resp2: number;
  resp3: number;
  resp4: number;
  resp5: number;
  resp6: number;
  resp7: number;
  resp8: number;
}

export function Screen10() {
  const [data, setData] = useState<DataItemsProps>([]);
  const [resps, setResps] = useState({});

  const matrizKey = "@mestrado:matriz";

  const navigation = useNavigation<RotasProps>();
  const { control, handleSubmit } = useForm();

  const vetor = [4, 5, 19, 1, 20, 9, 25, 1, 4, 1];

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

  function handleVerify(form: FormData) {
    const resps = {
      resp1: form.resp1,
      resp2: form.resp2,
      resp3: form.resp3,
      resp4: form.resp4,
      resp5: form.resp5,
      resp6: form.resp6,
      resp7: form.resp7,
      resp8: form.resp8,
    };
    setResps(resps);

    const contasFinais = handleConta();

    const testeResps =
      resps.resp1 == handleConta()[4] &&
      resps.resp2 == handleConta()[5] &&
      resps.resp3 == handleConta()[6] &&
      resps.resp4 == handleConta()[7] &&
      resps.resp5 == 4 &&
      resps.resp6 == 1 &&
      resps.resp7 == handleConta()[8] &&
      resps.resp8 == handleConta()[9];

    testeResps
      ? navigation.navigate("Screen10a", { contasFinais })
      : alert("Vc errou, tente novamente");
  }

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
            <WelcomeText>Preencha as lacunas</WelcomeText>
            <DesativadaCifra />

            <Multiplicacao>
              <MatrizRecebida />
              <Operator operator="x" />
              <Vetor>
                <Celula>
                  <CelulaText>{vetor[2]}</CelulaText>
                </Celula>
                <Celula>
                  <CelulaText>{vetor[3]}</CelulaText>
                </Celula>
              </Vetor>
              <Operator operator="=" />
              <Conta>
                <CelulaConta>
                  <CelulaText>
                    {data.A11} x {vetor[2]} + {data.A12} x {vetor[3]}
                  </CelulaText>
                </CelulaConta>
                <CelulaConta>
                  <CelulaText>
                    {data.A21} x {vetor[2]} + {data.A22} x {vetor[3]}
                  </CelulaText>
                </CelulaConta>
              </Conta>
              <Operator operator="=" />
              <Vetor>
                <Celula>
                  <CelulaText>{handleConta()[2]}</CelulaText>
                </Celula>
                <Celula>
                  <CelulaText>{handleConta()[3]}</CelulaText>
                </Celula>
              </Vetor>
            </Multiplicacao>

            <Multiplicacao>
              <MatrizRecebida />
              <Operator operator="x" />
              <Vetor>
                <Celula>
                  <CelulaText>{vetor[4]}</CelulaText>
                </Celula>
                <Celula>
                  <CelulaText>{vetor[5]}</CelulaText>
                </Celula>
              </Vetor>
              <Operator operator="=" />
              <Conta>
                <CelulaConta>
                  <CelulaText>
                    {data.A11} x {vetor[4]} + {data.A12} x {vetor[5]}
                  </CelulaText>
                </CelulaConta>
                <CelulaConta>
                  <CelulaText>
                    {data.A21} x {vetor[4]} + {data.A22} x {vetor[5]}
                  </CelulaText>
                </CelulaConta>
              </Conta>
              <Operator operator="=" />
              <Inputs>
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
              </Inputs>
            </Multiplicacao>

            <Multiplicacao>
              <MatrizRecebida />
              <Operator operator="x" />
              <Vetor>
                <Celula>
                  <CelulaText>{vetor[6]}</CelulaText>
                </Celula>
                <Celula>
                  <CelulaText>{vetor[7]}</CelulaText>
                </Celula>
              </Vetor>
              <Operator operator="=" />
              <Inputs>
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
              </Inputs>
            </Multiplicacao>

            <Multiplicacao>
              <MatrizRecebida />
              <Operator operator="x" />
              <Vetor>
                <InputForm
                  name="resp5"
                  control={control}
                  keyboardType="numeric"
                  placeholder="R5"
                  width={35}
                  height={35}
                  style={{ backgroundColor: "pink", width: 35, height: 35 }}
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
              </Vetor>
              <Operator operator="=" />
              <Inputs>
                <InputForm
                  name="resp7"
                  control={control}
                  keyboardType="numeric"
                  placeholder="R7"
                  width={35}
                  height={35}
                  style={{ backgroundColor: "pink", width: 35, height: 35 }}
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
            </Multiplicacao>
          </PrincipalContainer>
          <Footer
            onPress={handleSubmit(handleVerify)}
            description="Verificar"
          />
        </Content>
      </ImageBackground>
    </Container>
  );
}
