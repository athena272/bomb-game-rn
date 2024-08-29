import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";

export const StyledContainer = styled.View`
    flex: 1;
    padding: 20px;
    padding-top: ${getStatusBarHeight() + RFValue(20)}px;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const StyledIcon = styled(MaterialIcons)`
    font-size: ${RFValue(30)}px;
    margin-bottom: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.white};
`;

export const ScrollTextRules = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
`;

export const StyledTitle = styled.Text`
    font-size: ${RFValue(32)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    margin-left: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.white};
`;

export const StyledParagraph = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-left: ${RFValue(10)}px;
    margin-top: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.textLight};
`;

export const StyledNumberParagraph = styled.Text`
    font-weight: bold;
`;