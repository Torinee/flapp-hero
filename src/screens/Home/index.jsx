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
    const goJoinNow = () =>
        (window.location.href = 'https://t.me/BotGameFlappHero_bot?start=0000')
    const goWhitePaper = () =>
        (window.location.href = 'https://docs.flapphero.xyz/')

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
                            FLAP <br /> HERO
                        </h1>

                        <div>
                            <Button size='lg' onClick={goJoinNow}>
                                JOIN NOW
                            </Button>
                            <Button
                                size='lg'
                                outline='white'
                                hideIcon
                                onClick={goWhitePaper}
                            >
                                WHITEPAPER
                            </Button>
                        </div>
                    </Theme.Right>
                </Container>
            </Theme.Container>

            <Container id='about-us'>
                <AboutUs.Container>
                    <AboutUs.Left>
                        <Title>Flap Hero – The Unique Web 3 Game</Title>

                        <p>
                            Flap Hero is a game inspired by Flappy Bird,
                            combining Web 3 technology and Play-to-Earn (P2E)
                            features. Players can earn real tokens by overcoming
                            challenges and collecting exclusive NFTs. With fun
                            graphics and challenging gameplay, Flap Hero offers
                            an exciting gaming experience and the opportunity to
                            earn. Join now and become a hero in the sky!
                        </p>
                    </AboutUs.Left>

                    <AboutUs.Right>
                        <img src={getImage('home-theme-2')} />
                    </AboutUs.Right>
                </AboutUs.Container>
            </Container>

            <Container id='collection'>
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
                                <img src={getImage('home-collection-4')} />

                                <Collection.Content>
                                    <p>New Characters</p>
                                    <h2 style={{ color: '#FFCC00' }}>
                                        Skybound Sentinel (D)
                                    </h2>
                                    <span>
                                        The Skybound Sentinel is a resilient and
                                        agile hero, soaring through the skies
                                        with unmatched speed and grace. With his
                                        powerful wings and sharp reflexes, he
                                        can dodge any obstacles and lead the way
                                        in the battle for the skies.
                                    </span>
                                </Collection.Content>
                            </Collection.Item>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Collection.Item>
                                <img src={getImage('home-collection-3')} />

                                <Collection.Content>
                                    <p>New Characters</p>
                                    <h2 style={{ color: '#FFCC00' }}>
                                        Bronze Talon (C)
                                    </h2>
                                    <span>
                                        Bronze Talon is a fierce warrior with a
                                        sharp, metallic beak and formidable
                                        strength. Known for his tenacity and
                                        precision, he is a master of aerial
                                        combat, striking down enemies with his
                                        powerful talons.
                                    </span>
                                </Collection.Content>
                            </Collection.Item>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Collection.Item>
                                <img src={getImage('home-collection-2')} />

                                <Collection.Content>
                                    <p>New Characters</p>
                                    <h2 style={{ color: '#FFCC00' }}>
                                        Steelred Dragon (B)
                                    </h2>
                                    <span>
                                        The Steelred Dragon is a mighty and
                                        aggressive beast with scales as hard as
                                        steel. His fiery breath and crushing
                                        strength make him a dangerous adversary.
                                        A true warrior in the skies, he will
                                        stop at nothing to conquer his foes.
                                    </span>
                                </Collection.Content>
                            </Collection.Item>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Collection.Item>
                                <img src={getImage('home-collection-1')} />

                                <Collection.Content>
                                    <p>New Characters</p>
                                    <h2 style={{ color: '#FFCC00' }}>
                                        Golden Saint King Dragon (A)
                                    </h2>
                                    <span>
                                        The Golden Saint King Dragon is a
                                        majestic and powerful creature, revered
                                        for its ancient wisdom and unmatched
                                        strength. With golden scales that
                                        shimmer like the sun, he commands the
                                        battlefield with his divine presence and
                                        mighty roar.
                                    </span>
                                </Collection.Content>
                            </Collection.Item>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Collection.Item>
                                <img src={getImage('home-collection-5')} />

                                <Collection.Content>
                                    <p>New Characters</p>
                                    <h2 style={{ color: '#FFCC00' }}>
                                        Fire God Dragon (S)
                                    </h2>
                                    <span>
                                        The Fire God Dragon is a mighty
                                        creature, imbued with the essence of
                                        fire itself. His powerful flame breath
                                        can melt even the toughest of enemies,
                                        and his strength and resilience make him
                                        a key ally in any battle. His fiery
                                        spirit leads him to victory, no matter
                                        the odds.
                                    </span>
                                </Collection.Content>
                            </Collection.Item>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Collection.Item>
                                <img src={getImage('home-collection-6')} />

                                <Collection.Content>
                                    <p>New Characters</p>
                                    <h2 style={{ color: '#FFCC00' }}>
                                        Dark Shadow Wolf King (SS)
                                    </h2>
                                    <span>
                                        The Dark Shadow Wolf King is a
                                        mysterious and elusive figure, mastering
                                        the art of stealth and darkness. With
                                        the ability to vanish into shadows, he
                                        strikes fear into his enemies before
                                        they even realize he's near. His cunning
                                        and strength make him a formidable
                                        opponent.
                                    </span>
                                </Collection.Content>
                            </Collection.Item>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Collection.Item>
                                <img src={getImage('home-collection-7')} />

                                <Collection.Content>
                                    <p>New Characters</p>
                                    <h2 style={{ color: '#FFCC00' }}>
                                        Child of the Fire God (SSS)
                                    </h2>
                                    <span>
                                        Born from the flames, the Child of the
                                        Fire God possesses the power of fire at
                                        his fingertips. His fiery attacks can
                                        scorch anything in his path, making him
                                        a force to be reckoned with. With a
                                        heart as passionate as the flames he
                                        controls, he brings destruction to his
                                        enemies.
                                    </span>
                                </Collection.Content>
                            </Collection.Item>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Collection.Item>
                                <img src={getImage('home-collection-8')} />

                                <Collection.Content>
                                    <p>New Characters</p>
                                    <h2 style={{ color: '#FFCC00' }}>
                                        Holy Sword King (SSS Max)
                                    </h2>
                                    <span>
                                        The Holy Sword King is a legendary hero
                                        wielding a divine sword capable of
                                        cutting through anything in its path.
                                        With unmatched power and unwavering
                                        courage, he leads his allies to victory
                                        in the toughest of battles, earning the
                                        title of the ultimate hero.
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

            <RoadMap.Container id='roadmap'>
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
                                <p>Q4 2024:</p>

                                <span>
                                    <b>Idea and Project Development:</b> <br />-
                                    The concept and development of Flap Hero
                                    will begin. The team will focus on creating
                                    a solid foundation for the project and
                                    outlining key gameplay mechanics.
                                </span>
                            </RoadMap.RightBox>

                            <RoadMap.RightBox>
                                <p>Q1 2025:</p>

                                <span>
                                    <b>Demo Version:</b> <br />- A demo version
                                    of Flap Hero will be released to showcase
                                    the core gameplay and features. <br />
                                    <b>Pre-Sale Token: </b> <br />- The pre-sale
                                    of the FPH$ token will be held to allow
                                    early investors to purchase tokens before
                                    the official listing. <br />
                                    <b>Token Listing on DEX: </b> <br />- FPH$
                                    tokens will be listed on decentralized
                                    exchanges (DEX) for public trading. <br />
                                    <b>Official Game Launch: </b> <br />- The
                                    official release of the Flap Hero game will
                                    take place, allowing players to experience
                                    the full game and earn rewards.
                                </span>
                            </RoadMap.RightBox>

                            <RoadMap.RightBox>
                                <p>Q2 2025:</p>

                                <span>
                                    <b>Hero Racing Feature Update:</b> <br />
                                    - A new "Hero Racing" feature will be
                                    introduced, adding exciting competitive
                                    elements to the game. <br />
                                    <b>Player Interface Redesign: </b>
                                    <br />
                                    - The user interface (UI) will be redesigned
                                    to improve the gaming experience and make it
                                    more user-friendly. <br />
                                    <b>Expanded Marketing Campaign: </b> <br />-
                                    The project will increase its marketing
                                    efforts to reach a wider audience and
                                    attract more players to the game.
                                </span>
                            </RoadMap.RightBox>

                            <RoadMap.RightBox>
                                <p>Q3 2025:</p>

                                <span>
                                    <b>Mobile Version Launch:</b> <br />
                                    - The mobile version of Flap Hero will be
                                    released on Android and iOS, making the game
                                    accessible to a broader player base. <br />
                                    <b>Token Listing on CEX: </b>
                                    <br />- FPH$ token will be listed on
                                    centralized exchanges (CEX) to enhance
                                    liquidity and exposure.
                                </span>
                            </RoadMap.RightBox>

                            <RoadMap.RightBox>
                                <p>Q4 2025:</p>

                                <span>
                                    <b>Mini-Game Development:</b> <br />
                                    - The project will introduce mini-games
                                    within the Flap Hero ecosystem, adding more
                                    variety and fun for players. <br />
                                    <b>
                                        Project Expansion and Marketing Growth:
                                    </b>
                                    <br />- The team will continue to expand and
                                    promote the project, reaching new
                                    communities and increasing brand awareness.
                                </span>
                            </RoadMap.RightBox>
                        </RoadMap.RightBoxContainer>
                    </RoadMap.Right>
                </Container>
            </RoadMap.Container>

            <Container id='faqs'>
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
                                title={t(
                                    'What is the release date of Flap Hero?'
                                )}
                                description={t(
                                    '- The project was launched on January 26, 2025.'
                                )}
                            />
                            <Question
                                title={t('What is Flap Hero?')}
                                description={
                                    <span>
                                        - Flap Hero is a game inspired by the
                                        famous entertainment game Flappy Bird.
                                        <br />- It is not only a Web 2 game, but
                                        Flap Hero is also an exciting Web 3 game
                                        that allows players to earn tokens while
                                        playing.
                                    </span>
                                }
                            />
                            <Question
                                title={t('Can NFTs in the game be traded?')}
                                description='- Yes, you can trade NFTs in the game through the project’s marketplace.'
                            />
                            <Question
                                title='On which platform is Flap Hero released?'
                                description={
                                    <span>
                                        - Flap Hero is a P2E entertainment game
                                        that we have released on the Telegram
                                        BOT platform. <br />- However, there
                                        will soon be other versions, such as web
                                        and Android.
                                    </span>
                                }
                            />
                            <Question
                                title='What is the FPH$ token, and how can it be earned?'
                                description={
                                    <span>
                                        - FPH$ token is the governance token of
                                        the project. <br />
                                        - Players can earn it by overcoming
                                        obstacles in the game.
                                        <br />- The FPH$ token is listed at a
                                        price of $0.0052 and was sold in the
                                        pre-public round at a price of $0.005
                                        per token.
                                    </span>
                                }
                            />
                            <Question
                                title='I want to promote the project. Who can I contact, and is there any attractive program for KOLs?'
                                description={
                                    <span>
                                        - Yes! You can take advantage of the
                                        invite friends feature in the game to
                                        earn a 5% commission. <br />- If you
                                        have any further requests, please
                                        contact Telegram: @Alex65923.
                                    </span>
                                }
                            />
                        </FAQ.Right>
                    </FAQ.Wrapper>
                </FAQ.Container>
            </Container>
        </>
    )
}

export default Home
