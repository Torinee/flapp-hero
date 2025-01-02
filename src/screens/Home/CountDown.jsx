import useCountdown from '@/hooks/useCountdown'
import React from 'react'
import { Presale } from './Home.styled'

const CountDown = () => {
    const countdownTime = '2025-01-05T00:00:00' // Target date and time
    const { days, hours, minutes, seconds } = useCountdown(countdownTime)

    return (
        <Presale.CountDown>
            <div>
                {days}
                <p>Days</p>
            </div>
            :
            <div>
                {hours}
                <p>Hours</p>
            </div>
            :
            <div>
                {minutes}
                <p>Minutes</p>
            </div>
            :
            <div>
                {seconds}
                <p>Seconds</p>
            </div>
        </Presale.CountDown>
    )
}

export default CountDown
