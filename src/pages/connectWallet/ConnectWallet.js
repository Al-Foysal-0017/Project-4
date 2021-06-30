import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/HeroSection/Hero'
import { useTranslation } from 'react-i18next'

const ConnectWallet = () => {
    const { t } = useTranslation()
    const Value = t('Connect_Wallet')
    return (
        <div>
            <Navbar/>
            <Hero Content={Value}/>
        </div>
    )
}

export default ConnectWallet
