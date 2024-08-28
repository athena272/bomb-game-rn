import { StyledContainer, StyledLogo, StyledTitle, StyledSubTitle } from "./styles";

export default function Start() {
    return (
        <StyledContainer>
            <StyledLogo
                source={require("../../assets/logoDark.png")}
                style={{ resizeMode: "contain" }}
            />
            <StyledTitle>Bem-vindo ao {'\n'} Bomb Game</StyledTitle>
            <StyledSubTitle>Escolha um modo de jogo.</StyledSubTitle>
        </StyledContainer>
    );
}