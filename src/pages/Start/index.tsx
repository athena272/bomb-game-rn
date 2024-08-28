import { Alert } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import { StyledContainer, StyledLogo, StyledTitle, StyledSubTitle, Rules } from "./styles";
import Button from "../../components/Button";

export default function Start() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()

    function handleNavToPlayAlone() {
        Alert.alert("Botão clicado 1");
    }

    function handleNavToPlayTogether() {
        Alert.alert("Botão clicado 2");
    }

    function handleNavToRules() {
        navigation.navigate('Rules')
    }

    return (
        <StyledContainer>
            <StyledLogo
                source={require("../../assets/logoDark.png")}
                style={{ resizeMode: "contain" }}
            />
            <StyledTitle>Bem-vindo ao {'\n'} Bomb Game</StyledTitle>
            <StyledSubTitle>Escolha um modo de jogo.</StyledSubTitle>
            <Button
                buttonText={"Jogar Solo"}
                handlePress={handleNavToPlayAlone}
            />
            <Button
                buttonText={"Jogar Em Dupla"}
                handlePress={handleNavToPlayTogether}
            />
            <Rules onPress={handleNavToRules}>Ver as regras do jogo</Rules>
        </StyledContainer>
    );
}