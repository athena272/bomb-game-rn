import { Logo, StyledContainer } from "./styles"
import logoImg from '../../assets/logoDark.png'

export default function Disarmed() {
    return (
        <StyledContainer>
            <Logo source={logoImg} style={{ resizeMode: 'contain' }} />
        </StyledContainer>
    )
}