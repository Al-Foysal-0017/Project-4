import React from 'react'
import { useTranslation } from 'react-i18next'

const TotalValueLocked = () => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    const { t } = useTranslation()
    return (
        <div>
            <button className="boxContainerLeftPoolsOptionTopValues"  style={{backgroundColor: darkMode ? "#323842" : "#fff"}}>
                <div className="boxContainerLeftPoolsOptionTopValue" style={{color: darkMode ? "#ffffff" : "#323742"}}>$4,534,375.88</div>
                <div className="boxContainerLeftPoolsOptionTopValueName">{t('Value_Locked')}</div>
            </button>
            <button className="boxContainerLeftPoolsOptionTopValues" style={{backgroundColor: darkMode ? "#323842" : "#fff"}}>
                <div className="boxContainerLeftPoolsOptionTopValue" style={{color: darkMode ? "#ffffff" : "#323742"}}>$4,534,375.88</div>
                <div className="boxContainerLeftPoolsOptionTopValueName">{t('Volume')} (24h)</div>
            </button>
            <button className="boxContainerLeftPoolsOptionTopValues" style={{backgroundColor: darkMode ? "#323842" : "#fff"}}>
                <div className="boxContainerLeftPoolsOptionTopValue" style={{color: darkMode ? "#ffffff" : "#323742"}}>$4,534,375.88</div>
                <div className="boxContainerLeftPoolsOptionTopValueName">{t('Fees')} (24h)</div>
            </button>
        </div>
    )
}

export default TotalValueLocked
