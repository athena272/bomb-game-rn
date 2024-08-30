import { useRef } from "react";
import { Keyboard, TextInput } from "react-native";
import { InputContainer, StyledContainer, StyledInput } from "./styles";

export default function PasswordInput() {
    const input1 = useRef<TextInput>(null);
    const input2 = useRef<TextInput>(null);
    const input3 = useRef<TextInput>(null);
    
    return (
        <StyledContainer>
            <InputContainer>
                <StyledInput
                    keyboardType={"number-pad"}
                    maxLength={1}
                    ref={input1}
                    onChangeText={(value) => {
                        value && input2.current?.focus()
                    }}
                />
            </InputContainer>
            <InputContainer>
                <StyledInput
                    keyboardType={"number-pad"}
                    maxLength={1}
                    ref={input2}
                    onChangeText={(value) => {
                        value && input3.current?.focus()
                    }}
                />
            </InputContainer>
            <InputContainer>
                <StyledInput
                    keyboardType={"number-pad"}
                    maxLength={1}
                    ref={input3}
                    onChangeText={(value) => {
                        Keyboard.dismiss()
                    }}
                />
            </InputContainer>
        </StyledContainer>
    )
}