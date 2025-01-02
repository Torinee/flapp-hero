import React from 'react'
import { ButtonContainer } from './Button.styled'
import ArrowCircleIcon from '@/images/ArrowCricleIcon'

const Button = (props) => {
    const { size, outline, hideIcon, children, ...rest } = props

    return (
        <ButtonContainer size={size} outline={outline} {...rest}>
            <span>{children}</span> {!hideIcon && <ArrowCircleIcon />}
        </ButtonContainer>
    )
}

export default Button
