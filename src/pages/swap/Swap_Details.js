import React from 'react'
import Navbar from '../../components/Navbar'
import "./Swap.css"
import SwapLeftValue from '../../components/SwapComponent/SwapLeftValue'
import SwapRightValue from '../../components/SwapComponent/SwapRightValue'
import { BsArrowLeftRight, BsArrowUpDown } from "react-icons/bs";
import { BiCheckboxChecked } from "react-icons/bi";
import { VscQuestion } from "react-icons/vsc";
import { useTranslation } from 'react-i18next'
import "./Swap_Details.css"
import { Checkbox } from 'antd';
function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

const Swap_Details = () => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    const { t } = useTranslation()
    // Swap_Using_Pools
    return (
        <div>
            <Navbar/>
            <div className="container" style={{backgroundColor: darkMode ? "#23252A" : "#F7F8FD"}}>
                {/* <div className="containerLeft"></div> */}
                
                <div className="containerCenter ResponsiveSwap_Details">
                   <div className="containerCenterHeader" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                    {t('Swap_Using_Pools')}
                    </div>
                   
                   <BsArrowLeftRight size="55px" style={{color: darkMode ? "#ffffff" : "#5A6AF0" , backgroundColor: darkMode ? "#22262A" : "#fff", border:darkMode?  "0.5px solid #22262A" : "0.5px solid #D8D8D8"}} className="ArrowIcon"/>
                   <BsArrowUpDown size="55px" style={{color: darkMode ? "#ffffff" : "#5A6AF0" , backgroundColor: darkMode ? "#22262A" : "#fff", border:darkMode?  "0.5px solid #22262A" : "0.5px solid #D8D8D8"}} className="ArrowIconMobile"/>

                   <div className="boxContainer" style={{backgroundColor: darkMode ? "#323742" : "#ffffff", border:darkMode?  "0.5px solid #22262A" : "0.5px solid #D8D8D8"}}>
                    <div className="boxContainerLeft" style={{backgroundColor: darkMode ? "#323742" : "#ffffff", border:darkMode?  "0.5px solid #22262A" : "0.5px solid #D8D8D8"}}>
                    <SwapLeftValue/>
                    </div>
                    <div className="boxContainerRight" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                    <SwapRightValue/>
                    </div>



                    <div className="responsiveMobile">
                       <div className="footerBoxMobile" style={{backgroundColor: darkMode ? "#323742" : "#ffffff", border:darkMode?  "0.5px solid #22262A" : "0.5px solid #D8D8D8"}}>
                           <div className="footerBoxLeft" style={{color: darkMode ? "#fff" : "#323742"}}>DAI/USDC &nbsp;</div>
                           <div className="footerBoxCenter" style={{color:"#A3B7A7"}}>{t('ExRate')} &nbsp;</div>
                           <div className="footerBoxRight" style={{color: darkMode ? "#fff" : "#323742"}}>1.0433</div>
                       </div>
                       <div className="footerInfoMobile">
                            <span className="footerInfoIcon">
                               <BiCheckboxChecked size="18px" style={{marginRight:"2px", color:"#A3B7A7"}}/>
                               {t('InfiAppo')}
                               <VscQuestion size="18px" style={{marginLeft:"5px", color:"gray"}}/>
                            </span>
                           <button className="footerButton" style={{marginTop:"15px"}}>{t('Swap')}</button> 
                       </div>
                    </div>
                   </div>


                   <div className="responsiveDesktop">
                       <div className="footerBox" style={{backgroundColor: darkMode ? "#323742" : "#ffffff", border:darkMode?  "0.5px solid #22262A" : "0.5px solid #D8D8D8"}}>
                           <div className="footerBoxLeft" style={{color: darkMode ? "#fff" : "#323742"}}>DAI/USDC &nbsp;</div>
                           <div className="footerBoxCenter" style={{color:"#A3B7A7"}}>{t('ExRate')} &nbsp;</div>
                           <div className="footerBoxRight" style={{color: darkMode ? "#fff" : "#323742"}}>1.0433</div>
                       </div>
                       <div className="footerInfo">
                            <span className="footerInfoIcon">
                               {/* <BiCheckboxChecked size="25px" style={{color:"#A3B7A7"}}/> */}
                               <Checkbox onChange={onChange} style={{fontSize:"13px", color:"gray"}}>{t('InfiAppo')}</Checkbox>
                               {/* {t('InfiAppo')} */}
                               <VscQuestion size="18px" style={{marginLeft:"5px", color:"gray"}}/>
                            </span>
                           <button className="footerButton">{t('Swap')}</button>
                       </div>
                   </div>
                </div>
                
                
                <div className="containerRight responsiveXYZ" style={{flex:"5"}}>
                    <div className="">
                    <div className="containerCenterHeaderPoolsOptionBox">   
                        <div className="containerCenterHeaderPoolsOptionBoxLeft"> 
                            <div className="BackLinkSpan">
                             
                            </div>
                        </div>                
                        <div className="containerCenterHeaderPoolsOptionCenter" style={{marginTop:"25px"}}></div>
                        <div className="containerCenterHeaderPoolsOptionBoxRight"></div>
                    </div>
                    <div className="boxContainerLeftPoolsOption" style={{backgroundColor: darkMode ? "#323742" : "#ffffff", border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8", maxWidth:"340px", minWidth:"340px", maxHeight:"500px"}}>
                        <div className="swapDatailsHeader" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                        {t('About_the_Pool')}
                        </div>

                        <div className="swapDatailsBottom">
                            <div className="swapDatailsBottomHeader">
                            {t('Currency_Reserves')}
                            </div>
                            <div className="swapDatailsBottomList">
                                <div className="swapDatailsBottomListItem">
                                    <div className="swapDatailsBottomListItemLeft" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                        DAI
                                    </div>
                                    <div className="swapDatailsBottomListItemRight">
                                        4,534,375.88 (15.15%)
                                    </div>
                                </div>
                                <div className="swapDatailsBottomListItem">
                                    <div className="swapDatailsBottomListItemLeft" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                        USDC
                                    </div>
                                    <div className="swapDatailsBottomListItemRight">
                                        4,534,375.88 (15.15%)
                                    </div>
                                </div>
                                <div className="swapDatailsBottomListItem">
                                    <div className="swapDatailsBottomListItemLeft" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                        USDT
                                    </div>
                                    <div className="swapDatailsBottomListItemRight">
                                        4,534,375.88 (15.15%)
                                    </div>
                                </div>
                                <div className="swapDatailsBottomListItem">
                                    <div className="swapDatailsBottomListItemLeft" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                        TUSD
                                    </div>
                                    <div className="swapDatailsBottomListItemRight">
                                        4,534,375.88 (15.15%)
                                    </div>
                                </div>
                                <div className="swapDatailsBottomListItem">
                                    <div className="swapDatailsBottomListItemLeft" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                        DAI+USDC+U...
                                    </div>
                                    <div className="swapDatailsBottomListItemRight">
                                        4,534,375.88 (15.15%)
                                    </div>
                                </div>



                                <div className="swapDatailsBottomListItem" style={{marginTop:"15px"}}>
                                    <div className="swapDatailsBottomListItemLeft" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                      {t('Daily_USD_Vol')}
                                    </div>
                                    <div className="swapDatailsBottomListItemRight">
                                        $2,184,648.91
                                    </div>
                                </div>
                                <div className="swapDatailsBottomListItem">
                                    <div className="swapDatailsBottomListItemLeft" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                    {t('Fee')}
                                    </div>
                                    <div className="swapDatailsBottomListItemRight">
                                        0.030%
                                    </div>
                                </div>
                                <div className="swapDatailsBottomListItem">
                                    <div className="swapDatailsBottomListItemLeft" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                    {t('Admin_Fee')}
                                    </div>
                                    <div className="swapDatailsBottomListItemRight">
                                        0%
                                    </div>
                                </div>



                                <div className="swapDatailsBottomListItem" style={{marginTop:"15px"}}>
                                    <div className="swapDatailsBottomListItemLeft" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                    {t('Virtual_Price')}
                                    </div>
                                    <div className="swapDatailsBottomListItemRight">
                                        $2,184,648.91
                                    </div>
                                </div>
                                <div className="swapDatailsBottomListItem">
                                    <div className="swapDatailsBottomListItemLeft" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                    {t('A')}
                                    </div>
                                    <div className="swapDatailsBottomListItemRight">
                                        0.030%
                                    </div>
                                </div>
                                <div className="swapDatailsBottomListItem" >
                                    <div className="swapDatailsBottomListItemLeft" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                    {t('Future_A')}
                                    </div>
                                    <div className="swapDatailsBottomListItemRight">
                                        0%
                                    </div>
                                </div>
                                <div className="swapDatailsBottomListItem">
                                    <div className="swapDatailsBottomListItemLeft" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                    {t('Action_Dead')}
                                    </div>
                                    <div className="swapDatailsBottomListItemRight">
                                        5/10/2020 13.02:16 OMT
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="buttonSwapDetails">{t('Details')}</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Swap_Details
