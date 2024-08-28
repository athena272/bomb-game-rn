import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import { ScrollTextRules, StyledContainer, StyledIcon, StyledNumberParagraph, StyledParagraph, StyledTitle } from "./styles";

export default function Rules() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()

    function handleNavToStart() {
        navigation.navigate('Start')
    }

    return (
        <StyledContainer>
            <StyledIcon name="arrow-back-ios" onPress={handleNavToStart} />
            <ScrollTextRules>
                <StyledTitle>Jogando Solo</StyledTitle>
                {/* Primeiro paragráfo */}
                <StyledParagraph>
                    <StyledNumberParagraph>1 - </StyledNumberParagraph>
                    Você vai receber uma dica da senha, que será uma conta matemática,
                    tendo um tempo fixo de 5 minutos para resolver e desarmar a bomba
                </StyledParagraph>
                {/* Segundo paragráfo */}
                <StyledParagraph>
                    <StyledNumberParagraph>2 - </StyledNumberParagraph>
                    Toda vez que você errar, o seu aparelho vai vibrar e os campos de
                    senha serão limpos. Se você acertar, será enviado para uma página de
                    sucesso, se errar, será enviado para uma página de falha.
                </StyledParagraph>

                <StyledTitle style={{ marginTop: 30 }}>Jogando Em Dupla</StyledTitle>
                {/* Primeiro paragráfo */}
                <StyledParagraph>
                    <StyledNumberParagraph>1 - </StyledNumberParagraph>
                    Para jogar esse jogo, precisa de um parceiro, a pessoa 01 vai colocar:
                    O tempo da bomba, uma dica de senha e a senha.
                </StyledParagraph>
                {/* Segundo paragráfo */}
                <StyledParagraph>
                    <StyledNumberParagraph>2 - </StyledNumberParagraph>
                    Assim que ela preencher tudo ela deve clicar em "iniciar" e depois
                    disso vai ser iniciada a contagem. Se você errar, o celular vai vibrar
                    indicando o erro.
                </StyledParagraph>
                {/* Terceiro paragráfo */}
                <StyledParagraph style={{ marginBottom: 20 }}>
                    <StyledNumberParagraph>3 - </StyledNumberParagraph>
                    Se acertar vocề vai ser enviado para uma página de sucesso, se errar,
                    vai ser enviado para uma página de fracasso, terminando assim o jogo.
                </StyledParagraph>
            </ScrollTextRules>
        </StyledContainer>
    )
}