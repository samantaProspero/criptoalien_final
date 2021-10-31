import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, ,ButtonText } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import theme from "../../global/styles/theme";

interface Props {
  description: string;
  onPress: () => void;
}

export function DicaButton({ description, ...rest }: Props) {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  return (
    <Container {...rest}>
      <Content>
        <AntDesign
          name="questioncircleo"
          color={theme.colors.shape}
          size={40}
          onPress={goBack}
        />
        <ButtonText>{description}</ButtonText>
      </Content>
    </Container>
  );
}
