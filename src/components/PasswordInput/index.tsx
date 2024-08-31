import { useRef, Dispatch, SetStateAction } from "react";
import { InputContainer, StyledContainer, StyledInput } from "./styles";
import { Keyboard, TextInput } from "react-native";

type PasswordInputProps = {
    pin: string[];
    setPin: Dispatch<SetStateAction<string[]>>;
}

export default function PasswordInput({ pin, setPin }: PasswordInputProps) {
    const input1 = useRef<TextInput>(null);
    const input2 = useRef<TextInput>(null);
    const input3 = useRef<TextInput>(null);

    const handlePinChange = (value: string, index: number) => {
        const updatedPin = [...pin];
        updatedPin[index] = value;
        setPin(updatedPin);
    };

    return (
        <StyledContainer>
            <InputContainer>
                <StyledInput
                    keyboardType={"number-pad"}
                    maxLength={1}
                    ref={input1}
                    onChangeText={(value) => {
                        handlePinChange(value, 0);
                        value && input2.current?.focus();
                    }}
                />
            </InputContainer>
            <InputContainer>
                <StyledInput
                    keyboardType={"number-pad"}
                    maxLength={1}
                    ref={input2}
                    onChangeText={(value) => {
                        handlePinChange(value, 1);
                        value && input3.current?.focus();
                    }}
                />
            </InputContainer>
            <InputContainer>
                <StyledInput
                    keyboardType={"number-pad"}
                    maxLength={1}
                    ref={input3}
                    onChangeText={(value) => {
                        handlePinChange(value, 2);
                        Keyboard.dismiss();
                    }}
                />
            </InputContainer>
        </StyledContainer>
    )
}

