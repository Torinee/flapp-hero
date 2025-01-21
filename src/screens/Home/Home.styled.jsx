import styled, { css } from 'styled-components'

export const Title = styled.div`
    font-size: 48px;
    line-height: 53px;
    font-weight: 700;
    color: #625df5;

    @media (max-width: 992px) {
        font-size: 36px;
        line-height: 38px;
    }
`

export const Theme = {
    Container: styled.div`
        background: #232531;

        > div {
            display: flex;
            justify-content: center;
            gap: 30px;
        }

        @media (max-width: 992px) {
            > div {
                flex-direction: column-reverse;
                gap: 0;
            }
        }
    `,
    Left: styled.div`
        flex: 1;
        max-width: 700px;
    `,
    LeftImageWrapper: styled.div`
        position: relative;
        aspect-ratio: 620/541;

        > img {
            position: absolute;
            right: 0;
            bottom: -50px;
            width: 100%;
            height: 100%;
        }
    `,
    Right: styled.div`
        padding-top: 100px;
        padding-bottom: 50px;

        > h1 {
            font-size: 165px;
            line-height: 157px;
            font-weight: 900;
            color: white;
        }
        > div {
            display: flex;
            gap: 24px;
            margin-top: 20px;
        }

        @media (max-width: 992px) {
            padding-top: 50px;
            padding-bottom: 0;

            > h1 {
                font-size: 100px;
                line-height: 100px;
            }
            > div {
                flex-direction: column;
                align-items: start;
                gap: 10px;
            }
        }
    `
}

export const AboutUs = {
    Container: styled.div`
        margin-top: 150px;
        display: flex;
        align-items: center;
        gap: 30px;

        @media (max-width: 992px) {
            flex-direction: column;
            margin-top: 100px;
        }
    `,
    Left: styled.div`
        flex: 1;

        > p {
            font-size: 16px;
            line-height: 25px;
            margin-top: 10px;
        }
    `,
    Right: styled.div`
        flex: 1;
        aspect-ratio: 544/310;
        background: #232531;
        border-radius: 30px;
        position: relative;

        > img {
            width: calc(100% / 544 * 365);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        @media (max-width: 992px) {
            width: 100%;
        }
    `
}

export const Collection = {
    Container: styled.div`
        position: relative;
        margin-top: 200px;
        padding: 0 150px;

        @media (max-width: 1200px) {
            padding: 0 90px;
        }
        @media (max-width: 992px) {
            margin-top: 100px;
            padding: 0 30px;
        }
    `,
    ButtonLeft: styled.button`
        position: absolute;
        left: 40px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;

        > button {
            transform: rotate(180deg);
        }

        @media (max-width: 992px) {
            left: -10px;

            svg {
                width: 30px;
            }
        }
    `,
    ButtonRight: styled.button`
        position: absolute;
        right: 40px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;

        @media (max-width: 992px) {
            right: -10px;

            svg {
                width: 30px;
            }
        }
    `,
    Item: styled.div`
        display: flex;
        align-items: center;
        gap: 40px;

        > img {
            width: 323px;
        }

        @media (max-width: 992px) {
            flex-direction: column-reverse;
            gap: 20px;

            > img {
                width: 240px;
            }
        }
    `,
    Content: styled.div`
        > p {
            color: #232531;
            font-size: 24px;
            font-weight: 800;
        }
        > h2 {
            color: #ff0000;
            font-size: 48px;
            font-weight: 800;
        }
        > span {
            font-size: 14px;
            line-height: 21px;
        }

        @media (max-width: 992px) {
            \ > p {
                font-size: 20px;
            }
            > h2 {
                font-size: 40px;
            }
        }
    `
}

export const Presale = {
    Container: styled.div`
        margin-top: 200px;

        > div {
            display: flex;
            align-items: center;
            justify-content: space-around;
            background: #232531;
            border-radius: 30px;
        }

        @media (max-width: 992px) {
            margin-top: 100px;

            > div {
                border-radius: 0;
            }
        }
    `,
    Image: styled.div`
        flex: 1;
        max-width: 290px;

        > img {
            width: 100%;
        }

        @media (max-width: 992px) {
            display: none;
        }
    `,
    Content: styled.div`
        padding: 70px 0;
        text-align: center;

        > h2 {
            color: #ffcc00;
            font-size: 32px;
            font-weight: 800;
        }
        > p {
            color: white;
            font-size: 16px;
            font-weight: 700;
            margin-top: 10px;
        }

        @media (max-width: 992px) {
            > h2 {
                font-size: 28px;
            }
        }
    `,
    CountDown: styled.div`
        background: linear-gradient(to bottom, #ffffff2e, #ffffff8a);
        border-radius: 15px;
        border: 1px solid #ffffff8a;
        padding: 10px 20px;
        margin: 40px 0;
        font-size: 40px;
        font-weight: 700;
        color: white;

        display: inline-flex;

        > div {
            width: 85px;
            flex-direction: column;
            gap: 16px;

            > p {
                position: relative;
                left: 50%;
                transform: translateX(-50%);
                font-size: 20px;
                font-weight: 500;
            }
        }

        @media (max-width: 992px) {
            font-size: 30px;

            > div {
                width: 65px;
                > p {
                    font-size: 16px;
                }
            }
        }
    `
}

