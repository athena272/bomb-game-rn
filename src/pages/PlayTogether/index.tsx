import { useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { BombMessage, StyledContainer, StyledTitle } from "./styles";
import { RootStackParamList } from "../../types";
import InputTimer from "../../components/PlayTogether/InputTimer";
import TipInput from "../../components/PlayTogether/TipInput";
import PasswordInput from "../../components/PlayTogether/PasswordInput";
import Button from "../../components/Button";
import BombService from "../../services/BombApp";

export default function PlayTogether() {
    //States da aplicação
    const [pin, setPin] = useState(["", "", ""]);
    const [started, setStarted] = useState(false);
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("01");
    const [seconds, setSeconds] = useState("00");
    const [message, setMessage] = useState("");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

    // Controla o inicio de jogo
    function handleStartGame() {
        BombService.bombActivationTogether({
            question,
            pin,
            hours,
            minutes,
            seconds,
            setMessage,
            setStarted,
            setPin,
            handleStartBomb,
            answer,
            setAnswer,
        });
    }

    // Controla a bomba
    function handleStartBomb() {
        const diffTime = BombService.getDiffTime({ hours, seconds, minutes });

        BombService.startCountdown({
            setSeconds,
            setMinutes,
            setHours,
            setStarted,
            diffTime,
            setIntervalId,
            intervalId,
            navigation,
        });
    }

    // Controle de navegação na tela
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()

    function handleNavToStart() {
        navigation.navigate('Start')
    }



    return (
        <StyledContainer>
            <StyledTitle>Bomb Game Dupla</StyledTitle>
            <InputTimer />
            {message ? <BombMessage>{message ? message : null}</BombMessage> : null}
            <TipInput
                started={started}
                question={question}
                setQuestion={setQuestion}
            />
            <PasswordInput />
            <Button buttonText="Iniciar" handlePress={handleStartGame} />
            <Button buttonText="Página Inicial" handlePress={handleNavToStart} />
        </StyledContainer>
    )
}