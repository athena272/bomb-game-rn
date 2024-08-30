import { useState } from "react";
import { Alert, ImageBackground } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import bombImg from '../../assets/bomba.png'
import { StyledContainer, StyledTitle, TextTimer, Timer, TipContainer, TipText, TipTitle } from "./styles";
import { RootStackParamList } from "../../types";
import PasswordInput from "../../components/PasswordInput";
import Button from "../../components/Button";
import BombService from "../../services/BombApp";

export default function PlayAlone() {
    const [started, setStarted] = useState(false);
    const [pin, setPin] = useState(["", "", ""]);
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("03");
    const [seconds, setSeconds] = useState("00");

    function handleStartBomb() {
        const diffTime = BombService.getDiffTime({ hours, seconds, minutes })
    }

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [intervalId, setIntervalId] = useState();

    const navigation = useNavigation<NavigationProp<RootStackParamList>>()

    function handleNavToStart() {
        navigation.navigate('Start')
    }

    function handleStartGame() {
        Alert.alert('Jogo começou!')
    }

    return (
        <StyledContainer>
            <StyledTitle>Bomb Game Solo</StyledTitle>
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
                    <TextTimer>
                        {'00'} : {'05'} : {'00'}
                    </TextTimer>
                </Timer>
            </ImageBackground>

            <TipContainer>
                <TipTitle>Sua dica:</TipTitle>
                <TipText>Dica vai estar aqui!</TipText>
            </TipContainer>

            <PasswordInput />
            <Button buttonText="Iniciar" handlePress={handleStartGame} />
            <Button buttonText="Página Inicial" handlePress={handleNavToStart} />
        </StyledContainer>
    )
}