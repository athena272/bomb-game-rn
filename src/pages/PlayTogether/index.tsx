import { Alert } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { BombMessage, StyledContainer, StyledTitle } from "./styles";
import { RootStackParamList } from "../../types";
import InputTimer from "../../components/PlayTogether/InputTimer";
import TipInput from "../../components/PlayTogether/TipInput";
import PasswordInput from "../../components/PlayTogether/PasswordInput";
import Button from "../../components/Button";

export default function PlayTogether() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()

    function handleNavToStart() {
        navigation.navigate('Start')
    }

    function handleStartGame() {
        Alert.alert('Jogo começou!')
    }

    return (
        <StyledContainer>
            <StyledTitle>Bomb Game Dupla</StyledTitle>
            <InputTimer />
            <BombMessage>Mensagem de erro temporário!</BombMessage>
            <TipInput />
            <PasswordInput />
            <Button buttonText="Iniciar" handlePress={handleStartGame} />
            <Button buttonText="Página Inicial" handlePress={handleNavToStart} />
        </StyledContainer>
    )
}