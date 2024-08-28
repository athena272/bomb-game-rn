import { StyledContainer, StyledLogo, StyledTitle, StyledSubTitle, Rules } from "./styles";
import Button from "../../components/Button";
import { Alert } from "react-native";

export default function Start() {
    function handleNavToPlayAlone() {
        Alert.alert("Botão clicado 1");
    }

    function handleNavToPlayTogether() {
        Alert.alert("Botão clicado 2");
    }

    function handleNavToRules() {
        Alert.alert("Rules clicado!")
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