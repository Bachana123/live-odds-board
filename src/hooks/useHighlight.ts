import { useRef, useState, useCallback } from "react";
import type { HighlightState, Odds } from "../types";

type TimerRefsType = Record<string, Record<keyof Odds, ReturnType<typeof setTimeout>>>

export function useHighlight() {
    const [highlight, setHighlight] = useState<HighlightState>({});
    const timers = useRef<TimerRefsType>({});

    const updateHighlight = useCallback((matchId: string, odds: HighlightState[string]) => {
        setHighlight((prev) => ({ ...prev, [matchId]: odds }));

        if (!timers.current[matchId]) {
            timers.current[matchId] = {} as TimerRefsType[string]
        }

        Object.keys(odds).forEach((key) => {
            if (timers.current[matchId][key as keyof Odds]) {
                clearTimeout(timers.current[matchId][key as keyof Odds])
            }

            timers.current[matchId][key as keyof Odds] = setTimeout(() => {
                setHighlight((prev) => {
                    const newHighlight = { ...prev };
                    delete newHighlight[matchId];
                    return newHighlight;
                });

                // clear data from timers ref as well
                delete timers.current[matchId][key as keyof Odds]
                if (!Object.keys(timers.current[matchId]).length) {
                    delete timers.current[matchId]
                }
            }, 1000);
        });
    }, [])

    return { highlight, updateHighlight };
}