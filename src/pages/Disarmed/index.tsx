import { NavigationProp, useNavigation } from "@react-navigation/native"
import { RootStackParamList } from "../../types"
import { Logo, StyledContainer, StyledTitle, SucessImg } from "./styles"
import logoImg from '../../assets/logoDark.png'
import successImg from '../../assets/bomba_cortada_matrix.png'
import Button from "../../components/Button"

export default function Disarmed() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()

    function handleNavToStart() {
        navigation.navigate('Start')
    }

    return (
        <StyledContainer>
            <Logo source={logoImg} style={{ resizeMode: 'contain' }} />
            <StyledTitle>Parabéns!!!{"\n"}Você desarmou a bomba</StyledTitle>
            <SucessImg source={successImg} style={{ resizeMode: 'contain' }} />
            <Button
                buttonText="Página incial"
                handlePress={handleNavToStart}
            />
        </StyledContainer>
    )
}