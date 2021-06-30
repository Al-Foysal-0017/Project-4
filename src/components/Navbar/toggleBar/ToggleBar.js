import React from 'react'
import { Link } from 'react-router-dom'
import "./ToggleBar.css"
import { FaTimes } from "react-icons/fa";
import DarkMode from "../../DarkMode/DarkMode"
import { useTranslation } from 'react-i18next'

const ToggleBar = ({isOpen, toggle}) => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    const { t } = useTranslation()
    // {t('All_Boot_Pools')}
    return (<>
        {isOpen && 
        <div className="SidebarContainer1" onClick={toggle} style={{backgroundColor: darkMode ? "#323742" : "#fff"}}>
        <div className="Icon" onClick={toggle}>
        <FaTimes style={{color:"#5A6AF0"}}/>
        </div>
        <div className="SidebarWrapper" style={{backgroundColor: darkMode ? "#323742" : "#fff"}}>
            <div className="SidebarMenu" style={{backgroundColor: darkMode ? "#323742" : "#fff"}}>
            <DarkMode/>
            <Link className="SidebarLink" to="/" onClick={toggle} style={{color: darkMode ? "#ffffff" : "#5A6AF0"}}> 
                {t('Swap')} 
            </Link>
            <Link className="SidebarLink" to="/pools" onClick={toggle} style={{color: darkMode ? "#ffffff" : "#5A6AF0"}}> 
                {t('Pools')} 
            </Link>
            <Link className="SidebarLink" to="/governance" onClick={toggle} style={{color: darkMode ? "#ffffff" : "#5A6AF0"}}> 
                {t('Governance')} 
            </Link>
            <Link className="SidebarLink" to="/more" onClick={toggle} style={{color: darkMode ? "#ffffff" : "#5A6AF0"}}>
                {t('More')}
            </Link>
            </div>

            <div className="SideBtnWrap">
                <Link to="/connect-wallet" 
                className="SidebarRoute"
                style={{backgroundColor: darkMode ? "#fff" : "#5A6AF0", color: darkMode ? "#323742" : "#fff"}}
            >
                    {t('Connect_Wallet')}
                </Link>
            </div>
        </div>
        </div>
        }
        </>
    )
}

export default ToggleBar



