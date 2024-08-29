import { StyledContainer, StyledTitle } from "./styles";
import { ImageBackground } from "react-native";
import bombImg from '../../assets/bomba.png'

export default function PlayAlone() {
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
            </ImageBackground>
        </StyledContainer>
    )
}