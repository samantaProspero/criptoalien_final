import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';
import theme from '../../global/styles/theme';


import { Container} from './styles';

export function ReturnButton(){
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  return(
    <Container>
      <AntDesign 
        name="leftcircleo"
        color={theme.colors.shape}
        size={40}
        onPress={goBack}
      />
    </Container>
  );
};