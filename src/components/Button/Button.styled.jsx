import { css, styled } from 'styled-components'

export const ButtonContainer = styled.button`
    background: #ffcc00;
    height: 35px;
    display: flex;
    align-items: center;
    border-radius: 20px;
    padding: 5px;

    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    white-space: nowrap;

    > span {
        padding: 0 5px;
    }
    > svg {
        width: 23px;
        height: 23px;
    }

    ${({ size }) =>
        size === 'lg' &&
        css`
            height: 64px;
            padding: 10px;
            font-size: 24px;
            font-weight: 800;
            border-radius: 30px;

            > span {
                padding: 0 10px;
            }
            > svg {
                width: 50px;
                height: 50px;
            }

            @media (max-width: 992px) {
                height: 50px;
                padding: 8px;
                font-size: 24px;
                line-height: normal;
                border-radius: 24px;

                > span {
                    padding: 0 8px;
                }
                > svg {
                    width: 35px;
                    height: 35px;
                }
            }
        `}
    ${({ outline }) =>
        outline === 'white' &&
        css`
            background: white;
            color: black;
        `}
`
