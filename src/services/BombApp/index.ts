import { Dispatch, SetStateAction } from "react"
import { Vibration } from "react-native"
import moment from "moment"
import { NavigationProp } from "@react-navigation/native"

type BombServiceProps = {
    hours: string,
    minutes: string,
    seconds: string
}

type StartCountdownProps = {
    setSeconds: Dispatch<SetStateAction<string>>;
    setMinutes: Dispatch<SetStateAction<string>>;
    setHours: Dispatch<SetStateAction<string>>;
    setStarted: Dispatch<SetStateAction<boolean>>;
    diffTime: number;
    setIntervalId: Dispatch<SetStateAction<NodeJS.Timeout | null>>;
    intervalId: NodeJS.Timeout | null
    navigation: NavigationProp<any> // ou ajuste de acordo com sua navegação
}

type BombStartGameProps = {
    setStarted: Dispatch<SetStateAction<boolean>>
    hours: string
    minutes: string
    seconds: string
}


type BombDisarmBombrops = {
    setStarted: Dispatch<SetStateAction<boolean>>
    answer: string
    navigation: NavigationProp<any>
    pin: string[]
    setPin: Dispatch<SetStateAction<string[]>>
    intervalId: NodeJS.Timeout | null
}

const BombService = {
    getDiffTime: ({ hours, minutes, seconds }: BombServiceProps) => {
        const explodeTime = moment();
        let secondsMoment = seconds.length >= 1 ? seconds : 0;
        let minutesMoment = minutes.length >= 1 ? minutes : 0;
        let hoursMoment = hours.length >= 1 ? hours : 0;

        explodeTime
            .add(secondsMoment, "seconds")
            .add(minutesMoment, "minutes")
            .add(hoursMoment, "hours");

        const currentTime = moment();

        return explodeTime.unix() - currentTime.unix();
    },

    startCountdown: ({
        setSeconds,
        setMinutes,
        setHours,
        setStarted,
        diffTime,
        setIntervalId,
        intervalId,
        navigation,
    }: StartCountdownProps) => {
        let duration = moment.duration(diffTime * 1000);
        const interval = 1000;

        if (diffTime <= 0) return;

        const id = setInterval(() => {
            duration = moment.duration(duration.asMilliseconds() - interval);

            const hoursDigits = duration.hours().toString().padStart(2, "0");
            const minutesDigits = duration.minutes().toString().padStart(2, "0");
            const secondsDigits = duration.seconds().toString().padStart(2, "0");

            const timeEnded =
                hoursDigits === "00" &&
                minutesDigits === "00" &&
                secondsDigits === "00";

            if (timeEnded) {
                if (intervalId) {
                    clearInterval(intervalId);
                }
                setStarted(false);
                navigation.navigate("Exploded");
            }

            setHours(hoursDigits);
            setMinutes(minutesDigits);
            setSeconds(secondsDigits);
        }, interval);

        setIntervalId(id);

        return null;
    },
    bombStartGame: ({ setStarted, hours, minutes, seconds }: BombStartGameProps) => {
        if (hours.length > 0 || minutes.length > 0 || seconds.length > 0) {
            setStarted(true);
        }
    },

    disarmBomb: ({ setStarted, answer, navigation, pin, setPin, intervalId }: BombDisarmBombrops) => {
        if (pin.join("") === answer) {
            if (intervalId) {
                clearInterval(intervalId);
            }
            setStarted(false);
            navigation.navigate("Disarmed");

            return;
        }

        setPin(["", "", ""]);

        Vibration.vibrate(1000);

        return;
    },
    bombActivationTogether: ({
        question,
        pin,
        hours,
        minutes,
        seconds,
        setMessage,
        setStarted,
        setPin,
        handleStartBomb,
        setAnswer,
    }) => {
        if (question.length < 1) {
            setMessage("Você precisa dar uma dica!");
            return;
        }

        if (pin.join("").length < 3) {
            setMessage("Senha invalida, complete ela");
            return;
        }

        let timeIsSet = false;

        if (hours.length > 0 || minutes.length > 0 || seconds.length > 0) {
            setStarted(true);
            timeIsSet = true;
            setMessage("");
            handleStartBomb();
            setAnswer(pin.join(""));
            setPin(["", "", ""]);
        }

        if (!timeIsSet) {
            setMessage("Timer invalido, coloque um tempo");
            return;
        }
    }
};

export default BombService