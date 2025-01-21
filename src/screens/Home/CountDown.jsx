import useCountdown from '@/hooks/useCountdown'
import React, { useEffect, useState } from 'react'
import { Presale } from './Home.styled'

const CountDown = () => {
    const [privateSaleTime, setPrivateSaleTime] = useState('')
    const { days, hours, minutes, seconds } = useCountdown(privateSaleTime)

    const getPrivateSaleDate = async () => {
        const data = await fetch('https://api.flapphero.xyz/public').then(
            (res) => res.json()
        )
        if (data?.success) {
            setPrivateSaleTime(data.data.date_buy_token)
        }
    }

    useEffect(() => {
        getPrivateSaleDate()
    }, [])

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
