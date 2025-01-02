import React from 'react'
import { Footer } from './MainLayout.styled'
import Container from '../Container'
import FacebookIcon from '@/images/FacebookIcon'
import InstagramIcon from '@/images/InstagramIcon'
import TwitterIcon from '@/images/TwitterIcon'
import YoutubeIcon from '@/images/YoutubeIcon'
import Button from '../Button'

const FooterContainer = () => {
    return (
        <Footer.Container>
            <Container>
                <Footer.Left>
                    <img src='/images/logo.svg' />
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
                        <Button size='lg'>JOIN NOW</Button>
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
