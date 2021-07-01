import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import {useLocation} from 'react-router-dom'
import LogoImg from "../../../images/logo1.png"
import LogoImgDark from "../../../images/logoDark.png"
import DarkMode from '../../DarkMode/DarkMode'
import { useTranslation } from 'react-i18next'
import Language from '../../../Language'

const Navbar = ({toggle}) => {
    const {pathname} = useLocation();
    let darkMode = localStorage.getItem('theme')=== 'theme-dark';
    const { t } = useTranslation()
    return (
        <>
         <div className="Nav" style={{backgroundColor: darkMode ? "#323742" : "#fff"}}>
             <div className="NavbarContainer">
                 <div className="NavLogo">
                 <Link to="/">
                 <div>
                     {darkMode?
                     <img src={LogoImgDark} className="logoImg" alt="" />:
                     <img src={LogoImg} className="logoImg" alt="" />}
                </div>
                 </Link>
                 <div  style={{color: darkMode ? "#ffffff" : "#323742"}}>
                     <Link to="/" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                        {t('logoName')}
                    </Link>
                </div>
                 </div>
                 <div className="MobileIcon" onClick={toggle} > 
                     <FaBars />
                 </div>
                 
                 <div className="NavMenu">
                    {pathname === "/" || pathname==="/swap/details" ?
                    <div className="NavItem">
                    <Link className="NavLinks NavLinksActive" to="/" style={{color: darkMode ? "#ffffff" : "#323742", }}>{t('Swap')}</Link>
                    </div>
                    :
                    <div className="NavItem">
                        <Link className="NavLinks" to="/" style={{color: darkMode ? "#ffffff" : "#323742", borderBottom: darkMode ? "4px solid #323842" : "4px solid #fff"}}>{t('Swap')}</Link>
                    </div>
                    }

                    {pathname === "/pools" || pathname === "/pools/swap" || pathname === "/pools/locking" || pathname === "/pools/add-liquidity" || pathname === "/pools/remove-liquidity" ?
                    <div className="NavItem">
                    <Link className="NavLinks NavLinksActive" to="/pools" style={{color: darkMode ? "#ffffff" : "#323742"}}>{t('Pools')}</Link>
                    </div>
                    :
                    <div className="NavItem">
                        <Link className="NavLinks" to="/pools" style={{color: darkMode ? "#ffffff" : "#323742", borderBottom: darkMode ? "4px solid #323842" : "4px solid #fff"}}>{t('Pools')}</Link>
                    </div>
                    }

                    {pathname === "/governance" || pathname === "/governance-info" ?
                    <div className="NavItem">
                    <Link className="NavLinks NavLinksActive" to="/governance" style={{color: darkMode ? "#ffffff" : "#323742"}}>{t('Governance')}</Link>
                    </div>
                    :
                    <div className="NavItem">
                        <Link className="NavLinks" to="/governance" style={{color: darkMode ? "#ffffff" : "#323742", borderBottom: darkMode ? "4px solid #323842" : "4px solid #fff"}}>{t('Governance')}</Link>
                    </div>
                    }


                    {pathname === "/more" ?
                    <div className="NavItem">
                    <Link className="NavLinks NavLinksActive" to="/more" style={{color: darkMode ? "#ffffff" : "#323742"}}>{t('More')}</Link>
                    </div>
                    :
                    <div className="NavItem">
                        <Link className="NavLinks" to="/more" style={{color: darkMode ? "#ffffff" : "#323742", borderBottom: darkMode ? "4px solid #323842" : "4px solid #fff"}}>{t('More')}</Link>
                    </div>
                    }   
                 </div>
                 
                 <div className="NavBtn">
                 
                  <div style={{marginTop:"0.2rem"}} className="ResponsiveLanguage">
                  <Language/>
                  </div>
                  
                  <div style={{marginTop:"3px"}}>
                  <DarkMode/>
                  </div>

                 <div >
                     {darkMode? 
                     <div
                        className="NavBtnLinkDark">
                        {t('Connect_Wallet')}
                    </div>
                       :
                    <div
                        className="NavBtnLink">
                        {t('Connect_Wallet')}
                    </div> }                    
                 </div>
                 </div>
                 
               </div>
       
         </div>
       </>
    )
}

export default Navbar
