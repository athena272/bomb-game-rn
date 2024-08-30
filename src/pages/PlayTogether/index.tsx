import { BombMessage, StyledContainer, StyledTitle } from "./styles";
import InputTimer from "../../components/PlayTogether/InputTimer";
import TipInput from "./TipInput";

export default function PlayTogether() {
    return  (
        <StyledContainer>
            <StyledTitle>Bomb Game Dupla</StyledTitle>
            <InputTimer />
            <BombMessage>Mensagem de erro temporário!</BombMessage>
            <TipInput />
        </StyledContainer>
    )
}