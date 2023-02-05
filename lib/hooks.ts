import { useFrame } from "@react-three/fiber"
import { useState } from "react"
import { cubic, linear } from "./functions"

export const useNumberManager = (value: number, seconds: number, smoothing:'linear'|'cubic'='linear'): number => {
    let projected = value // pass by reference

    const [current, setCurrent] = useState(value)
    const [animationState, setAnimationState] = useState({
        animating: false,
        startTime: 0,
        startValue: 0,
        difference: 0,
        // second copy of projected to cancel current animation if value is changed
        interruptTracker: projected
    })

    let smoothingFunction = smoothing=='linear' ? linear : cubic

    useFrame(({ clock }) => {
        if ( animationState.animating ) {
            // check if animation is being interrupted
            if ( animationState.interruptTracker !== projected ) {
                setAnimationState({
                    animating: true,
                    startTime: clock.getElapsedTime(),
                    startValue: current,
                    difference: projected - current,
                    interruptTracker: projected
                })
                return
            }

            // animation running
            const time = clock.getElapsedTime()
            let animationTime = time - animationState.startTime
            if ( animationTime >= seconds ) {
                setAnimationState({
                    animating: false,
                    startTime: 0,
                    startValue: 0,
                    difference: 0,
                    interruptTracker: animationState.interruptTracker
                })
                setCurrent(projected)
            } else {
                const progress = smoothingFunction(animationTime/seconds)
                setCurrent(animationState.difference * progress + animationState.startValue)
            }

        } else {
            // animation not running
            if ( current !== projected ) {
                setAnimationState({
                    animating: true,
                    startTime: clock.getElapsedTime(),
                    startValue: current,
                    difference: projected - current,
                    interruptTracker: projected
                })
            }
        }
    })

    return current
}
