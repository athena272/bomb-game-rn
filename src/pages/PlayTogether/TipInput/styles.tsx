import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const StyledContainer = styled.View`
  margin: 0 ${RFValue(45)}px;
`;

export const TipTitle = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const InputContainer = styled.View`
  width: ${RFValue(260)}px;
  height: ${RFValue(30)}px;
  border: ${RFValue(1)}px solid white;
  border-radius: ${RFValue(5)}px;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.TextInput.attrs({
    placeholderTextColor: "white",
})`
  width: 90%;
  font-size: ${RFValue(12)}px;
  color: white;
  font-family: ${({ theme }) => theme.fonts.regular};
`;