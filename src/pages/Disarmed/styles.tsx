import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const StyledContainer = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.black};
    padding-top: ${getStatusBarHeight() + RFValue(50)}px;
`;

export const Logo = styled.Image`
    width: ${RFValue(270)}px;
    height: ${RFValue(50)}px;
    margin: 0 auto;
`;

export const StyledTitle = styled.Text`
    color: white;
    margin-top: ${RFValue(70)}px;
    font-size: ${RFValue(32)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    text-align: center;
`;

export const SucessImg = styled.Image`
    width: ${RFValue(270)}px;
    height: ${RFValue(150)}px;
    margin: 0 auto;
    margin-top: ${RFValue(50)}px;
`