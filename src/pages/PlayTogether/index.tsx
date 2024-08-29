import { BombMessage, StyledContainer, StyledTitle } from "./styles";
import InputTimer from "../../components/InputTimer";

export default function PlayTogether() {
    return  (
        <StyledContainer>
            <StyledTitle>Bomb Game Dupla</StyledTitle>
            <InputTimer />
            <BombMessage>Mensagem de erro temporário!</BombMessage>
        </StyledContainer>
    )
}