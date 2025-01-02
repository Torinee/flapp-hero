import styled, { css } from 'styled-components'

export const Header = {
    Container: styled.div`
        position: sticky;
        top: 0;
        left: 0;
        background: #1f1f1f;
        color: white;
        z-index: 2;

        > div {
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    `,
    Left: styled.div`
        display: flex;
        align-items: center;
    `,
    LeftItem: styled.div`
        font-weight: 500;
        padding: 0 30px;
        cursor: pointer;

        ${({ isHideOnMobile }) =>
            isHideOnMobile &&
            css`
                @media (max-width: 992px) {
                    display: none;
                }
            `}
    `,
    Logo: styled.div`
        cursor: pointer;
    `
}

export const Footer = {
    Container: styled.div`
        background: #1f1f1f;
        color: #dadada;
        font-size: 12px;
        padding: 30px 0;

        > div {
            display: flex;
            gap: 20px;
        }
    `,
    Left: styled.div`
        display: flex;
        align-items: center;
        gap: 20px;

        > img {
            width: 184px;
        }
    `,
    LeftSocial: styled.div`
        font-size: 40px;
        font-weight: 700;
        text-align: center;

        > div {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
        }
    `,
    Right: styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex: 1;
        gap: 20px;
    `,
    RightButton: styled.div`
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: space-between;
    `,
    RightMenu: styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 14px;
        font-weight: 500;
    `
}

export const Responsive = styled.div`
    background: white;

    @media (max-width: 1300px) {
        ${Footer.Container} {
            > div {
                flex-direction: column-reverse;
                align-items: center;
                gap: 40px;
            }
        }
        ${Footer.Right} {
            flex-direction: column;
        }
        ${Footer.RightMenu} {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
        }
    }
    @media (max-width: 992px) {
        ${Footer.Left} {
            flex-direction: column;
        }
        ${Footer.RightButton} {
            > img {
                width: 100px;
            }
        }
    }
`
