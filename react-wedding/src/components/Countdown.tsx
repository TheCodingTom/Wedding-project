import React, { useState, useRef, useEffect } from "react";

const Countdown: React.FC = () => {
    const Ref = useRef<number | null>(null);
    const [timer, setTimer] = useState<string>("00:00:00");

    const getTimeRemaining = (e: Date) => {
        const total = Date.parse(e.toString()) - Date.parse(new Date().toString());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        return {
            total,
            days,
            hours,
            minutes,
            seconds,
        };
    };

    const startTimer = (e: Date) => {
        let { total, days, hours, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                `${days}d ${hours > 9 ? hours : "0" + hours}:` +
                `${minutes > 9 ? minutes : "0" + minutes}:` +
                `${seconds > 9 ? seconds : "0" + seconds}`
            );
        }
    };

    const clearTimer = (e: Date) => {
        if (Ref.current) clearInterval(Ref.current);
        const id = window.setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };

    const getDeadTime = (): Date => {
        return new Date("2025-08-30T00:00:00");
    };

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);



    return (
        <div style={{ textAlign: "center", margin: "auto" }}>
            <h2 className="timer">Countdown: {timer}</h2>
        </div>
    );
};

export default Countdown;
