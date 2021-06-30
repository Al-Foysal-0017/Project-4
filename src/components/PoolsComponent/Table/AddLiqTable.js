import React from 'react'
import { Segment } from 'semantic-ui-react'
import { BiCheckboxChecked } from "react-icons/bi";
import { VscQuestion } from "react-icons/vsc";
import DAIimage from "../../../images/DAIimage.png"
import USDCimage from "../../../images/USDC.jpg"
import TUDTimage from "../../../images/TUDT.jpg"
import TUSDimage from "../../../images/TUSD.jpg"
import { useTranslation } from 'react-i18next'

const AddLiqTable = () => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    const { t } = useTranslation()
    return (
        <div style={{padding:"25px" ,backgroundColor: darkMode ? "#323742" : "#ffffff"}} >
            <Segment padded='very' textAlign='center' style={{borderRadius:"25px", backgroundColor: darkMode ? "#464B58" : "#ffffff"}}>
            <div className="boxContainerRightPoolsOption" style={{backgroundColor: darkMode ? "#464B58" : "#ffffff"}}>
                        <div className="boxContainerRightPoolsOptionCenter">
                            <div className="boxContainerRightPoolsOptionCenterHeader" style={{marginTop:"30px"}}>
                                {t('Currencies')}
                            </div>
                            <div className="boxContainerRightPoolsOptionCenterList">
                                <div className="boxContainerRightPoolsOptionCenterListItem" style={{backgroundColor: darkMode ? "#23252A" : "#fff", border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8", display:"flex", alignSelf:"center", width:"100%"}}>
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>100.00</span>
                                    <span style={{ display:"flex" ,justifyContent:"center"}}>
                                        <span style={{paddingRight:"8px", color:"#A3B7A7"}}>
                                            {t('Max')}
                                        </span>
                                        <span><img src={DAIimage} className="currencyImage" alt=""/></span>
                                        <span style={{paddingLeft:"8px", color:"#A3B7A7"}}>DAI</span>
                                    </span>
                                    <span>
                                        <div style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                            {t('Balance')}
                                        </div>
                                        <div style={{color: darkMode ? "#ffffff" : "#323742"}}>52045.003</div>
                                    </span>
                                </div>
                            
                            <div className="boxContainerRightPoolsOptionCenterListItem" style={{backgroundColor: darkMode ? "#23252A" : "#fff", border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8", display:"flex", alignSelf:"center", width:"100%"}}>
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>100.00</span>
                                    <span style={{ display:"flex" ,justifyContent:"center"}}>
                                        <span style={{paddingRight:"8px", color:"#A3B7A7"}}>
                                            {t('Max')}
                                        </span>
                                        <span><img src={USDCimage} className="currencyImage" alt=""/></span>
                                        <span style={{paddingLeft:"8px", color:"#A3B7A7"}}>USDC</span>
                                    </span>
                                    <span>
                                        <div style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                            {t('Balance')}
                                        </div>
                                        <div style={{color: darkMode ? "#ffffff" : "#323742"}}>52045.003</div>
                                    </span>
                                </div>
                                <div className="boxContainerRightPoolsOptionCenterListItem" style={{backgroundColor: darkMode ? "#23252A" : "#fff", border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8", display:"flex", alignSelf:"center", width:"100%"}}>
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>100.00</span>
                                    <span style={{ display:"flex" ,justifyContent:"center"}}>
                                        <span style={{paddingRight:"8px", color:"#A3B7A7"}}>
                                            {t('Max')}
                                        </span>
                                        <span><img src={TUDTimage} className="currencyImage" alt=""/></span>
                                        <span style={{paddingLeft:"8px", color:"#A3B7A7"}}>USDT</span>
                                    </span>
                                    <span>
                                        <div style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                            {t('Balance')}
                                        </div>
                                        <div style={{color: darkMode ? "#ffffff" : "#323742"}}>52045.003</div>
                                    </span>
                                </div>
                                <div className="boxContainerRightPoolsOptionCenterListItem" style={{backgroundColor: darkMode ? "#23252A" : "#fff", border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8", display:"flex", alignSelf:"center", width:"100%"}}>
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>100.00</span>
                                    <span style={{ display:"flex" ,justifyContent:"center"}}>
                                        <span style={{paddingRight:"8px", color:"#A3B7A7"}}>
                                            {t('Max')}
                                        </span>
                                        <span><img src={TUSDimage} className="currencyImage" alt=""/></span>
                                        <span style={{paddingLeft:"8px", color:"#A3B7A7"}}>TUSD</span>
                                    </span>
                                    <span>
                                        <div style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                            {t('Balance')}
                                        </div>
                                        <div style={{color: darkMode ? "#ffffff" : "#323742"}}>52045.003</div>
                                    </span>
                                </div>
                                </div>
                            
                        </div>
                        <div className="boxContainerRightPoolsOptionBottom">
                        <div className="footerPoolOptionText">
                        
                           <span className="footerInfoIcon">
                               <BiCheckboxChecked size="25px" style={{color:"#A3B7A7"}}/>
                               {t('InfiAppo')}
                               <VscQuestion size="18px" style={{marginLeft:"5px", color:"gray"}}/>
                            </span>

                           </div>
                           <button className="footerPoolOptionButton">
                           {t('Add_Liquidity')}
                           </button>
                        </div>
                    </div>

            </Segment>
        </div>
    )
}

export default AddLiqTable
