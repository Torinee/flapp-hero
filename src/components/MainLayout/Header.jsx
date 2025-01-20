import React from 'react'

import { Header } from './MainLayout.styled'
import Container from '../Container'
import Button from '../Button'

const HeaderContainer = () => {
    const scrollToElement = (id) => {
        const element = document.getElementById(id)
        const offset = 100
        const elementPosition =
            element.getBoundingClientRect().top + window.scrollY

        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
        })
    }

    const goJoinNow = () =>
        (window.location.href = 'https://t.me/BotGameFlappHero_bot?start=0000')
    const goPrivateSale = () =>
        (window.location.href = 'https://wallet.flapphero.xyz/')

    return (
        <Header.Container>
            <Container>
                <Header.Left>
                    <Header.Logo>
                        <img src='./images/logo.png' />
                    </Header.Logo>

                    <Header.LeftItem
                        onClick={() => scrollToElement('about-us')}
                        isHideOnMobile
                    >
                        About us
                    </Header.LeftItem>
                    <Header.LeftItem
                        onClick={() => scrollToElement('collection')}
                        isHideOnMobile
                    >
                        Collection
                    </Header.LeftItem>
                    <Header.LeftItem
                        onClick={() => scrollToElement('roadmap')}
                        isHideOnMobile
                    >
                        Roadmap
                    </Header.LeftItem>
                    <Header.LeftItem
                        onClick={() => scrollToElement('faqs')}
                        isHideOnMobile
                    >
                        Faqs
                    </Header.LeftItem>
                </Header.Left>

                <Header.Right>
                    <Button outline='white' hideIcon onClick={goPrivateSale}>
                        Private Sale
                    </Button>
                    <Button onClick={goJoinNow}>JOIN NOW</Button>
                </Header.Right>
            </Container>
        </Header.Container>
    )
}

export default HeaderContainer
