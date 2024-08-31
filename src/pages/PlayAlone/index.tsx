import { useEffect, useState } from "react";
import { ImageBackground } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import bombImg from '../../assets/bomba.png'
import { StyledContainer, StyledTitle, TextTimer, Timer, TipContainer, TipText, TipTitle } from "./styles";
import { RootStackParamList, ApiResponse, Question } from "../../types";
import PasswordInput from "../../components/PasswordInput";
import Button from "../../components/Button";
import BombService from "../../services/BombApp";
import api from "../../services/api/api";

export default function PlayAlone() {
    const [started, setStarted] = useState(false);
    const [pin, setPin] = useState(["", "", ""]);
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("01");
    const [seconds, setSeconds] = useState("00");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

    // Controla o inicio de jogo
    function handleStartGame() {
        BombService.bombStartGame({ setStarted, hours, minutes, seconds })
    }

    // Controla a bomba
    function handleStartBomb() {
        const diffTime = BombService.getDiffTime({ hours, seconds, minutes })

        BombService.startCountdown({
            setSeconds,
            setMinutes,
            setHours,
            setStarted,
            diffTime,
            setIntervalId,
            intervalId,
            navigation,
        })
    }

    //Controla o disarme da bomba
    function handleDisarmBomb() {
        BombService.disarmBomb({
            setStarted,
            answer,
            navigation,
            pin,
            setPin,
            intervalId,
        })
    }

    // manipular as questões e respostas
    async function fetchQuestion() {
        const randomNumber = Math.floor(Math.random() * 6) + 1;

        const { data } = await api.get<ApiResponse>("questions.json");
        // console.log("🚀 ~ fetchQuestion ~ data:", data)

        const randomQuestion = data.questions.find(question => question.id === randomNumber)

        if (randomQuestion) {
            setQuestion(randomQuestion?.pergunta)
            setAnswer(randomQuestion?.resp)
        }
    }

    // Controle de navegação na tela
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()

    function handleNavToStart() {
        navigation.navigate('Start')
    }

    useEffect(() => {
        if (started) {
            handleStartBomb();
        }
    }, [started]);

    useEffect(() => {
        fetchQuestion();
    }, []);

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
                        {hours} : {minutes} : {seconds}
                    </TextTimer>
                </Timer>
            </ImageBackground>

            {!started ? null : (
                <TipContainer>
                    <TipTitle>Sua dica:</TipTitle>
                    <TipText>{question}</TipText>
                </TipContainer>
            )}
            {/* <TipText>{answer}</TipText> */}

            <PasswordInput pin={pin} setPin={setPin} />
            {!started ? (
                <Button buttonText="Iniciar" handlePress={handleStartGame} />
            ) : (
                <Button buttonText="Desarmar" handlePress={handleDisarmBomb} />
            )}
            <Button buttonText="Página Inicial" handlePress={handleNavToStart} />
        </StyledContainer>
    )
}