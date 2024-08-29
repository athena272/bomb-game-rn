import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { TextInput, TextInputProps } from "react-native";
import React from "react";

export const Timer = styled.View`
  margin-bottom: ${RFValue(25)}px;
  margin-right: ${RFValue(15)}px;
  flex-direction: row;
`;

export const TextTimer = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  margin: 0px ${RFValue(5)}px;
`;

export const InputContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled(
    React.forwardRef<TextInput, TextInputProps>((props, ref) => (
        <TextInput ref={ref} {...props} />
    ))
)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  width: 100%;
`;