import React from 'react'
import { Footer } from './MainLayout.styled'
import Container from '../Container'
import FacebookIcon from '@/images/FacebookIcon'
import InstagramIcon from '@/images/InstagramIcon'
import TwitterIcon from '@/images/TwitterIcon'
import YoutubeIcon from '@/images/YoutubeIcon'
import Button from '../Button'

const FooterContainer = () => {
    const goJoinNow = () =>
        (window.location.href = 'https://t.me/BotGameFlappHero_bot?start=0000')

    return (
        <Footer.Container>
            <Container>
                <Footer.Left>
                    <img src='/images/logo.png' />
                    <Footer.LeftSocial>
                        <span>
                            Join To Our <br />
                            Community
                        </span>

                        <div>
                            <FacebookIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                            <YoutubeIcon />
                        </div>
                    </Footer.LeftSocial>
                </Footer.Left>

                <Footer.Right>
                    <Footer.RightButton>
                        <img src='/images/home-footer.png' />
                        <Button size='lg' onClick={goJoinNow}>
                            JOIN NOW
                        </Button>
                    </Footer.RightButton>

                    <Footer.RightMenu>
                        <span>About us</span>
                        <span>Collection</span>
                        <span>Roadmap</span>
                        <span>Faqs</span>
                    </Footer.RightMenu>
                </Footer.Right>
            </Container>
        </Footer.Container>
    )
}

export default FooterContainer
