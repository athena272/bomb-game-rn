import { useRef } from 'react';
import { ImageBackground, Keyboard, TextInput } from 'react-native'
import bombImg from '../../assets/bomba.png'
import { InputContainer, StyledInput, TextTimer, Timer } from './styles'

export default function InputTimer() {
    const input1 = useRef<TextInput>(null);
    const input2 = useRef<TextInput>(null);
    const input3 = useRef<TextInput>(null);

    function secondsInput(value: string) {
        throw new Error('Function not implemented.');
    }

    return (
        <ImageBackground
            source={bombImg}
            resizeMode="cover"
            style={{
                marginTop: 50,
                minHeight: 130,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Timer>
                <InputContainer>
                    <StyledInput
                        keyboardType={'number-pad'}
                        maxLength={2}
                        placeholder='00'
                        placeholderTextColor={'#bbb'}
                        ref={input1}
                        onChangeText={(value) => {
                            value.length > 1 && input2.current?.focus()
                        }}
                    />
                </InputContainer>
                <TextTimer>:</TextTimer>
                <InputContainer>
                    <StyledInput
                        keyboardType={'number-pad'}
                        maxLength={2}
                        placeholder='00'
                        placeholderTextColor={'#bbb'}
                        ref={input2}
                        onChangeText={(value) => {
                            value.length > 1 && input3.current?.focus()
                        }}
                    />
                </InputContainer>
                <TextTimer>:</TextTimer>
                <InputContainer>
                    <StyledInput
                        keyboardType={'number-pad'}
                        maxLength={2}
                        placeholder='00'
                        placeholderTextColor={'#bbb'}
                        ref={input3}
                        onChangeText={(value) => {
                            value.length > 1 && Keyboard.dismiss()
                        }}
                    />
                </InputContainer>
            </Timer>
        </ImageBackground>
    )
}