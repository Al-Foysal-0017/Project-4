import React from 'react'
import { Segment } from 'semantic-ui-react'
import { BiCheckboxChecked } from "react-icons/bi";
import { VscQuestion } from "react-icons/vsc";
import DAIimage from "../../../images/DAIimage.png"
import TUDTimage from "../../../images/TUDT.jpg"
import USDCimage from "../../../images/USDC.jpg"
import TUSDimage from "../../../images/TUSD.jpg"
import { useTranslation } from 'react-i18next'

const RemoveLiqTable = () => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    const { t } = useTranslation()
    return (
        <div style={{padding:"30px", backgroundColor: darkMode ? "#323842" : "#ffffff"}}>
            <Segment padded='very' textAlign='center' style={{padding:"15px", borderRadius:"25px", backgroundColor: darkMode ? "#464C58" : "#ffffff"}}>
                    <div className="boxContainerRightPoolsRemoveLiq" style={{backgroundColor: darkMode ? "#464C58" : "#ffffff"}}>
                        <div className="boxContainerRightPoolsOptionTop">
                        </div>

                        <div className="boxContainerRightPoolsOptionCenter">
                          <div className="PoolsRemLiqHeader">
                              {t('Share_of_Liquidity')} (%)
                          </div>
                          <div className="boxContainerLeftCenter">
                            <div className="boxContainerLeftCenterShowBox" style={{backgroundColor: darkMode ? "#22262A" : "#ffffff"}}>
                                <div className="boxContainerLeftCenterShowBoxLeft">
                                <span style={{color: darkMode ? "#ffffff" : "#323742"}}>100.00</span>
                                </div>
                                <div className="boxContainerLeftCenterShowBoxRight">
                                </div>
                                </div>
                            </div>

                            <div className="PoolsRemLiqHeader" style={{paddingTop:"30px"}}>
                                {t('Currencies')}
                            </div>
                            <div className="boxContainerLeftCenter">
                            <div className="boxContainerLeftCenterShowBox" style={{backgroundColor: darkMode ? "#22262A" : "#ffffff",border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8",}}>
                                <div className="boxContainerLeftCenterShowBoxLeft">
                                <span style={{color: darkMode ? "#ffffff" : "#323742",}}>100.00</span>
                                </div>
                                <div className="boxContainerLeftCenterShowBoxRight">
                                    <span style={{fontSize:"10px", color:"#A3B7A7"}}>{t('Max')}</span>
                                    <img src={DAIimage} className="imageSmall" alt="" />
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>DAI</span>
                                </div>
                                </div>
                            </div>
                            <div className="boxContainerLeftCenter">
                            <div className="boxContainerLeftCenterShowBox" style={{backgroundColor: darkMode ? "#22262A" : "#ffffff",border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8",}}>
                                <div className="boxContainerLeftCenterShowBoxLeft">
                                <span style={{color: darkMode ? "#ffffff" : "#323742"}}>100.00</span>
                                </div>
                                <div className="boxContainerLeftCenterShowBoxRight">
                                    <span style={{fontSize:"10px", color:"#A3B7A7"}}>{t('Max')}</span>
                                    <img src={USDCimage} className="imageSmall" alt="" />
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>USDC</span>
                                </div>
                                </div>
                            </div>
                            <div className="boxContainerLeftCenter">
                            <div className="boxContainerLeftCenterShowBox" style={{backgroundColor: darkMode ? "#22262A" : "#ffffff",border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8",}}>
                                <div className="boxContainerLeftCenterShowBoxLeft">
                                <span style={{color: darkMode ? "#ffffff" : "#323742"}}>100.00</span>
                                </div>
                                <div className="boxContainerLeftCenterShowBoxRight">
                                    <span style={{fontSize:"10px", color:"#A3B7A7"}}>{t('Max')}</span>
                                    <img src={TUDTimage} className="imageSmall" alt="" />
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>USDT</span>
                                </div>
                                </div>
                            </div>
                            <div className="boxContainerLeftCenter">
                            <div className="boxContainerLeftCenterShowBox" style={{backgroundColor: darkMode ? "#22262A" : "#ffffff",border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8",}}>
                                <div className="boxContainerLeftCenterShowBoxLeft">
                                <span style={{color: darkMode ? "#ffffff" : "#323742"}}>100.00</span>
                                </div>
                                <div className="boxContainerLeftCenterShowBoxRight">
                                    <span style={{fontSize:"10px", color:"#A3B7A7"}}>{t('Max')}</span>
                                    <img src={TUSDimage} className="imageSmall" alt="" />
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>TUSD</span>
                                </div>
                                </div>
                            </div>   
                        </div>


                        <div className="boxContainerRightPoolsOptionBottom">
                        <div className="PoolsRemLiqHeader">{t('Withdraw')} (%) {t('in')}</div>

                        <div className="withdrawBox">
                            <div className="withdrawBoxRow1">
                                <div className="withdrawBoxCol1" style={{ backgroundColor: darkMode ? "#22262A" : "#ffffff",border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8",display:"flex", justifyContent:"center", alignItems:"center",}}>
                                    <img src={DAIimage} alt="" className="image"/>
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>DAI</span>
                                </div>
                                <div className="withdrawBoxCol2" style={{backgroundColor: darkMode ? "#22262A" : "#ffffff",border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8",background:"#5A6AF0", display:"flex", justifyContent:"center", alignItems:"center"}}>
                                    <img src={USDCimage} alt="" className="image"/>
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>USDC</span>
                                </div>
                            </div>
                            <div className="withdrawBoxRow2">
                                <div className="withdrawBoxCol1" style={{backgroundColor: darkMode ? "#22262A" : "#ffffff",border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8",display:"flex", justifyContent:"center", alignItems:"center",}}>
                                    <img src={TUDTimage} alt="" className="image"/>
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>USDT</span>
                                </div>
                                <div className="withdrawBoxCol2" style={{backgroundColor: darkMode ? "#22262A" : "#ffffff",border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8",display:"flex", justifyContent:"center", alignItems:"center",}}>
                                    <img src={TUSDimage} alt="" className="image"/>
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>TUSD</span>
                                </div>
                            </div>
                            <div className="withdrawBoxRow3" style={{backgroundColor: darkMode ? "#22262A" : "#ffffff",border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8",}}>
                                <span style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                <img src={DAIimage} alt="" className="imagePools"/>
                                <img src={USDCimage} alt="" className="imagePools"/>
                                <img src={TUDTimage} alt="" className="imagePools"/>
                                <img src={TUSDimage} alt="" className="imagePools"/>
                                <span style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                    {t('Combination_of_All_Coins')}
                                </span>
                                </span>
                            </div>
                        </div>


                        <div style={{marginTop:"30px"}} className="footerPoolOptionText">
                           <span className="footerInfoIcon">
                               <BiCheckboxChecked size="25px" style={{color:"#A3B7A7"}}/>
                               {t('InfiAppo')}
                               <VscQuestion size="18px" style={{marginLeft:"5px", color:"gray"}}/>
                            </span>
                           </div>
                           <button className="footerPoolOptionButton">{t('Remove_Liquidity')}</button>
                        </div>
                    </div>

            </Segment>
        </div>
    )
}

export default RemoveLiqTable
