import MainLayout from '@/components/MainLayout'
import Home from '@/screens/Home'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Page() {
    const router = useRouter()
    const lang = router.query.lang || 'en'

    return (
        <MainLayout language={lang}>
            <Head>
                <title>FLAPP HERO</title>
                <meta
                    name='description'
                    content='Flapp Hero is a game inspired by Flappy Bird,
                            combining Web 3 technology and Play-to-Earn (P2E)
                            features. Players can earn real tokens by overcoming
                            challenges and collecting exclusive NFTs. With fun
                            graphics and challenging gameplay, Flapp Hero offers
                            an exciting gaming experience and the opportunity to
                            earn. Join now and become a hero in the sky!'
                />
            </Head>
            <Home />
        </MainLayout>
    )
}
