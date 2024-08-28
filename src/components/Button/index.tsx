import { StyledButton, ButtonContent } from "./styles";

type ButtonProps = {
    buttonText: string
    handlePress: () => void
}

export default function Button({ buttonText, handlePress }: ButtonProps) {
    return (
        <StyledButton activeOpacity={0.95} onPress={handlePress}>
            <ButtonContent>{buttonText}</ButtonContent>
        </StyledButton>
    )
}