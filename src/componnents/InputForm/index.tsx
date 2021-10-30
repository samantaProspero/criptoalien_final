import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { Input } from '../Input';

import { Container, Error } from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  width?: number | 35;
  height?: number | 35;
  // error: string;
}

export function InputForm({
  control,
  name,
  width, 
  height,
  // error,
  ...rest
}: Props){
  return(
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value }}) => (
          <Input
          style={{width, height}} 
     
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />
      {/* {error && <Error>{ error }</Error>} */}
    </Container>
  );
}