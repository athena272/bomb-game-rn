// Defina o tipo das rotas e seus parâmetros
export type RootStackParamList = {
    Start: undefined
    Rules: undefined
    PlayAlone: undefined
    PlayTogether: undefined
    Disarmed: undefined
    Exploded: undefined
};

export type Question = {
    id: number;
    pergunta: string;
    resp: string;
};

export type ApiResponse = {
    questions: Question[];
};
