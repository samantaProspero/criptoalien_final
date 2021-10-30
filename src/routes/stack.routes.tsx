import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "../screens/Welcome";
import { Dashboard } from "../screens/Dashboard";
import { Trilha } from "../screens/Trilha";
import { Screen2 } from "../screens/Screen2";
import { Screen3 } from "../screens/Screen3";
import { Screen4 } from "../screens/Screen4";
import { Screen4Hora } from "../screens/Screen4Hora";
import { TenteNovamente } from "../screens/TenteNovamente";
import { Screen6 } from "../screens/Screen6";
import { Screen7 } from "../screens/Screen7";
import { Screen8 } from "../screens/Screen8";
import { Screen9 } from "../screens/Screen9";
import { Screen10 } from "../screens/Screen10";
import { Screen10a } from "../screens/Screen10a";
import { Screen10b } from "../screens/Screen10b";
import { Screen11 } from "../screens/Screen11";
import { Screen12 } from "../screens/Screen12";
import { Screen13 } from "../screens/Screen13";
import { Screen14 } from "../screens/Screen14";
import { Screen14a } from "../screens/Screen14a";
import { Screen14b } from "../screens/Screen14b";
import { Screen15 } from "../screens/Screen15";
import { Screen17 } from "../screens/Screen17";
import { Screen18 } from "../screens/Screen18";
import { Screen19 } from "../screens/Screen19";
import { Screen20 } from "../screens/Screen20";
import { Screen21 } from "../screens/Screen21";
import { Screen22 } from "../screens/Screen22";
import { Screen23 } from "../screens/Screen23";
import { Creditos } from "../screens/Creditos";
import { DicaData } from "../screens/DicaData";
import { DicaDeterminante } from "../screens/DicaDeterminante";

export type RootStackParamList = {
  Welcome: undefined;
  Dashboard: undefined;
  Trilha: undefined;
  Screen2: undefined;
  Screen3: undefined;
  Screen4: undefined;
  Screen4Hora: undefined;
  TenteNovamente: undefined;
  Screen6: undefined;
  Screen7: undefined;
  Screen8: undefined;
  Screen9: undefined;
  Screen10: undefined;
  Screen10a: {
    contasFinais: number[];
  };
  Screen10b: {
    formatadas: number[];
  };
  Screen11: undefined;
  Screen12: undefined;
  Screen13: undefined;
  Screen14: undefined;
  Screen14a: {
    contasFinais: number[];
  };
  Screen14b: {
    formatadas: number[];
  };
  Screen15: undefined;
  Screen17: undefined;
  Screen18: undefined;
  Screen19: undefined;
  Screen20: undefined;
  Screen21: undefined;
  Screen22: undefined;
  Screen23: undefined;
  Creditos: undefined;
  DicaData: undefined;
  DicaDeterminante: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Trilha" component={Trilha} />
      <Screen name="Creditos" component={Creditos} />
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Screen2" component={Screen2} />
      <Screen name="Screen3" component={Screen3} />
      <Screen name="Screen4" component={Screen4} />
      <Screen name="Screen4Hora" component={Screen4Hora} />
      <Screen name="DicaData" component={DicaData} />
      <Screen name="TenteNovamente" component={TenteNovamente} />
      <Screen name="Screen6" component={Screen6} />
      <Screen name="Screen7" component={Screen7} />
      <Screen name="Screen9" component={Screen9} />
      <Screen name="Screen8" component={Screen8} />
      <Screen name="DicaDeterminante" component={DicaDeterminante} />
      <Screen name="Screen10" component={Screen10} />
      <Screen name="Screen10a" component={Screen10a} />
      <Screen name="Screen10b" component={Screen10b} />
      <Screen name="Screen11" component={Screen11} />
      <Screen name="Screen12" component={Screen12} />
      <Screen name="Screen13" component={Screen13} />
      <Screen name="Screen14" component={Screen14} />
      <Screen name="Screen14a" component={Screen14a} />
      <Screen name="Screen14b" component={Screen14b} />
      <Screen name="Screen15" component={Screen15} />
      <Screen name="Screen17" component={Screen17} />
      <Screen name="Screen18" component={Screen18} />
      <Screen name="Screen19" component={Screen19} />
      <Screen name="Screen20" component={Screen20} />
      <Screen name="Screen21" component={Screen21} />
      <Screen name="Screen22" component={Screen22} />
      <Screen name="Screen23" component={Screen23} />
    </Navigator>
  );
}
