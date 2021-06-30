import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/HeroSection/Hero'
import { useTranslation } from 'react-i18next'

const More = () => {
    const { t } = useTranslation()
    const Value = t('More')
    return (
        <div>
            
            <Navbar/>
            <Hero Content={Value}/>
            
        </div>
    )
}

export default More
