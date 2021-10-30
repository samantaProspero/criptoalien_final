import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { useForm } from "react-hook-form";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Container, Inputs } from "./styles";
import { Button } from "../../componnents/Button";
import { InputForm } from "../../componnents/InputForm";

import { RootStackParamList } from "../../routes/stack.routes";

type RotasProps = NativeStackNavigationProp<RootStackParamList>;

interface FormData {
  A: string;
  E: string;
  S: string;
  C: string;
}

export function InputContainerAesk() {
  const navigation = useNavigation<RotasProps>();
  const { control, handleSubmit } = useForm();
  // const field2Ref = useRef(null);

  function handleVerify(form: FormData) {
    const data = {
      A: form.A,
      E: form.E,
      S: form.S,
      C: form.C,
    };
    data.A == "1" && data.E == "5" && data.S == "19" && data.C == "3"
      ? navigation.navigate("Screen18")
      : Alert.alert("Preencha corretamente os campos");
  }

  return (
    <Container>
      <Inputs>
        <InputForm
          name="A"
          control={control}
          placeholder="A"
          keyboardType="numeric"
          // returnKeyType={"next"}
          // onSubmitEditing={() => field2Ref.current?.focus()}
          // blurOnSubmit={false}
          // autoFocus={true}
          // blurOnSubmit={false}
          maxLength={2}
          width={60}
          height={60}
        />
        <InputForm
          name="E"
          control={control}
          placeholder="E"
          keyboardType="numeric"
          // returnKeyType="next"
          // ref={field2Ref}
          // blurOnSubmit={false}
          width={60}
          height={60}
        />
        <InputForm
          name="S"
          control={control}
          placeholder="S"
          keyboardType="numeric"
          returnKeyType="next"
          width={60}
          height={60}
        />
        <InputForm
          name="C"
          control={control}
          placeholder="C"
          keyboardType="numeric"
          width={60}
          height={60}
        />
      </Inputs>
      <Button onPress={handleSubmit(handleVerify)} description="Verificar" />
    </Container>
  );
}
