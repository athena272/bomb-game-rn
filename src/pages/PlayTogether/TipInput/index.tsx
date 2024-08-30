import { StyledContainer, TipTitle } from "../styles";
import { InputContainer, StyledInput } from "./styles";

export default function TipInput() {
    return (
        <StyledContainer>
            <TipTitle>Dica de senha:</TipTitle>
            <InputContainer>
                <StyledInput
                    placeholder="Dica para a sua dupla"
                />
            </InputContainer>
        </StyledContainer>
    )
}