export const Play = {
    Container: styled.div`
        margin-top: 150px;
        display: flex;
        align-items: center;
        gap: 50px;

        @media (max-width: 992px) {
            margin-top: 100px;
            flex-direction: column;
            text-align: center;
        }
    `,
    Left: styled.div`
        flex: 1;

        @media (max-width: 992px) {
            width: 100%;
        }
    `,
    LeftBox: styled.div`
        background: #232531;
        color: white;
        padding: 30px;
        border-radius: 30px;
        margin-top: 30px;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        font-size: 48px;
        line-height: 57px;
        font-weight: 800;

        @media (max-width: 992px) {
            font-size: 30px;
            line-height: normal;
        }
    `,
    Right: styled.div`
        flex: 1;

        > div {
            aspect-ratio: 464/418;
            background: #625df5;
            border-radius: 30px;
            position: relative;

            > img {
                width: 80%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }

        @media (max-width: 992px) {
            width: 100%;
        }
    `
}

export const RoadMap = {
    Container: styled.div`
        margin-top: 150px;
        background: #232531;

        > div {
            display: flex;
        }

        @media (max-width: 992px) {
            margin-top: 100px;

            > div {
                flex-direction: column-reverse;
            }
        }
    `,
    Title: styled.div`
        font-size: 91px;
        font-weight: 800;
        color: white;
        text-align: center;

        @media (max-width: 1200px) {
            font-size: 60px;
        }
        @media (max-width: 992px) {
            font-size: 46px;
        }
    `,
    Left: styled.div`
        width: 50%;

        @media (max-width: 992px) {
            width: 100%;
        }
    `,
    LeftImage: styled.div`
        position: relative;
        max-width: 550px;
        bottom: -10%;
        left: 50%;
        transform: translateX(-50%);

        > img {
            width: 100%;
        }

        @media (max-width: 992px) {
            bottom: -50px;
        }
    `,
    Right: styled.div`
        position: relative;
        width: 50%;
        display: flex;
        align-items: center;

        @media (max-width: 992px) {
            width: 100%;
            flex-direction: column;
            gap: 30px;
            padding-top: 50px;

            > div {
                width: 100%;
            }
        }
    `,
    RightBox: styled.div`
        background: white;
        border-radius: 30px;
        padding: 20px;
        height: 100%;

        > p {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 10px;
        }
        > span {
            font-size: 14px;
        }

        @media (max-width: 992px) {
            > p {
                font-size: 22px;
            }
        }
    `
}

export const FAQ = {
    Container: styled.div`
        padding: 100px 0;
    `,
    Wrapper: styled.div`
        display: flex;
        gap: 60px;
        margin-top: 30px;

        @media (max-width: 992px) {
            flex-direction: column-reverse;
            gap: 30px;
            margin-top: 20px;
        }
    `,
    Left: styled.div`
        flex: 1;
    `,
    LeftImageWrapper: styled.div`
        aspect-ratio: 535/396;
        background: #625df5;
        border-radius: 30px;
        position: relative;

        > img {
            position: absolute;
            left: 30px;
            bottom: -50px;
            width: 100%;
        }
    `,
    Right: styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 10px;
    `,
    Question: styled.div`
        background: #232531;
        color: white;
        border-radius: 30px;
        padding: 20px 30px;
        font-size: 16px;
        cursor: pointer;

        > p {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            font-weight: 700;
            font-size: 16px;

            > svg {
                flex: 0 0 20px;
            }
        }
        > div {
            > p {
                padding-top: 10px;
                font-size: 12px;
                line-height: 20px;
            }
            > p svg {
                transform: rotate(180deg);
            }
        }

        ${({ isCollapse }) =>
            isCollapse &&
            css`
                > p svg {
                    transform: rotate(180deg);
                }
            `}

        @media (max-width: 992px) {
            border-radius: 20px;
            padding: 10px 20px;
        }
    `
}
