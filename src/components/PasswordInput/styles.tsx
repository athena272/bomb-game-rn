import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { TextInputProps, TextInput } from "react-native";
import React from "react";

interface StyledInputProps extends TextInputProps {
  abled?: boolean
}

export const StyledContainer = styled.View`
    margin: ${RFValue(50)}px ${RFValue(30)}px;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
`;

export const InputContainer = styled.View`
  border: 1px solid white;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

// Encaminha o `ref` corretamente para o TextInput
export const StyledInput = styled(
  React.forwardRef<TextInput, StyledInputProps>(({ abled, ...rest }, ref) => (
    <TextInput ref={ref} {...rest} />
  ))
)`
  font-size: ${RFValue(30)}px;
  padding: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  border-radius: ${RFValue(5)}px;
  width: 100%;
  background-color: ${({ abled }) => abled === false ? "#9999998c" : "transparent"};
`;