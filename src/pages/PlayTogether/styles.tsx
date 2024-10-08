import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const StyledContainer = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + RFValue(50)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const StyledTitle = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const Timer = styled.View`
  margin-bottom: 25px;
  margin-right: 15px;
`;

export const TextTimer = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const TipContainer = styled.View`
  margin: 0 ${RFValue(45)}px;
`;

export const TipTitle = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const TipText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textLight};
`;

export const BombMessage = styled.Text`
  font-size: ${RFValue(20)}px;
  padding-bottom: ${RFValue(10)}px;
  text-align: center;
  color: #ff0044;
`;