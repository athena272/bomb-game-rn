import { Vibration } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import { Container, FailedImg, Logo, Title } from "./styles";
import logoImg from '../../assets/logoLightRed.png'
import failedImg from '../../assets/bomba_explodiu.png'
import Button from "../../components/Button";

export default function Exploded() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()

    function handleNavToStart() {
        navigation.navigate('Start')
    }

    setTimeout(function () {
        Vibration.vibrate(4 * 1000);
    }, 500);

    return (
        <Container>
            <Logo source={logoImg} style={{ resizeMode: "contain" }} />
            <Title>Você falhou, a {"\n"} bomba explodiu!</Title>
            <FailedImg source={failedImg} style={{ resizeMode: "contain" }} />
            <Button
                buttonText="Página incial"
                handlePress={handleNavToStart}
            />
        </Container>
    )
}