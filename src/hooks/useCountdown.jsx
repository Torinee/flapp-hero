import { useState, useEffect } from 'react'

const useCountdown = (countdownTime) => {
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    })

    const padZero = (number) => String(number).padStart(2, '0')

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime()
            const target = new Date(countdownTime).getTime()
            const difference = target - now

            if (difference > 0) {
                const days = padZero(
                    Math.floor(difference / (1000 * 60 * 60 * 24))
                )
                const hours = padZero(
                    Math.floor((difference / (1000 * 60 * 60)) % 24)
                )
                const minutes = padZero(
                    Math.floor((difference / (1000 * 60)) % 60)
                )
                const seconds = padZero(Math.floor((difference / 1000) % 60))

                setTimeLeft({ days, hours, minutes, seconds })
            } else {
                setTimeLeft({
                    days: '00',
                    hours: '00',
                    minutes: '00',
                    seconds: '00'
                })
            }
        }

        const timer = setInterval(calculateTimeLeft, 1000)

        return () => clearInterval(timer)
    }, [countdownTime])

    return timeLeft
}

export default useCountdown
