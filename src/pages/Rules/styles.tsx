import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";

export const StyledContainer = styled.View`
    flex: 1;
    padding: 20px;
    padding-top: ${getStatusBarHeight() + RFValue(20)}px;
    background-color: #131313;
`;

export const StyledIcon = styled(MaterialIcons)`
    font-size: ${RFValue(30)}px;
    margin-bottom: ${RFValue(20)}px;
    color: white;
`;

export const ScrollTextRules = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
`;

export const StyledTitle = styled.Text`
    font-size: ${RFValue(32)}px;
    font-family: sans-serif;
    margin-left: ${RFValue(10)}px;
    color: white;
`;

export const StyledParagraph = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: sans-serif;
    margin-left: ${RFValue(10)}px;
    margin-top: ${RFValue(15)}px;
    color: #bbb;
`;

export const StyledNumberParagraph = styled.Text`
    font-weight: bold;
`;