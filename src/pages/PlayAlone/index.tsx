import { Alert, ImageBackground } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import bombImg from '../../assets/bomba.png'
import { StyledContainer, StyledTitle, TextTimer, Timer, TipContainer, TipText, TipTitle } from "./styles";
import { RootStackParamList } from "../../types";
import PasswordInput from "../../components/PasswordInput";
import Button from "../../components/Button";

export default function PlayAlone() {
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
            <Button buttonText="Iniciar" handlePress={handleStartGame}/>
            <Button buttonText="Página Inicial" handlePress={handleNavToStart}/>
        </StyledContainer>
    )
}