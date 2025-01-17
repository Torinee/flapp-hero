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
                <title>NFT WAR | Own a Unique Digital Masterpiece</title>
                <meta
                    name='description'
                    content='Step into the rebellious world of NFT WAR, a collection of 10,000 hand-crafted digital masterpieces. Each NFT WAR is one of a kind, embodying the spirit of rebellion and individuality.'
                />
            </Head>
            <Home />
        </MainLayout>
    )
}
