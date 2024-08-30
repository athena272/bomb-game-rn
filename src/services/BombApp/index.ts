import moment from "moment"
import { Dispatch, SetStateAction } from "react"
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
    intervalId: NodeJS.Timeout | null;
    navigation: NavigationProp<any>; // ou ajuste de acordo com sua navegação
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
    }
};

export default BombService