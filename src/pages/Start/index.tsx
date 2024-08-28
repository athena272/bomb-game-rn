import { StyledContainer, StyledLogo, StyledTitle } from "./styles";

export default function Start() {
    return (
        <StyledContainer>
            <StyledLogo
                source={require("../../assets/logoDark.png")}
                style={{ resizeMode: "contain" }}
            />
            <StyledTitle>Bem-vindo ao {'\n'} Bomb Game</StyledTitle>
        </StyledContainer>
    );
}