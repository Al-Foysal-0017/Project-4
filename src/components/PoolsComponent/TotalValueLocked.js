import React from 'react'
import { useTranslation } from 'react-i18next'

const TotalValueLocked = () => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    const { t } = useTranslation()
    return (
        <div style={{display:"flex", flexWrap: "wrap"}}>
            <span className="boxContainerLeftPoolsOptionTopValues"  style={{backgroundColor: darkMode ? "#323842" : "#fff", paddingTop:"3px"}}>
                <div className="boxContainerLeftPoolsOptionTopValue" style={{color: darkMode ? "#ffffff" : "#323742"}}>$4,534,375.88</div>
                <div className="boxContainerLeftPoolsOptionTopValueName">{t('Value_Locked')}</div>
            </span>
            <span className="boxContainerLeftPoolsOptionTopValues" style={{backgroundColor: darkMode ? "#323842" : "#fff",  paddingTop:"3px"}}>
                <div className="boxContainerLeftPoolsOptionTopValue" style={{color: darkMode ? "#ffffff" : "#323742"}}>$4,534,375.88</div>
                <div className="boxContainerLeftPoolsOptionTopValueName">{t('Volume')} (24h)</div>
            </span>
            <span className="boxContainerLeftPoolsOptionTopValues" style={{backgroundColor: darkMode ? "#323842" : "#fff",  paddingTop:"3px"}}>
                <div className="boxContainerLeftPoolsOptionTopValue" style={{color: darkMode ? "#ffffff" : "#323742"}}>$4,534,375.88</div>
                <div className="boxContainerLeftPoolsOptionTopValueName">{t('Fees')} (24h)</div>
            </span>
        </div>
    )
}

export default TotalValueLocked
