import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import React from "react";

// Para o carregamento das fontes:
import AppLoading from "expo-app-loading";

// Para nosso arquivo global sobrescrever o styled-components:
import { ThemeProvider } from "styled-components";

// Importa as fontes do google:
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Routes } from "./src/routes";
import theme from "./src/global/styles/theme";

export default function App() {
  // Define as fontes
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });
  // Se não tiver a fonte no cel, carrega as fontes do google:
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
