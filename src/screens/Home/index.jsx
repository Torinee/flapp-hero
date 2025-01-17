import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

import {
    AboutUs,
    Collection,
    FAQ,
    Play,
    Presale,
    RoadMap,
    Theme,
    Title
} from './Home.styled'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Question from './Question'
import CountDown from './CountDown'
import ArrowCircleIcon from '@/images/ArrowCricleIcon'

import { useGlobalContext } from '@/context/GlobalContext'

const Home = () => {
    const { t, isMobile } = useGlobalContext()
    const prevButtonRef = useRef(null)
    const nextButtonRef = useRef(null)
    const swiperRef = useRef(null)

    const getImage = (imageName) => `./images/${imageName}.png`

    return (
        <>
            <Theme.Container>
                <Container>
                    <Theme.Left>
                        <Theme.LeftImageWrapper>
                            <img src={getImage('home-theme-1')} />
                        </Theme.LeftImageWrapper>
                    </Theme.Left>

                    <Theme.Right>
                        <h1>
                            NFT <br /> WAR
                        </h1>

                        <div>
                            <Button size='lg'>JOIN NOW</Button>
                            <Button size='lg' outline='white' hideIcon>
                                WHITEPAPER
                            </Button>
                        </div>
                    </Theme.Right>
                </Container>
            </Theme.Container>

            <Container>
                <AboutUs.Container>
                    <AboutUs.Left>
                        <Title>Hey all, it's really me, WAR</Title>

                        <p>
                            Dive into a world where the serene and peaceful War
                            have decided to shake thing up. Each NFT WAR is a
                            digital masterpiece, hand-crafted to showcase the
                            spirit of rebellion and individuality. This
                            collection features 10,000 unique War, each with its
                            own distinctive traits.
                        </p>
                    </AboutUs.Left>

                    <AboutUs.Right>
                        <img src={getImage('home-theme-2')} />
                    </AboutUs.Right>
                </AboutUs.Container>
            </Container>

            <Container>
                <Collection.Container>
                    <Collection.ButtonLeft>
                        <button ref={prevButtonRef}>
                            <ArrowCircleIcon
                                fillColor='#7A7A7A'
                                arrowColor='white'
                                width={40}
                            />
                        </button>
                    </Collection.ButtonLeft>
                    <Collection.ButtonRight>
                        <button ref={nextButtonRef}>
                            <ArrowCircleIcon
                                fillColor='#7A7A7A'
                                arrowColor='white'
                                width={40}
                            />
                        </button>
                    </Collection.ButtonRight>

                    <Swiper
                        ref={swiperRef}
                        slidesPerView={1}
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            prevEl: prevButtonRef.current,
                            nextEl: nextButtonRef.current
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl =
                                prevButtonRef.current
                            swiper.params.navigation.nextEl =
                                nextButtonRef.current
                        }}
                        loop={true}
                        autoplay={{
                            delay: 4000
                        }}
                    >
                        <SwiperSlide>
                            <Collection.Item>
                                <img src={getImage('home-collection-1')} />

                                <Collection.Content>
                                    <p>New Characters</p>
                                    <h2>TEKNO</h2>
                                    <span>
                                        Meet Tekno, the cutting-edge robot bird,
                                        engineered for the future! with his
                                        advanced technological prowess, Tekno is
                                        on a mission to navigate the digital
                                        skies to find and retrieve flappy bird
                                    </span>
                                </Collection.Content>
                            </Collection.Item>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Collection.Item>
                                <img src={getImage('home-collection-2')} />

                                <Collection.Content>
                                    <p>New Characters</p>
                                    <h2 style={{ color: '#292D32' }}>PENG</h2>
                                    <span>
                                        Meet Peng, the adorably plump penguin
                                        who dreams of soaring the skies! despite
                                        his round frame, his determination and
                                        cheerful spirit never wane, proving
                                        anyone can achieve their dreams!
                                    </span>
                                </Collection.Content>
                            </Collection.Item>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Collection.Item>
                                <img src={getImage('home-collection-3')} />

                                <Collection.Content>
                                    <p>New Characters</p>
                                    <h2 style={{ color: '#365FC0' }}>QUIRKY</h2>
                                    <span>
                                        Meet Peng, the adorably plump penguin
                                        who dreams of soaring the skies! despite
                                        his round frame, his determination and
                                        cheerful spirit never wane, proving
                                        anyone can achieve their dreams!
                                    </span>
                                </Collection.Content>
                            </Collection.Item>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Collection.Item>
                                <img src={getImage('home-collection-4')} />

                                <Collection.Content>
                                    <p>New Characters</p>
                                    <h2 style={{ color: '#FFCC00' }}>TRIXY</h2>
                                    <span>
                                        Meet Peng, the adorably plump penguin
                                        who dreams of soaring the skies! despite
                                        his round frame, his determination and
                                        cheerful spirit never wane, proving
                                        anyone can achieve their dreams!
                                    </span>
                                </Collection.Content>
                            </Collection.Item>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Collection.Item>
                                <img src={getImage('home-collection-5')} />

                                <Collection.Content>
                                    <p>New Characters</p>
                                    <h2 style={{ color: '#FFCC00' }}>TRIXY</h2>
                                    <span>
                                        Meet Peng, the adorably plump penguin
                                        who dreams of soaring the skies! despite
                                        his round frame, his determination and
                                        cheerful spirit never wane, proving
                                        anyone can achieve their dreams!
                                    </span>
                                </Collection.Content>
                            </Collection.Item>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Collection.Item>
                                <img src={getImage('home-collection-6')} />

                                <Collection.Content>
                                    <p>New Characters</p>
                                    <h2 style={{ color: '#FFCC00' }}>TRIXY</h2>
                                    <span>
                                        Meet Peng, the adorably plump penguin
                                        who dreams of soaring the skies! despite
                                        his round frame, his determination and
                                        cheerful spirit never wane, proving
                                        anyone can achieve their dreams!
                                    </span>
                                </Collection.Content>
                            </Collection.Item>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Collection.Item>
                                <img src={getImage('home-collection-7')} />

                                <Collection.Content>
                                    <p>New Characters</p>
                                    <h2 style={{ color: '#FFCC00' }}>TRIXY</h2>
                                    <span>
                                        Meet Peng, the adorably plump penguin
                                        who dreams of soaring the skies! despite
                                        his round frame, his determination and
                                        cheerful spirit never wane, proving
                                        anyone can achieve their dreams!
                                    </span>
                                </Collection.Content>
                            </Collection.Item>
                        </SwiperSlide>
                    </Swiper>
                </Collection.Container>
            </Container>

            <Presale.Container>
                <Container>
                    <Presale.Image>
                        <img src={getImage('home-theme-3')} />
                    </Presale.Image>

                    <Presale.Content>
                        <h2>DISTRICT PRESALE</h2>

                        <p>Enters the NFT Space to Raise Money for Combatant</p>

                        <CountDown />

                        <Button size='lg' style={{ margin: 'auto' }}>
                            BUY NOW
                        </Button>
                    </Presale.Content>

                    <Presale.Image>
                        <img src={getImage('home-theme-4')} />
                    </Presale.Image>
                </Container>
            </Presale.Container>

            <Container>
                <Play.Container>
                    <Play.Left>
                        <Title>
                            Are you ready <br />
                            to play?
                        </Title>

                        <Play.LeftBox>
                            Open Box to <br />
                            receive Loot
                            <Button size='lg'>LET'S GO</Button>
                        </Play.LeftBox>
                    </Play.Left>

                    <Play.Right>
                        <div>
                            <img src={getImage('home-theme-5')} />
                        </div>
                    </Play.Right>
                </Play.Container>
            </Container>

            <RoadMap.Container>
                <Container>
                    <RoadMap.Left>
                        {!isMobile && (
                            <RoadMap.Title
                                style={{ marginTop: 70, lineHeight: '30px' }}
                            >
                                ROADMAP
                            </RoadMap.Title>
                        )}

                        <RoadMap.LeftImage>
                            <img src={getImage('home-theme-6')} />
                        </RoadMap.LeftImage>
                    </RoadMap.Left>

                    <RoadMap.Right>
                        <RoadMap.RightBoxContainer>
                            {isMobile && <RoadMap.Title>ROADMAP</RoadMap.Title>}

                            <RoadMap.RightBox>
                                <p>Connect your Wallet</p>

                                <span>
                                    Use your crypto wallet to connect to our
                                    platform
                                </span>
                            </RoadMap.RightBox>

                            <RoadMap.RightBox>
                                <p>Choose your NFT WAR</p>

                                <span>
                                    Complete the transaction and become the
                                    proud owner of a unique, rebellious NFT WAR!
                                </span>
                            </RoadMap.RightBox>

                            <RoadMap.RightBox>
                                <p>Purchase your NFT WAR</p>

                                <span>
                                    Browse through the collection and find the
                                    rebellious Viking that resonates with you.
                                </span>
                            </RoadMap.RightBox>

                            <RoadMap.RightBox>
                                <p>Receive your NFT WAR</p>

                                <span>
                                    You can view your Viking in your wallet or
                                    on our platform in the My Collrction
                                    section.
                                </span>
                            </RoadMap.RightBox>
                        </RoadMap.RightBoxContainer>
                    </RoadMap.Right>
                </Container>
            </RoadMap.Container>

            <Container>
                <FAQ.Container id='faqs'>
                    <Title>Faqs</Title>

                    <FAQ.Wrapper>
                        <FAQ.Left>
                            <FAQ.LeftImageWrapper>
                                <img src={getImage('home-theme-7')} />
                            </FAQ.LeftImageWrapper>
                        </FAQ.Left>

                        <FAQ.Right>
                            <Question
                                title={t('Why should i buy the NFT WAR?')}
                                description={t(
                                    'Each NFT in the "NFT WAR" Collection is a work of art that exists in a single copy. You will own a unique digital creation that cannot be found anywhere else in the world NFT WAR is unique NFT collection where each NFT WAR embodies the spirt of rebelion and defiance.'
                                )}
                            />
                            <Question
                                title={t('Can I resell my NFT WAR?')}
                                description={t(
                                    'Yes, you can resell your NFT WAR on supported NFT marketplaces. Since each NFT in the collection is unique and exists as a single copy, its value may increase over time, depending on demand and rarity.'
                                )}
                            />
                            <Question
                                title={t('How can I buy an NFT WAR?')}
                                description={t(
                                    "To buy an NFT WAR, you'll need to have a crypto wallet set up with sufficient funds (usually in Ethereum or another specified cryptocurrency). Then, visit the official platform or marketplace hosting the NFT WAR collection, connect your wallet, and follow the purchase process to acquire your unique NFT."
                                )}
                            />
                        </FAQ.Right>
                    </FAQ.Wrapper>
                </FAQ.Container>
            </Container>
        </>
    )
}

export default Home
