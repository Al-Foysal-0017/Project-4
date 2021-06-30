import React from 'react'
import { Segment } from 'semantic-ui-react'
import bootlogo from "../../../images/logo1.png"
import { DatePicker } from 'antd';
import moment from 'moment';
import { useTranslation } from 'react-i18next'
const dateFormat = 'YYYY/MM/DD';

const LockingTable = () => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    const { t } = useTranslation()
    return (
        <div style={{padding:"30px", backgroundColor: darkMode ? "#323842" : "#ffffff"}}>
            <Segment padded='very' textAlign='center' style={{padding:"15px", borderRadius:"25px", backgroundColor: darkMode ? "#464C58" : "#ffffff"}}>
            <div className="boxContainerRightPoolsLocking" style={{backgroundColor: darkMode ? "#464C58" : "#ffffff"}}>                        
                <div className="boxContainerRightPoolsOptionCenter" style={{flex:5}}>
                <div className="LockingHeader">{t('Lock_to_Earn_Rewards')}</div>
                <div className="LockingRightCenter">
                    <div className="RightLockingTop">
                        <div className="TwoRowBorderSet" style={{border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8"}}>
                        <div className="RightLockingShowBox" style={{backgroundColor: darkMode ? "#22262A" : "#ffffff", border: darkMode ? "1px solid #22262A" : "1px solid #5A6AF0"}}>
                            <span style={{color: darkMode ? "#ffffff" : "#323742"}}>0.00</span>
                            <span style={{color:"#A3B7A7", fontSize:"12px"}}>{t('Max')} <span style={{color: darkMode ? "#ffffff" : "#323742", fontSize:"14px"}}>SWUSD</span></span>
                        </div>
                        <div className="RightLockingShowBoxDown">
                            <span>{t('BOOT')}USD {t('Balance')}:</span>
                            <span style={{marginLeft:"5px", color: darkMode ? "#ffffff" : "#323742"}}>525.03</span>
                        </div>
                        </div>
                        <button style={{marginTop:"5px", marginBottom:"10px"}}>
                            {t('Deposit')}
                        </button>
                    </div>
                    <div className="RightLockingCenter">
                    <div className="TwoRowBorderSet" style={{border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8"}}>
                    <div className="RightLockingShowBox" style={{backgroundColor: darkMode ? "#22262A" : "#ffffff", border: darkMode ? "1px solid #22262A" : "1px solid #5A6AF0"}}>
                            <span style={{color: darkMode ? "#ffffff" : "#323742"}}>525.00</span>
                            <span style={{color:"#A3B7A7", fontSize:"12px"}}>{t('Max')} <span style={{color: darkMode ? "#ffffff" : "#323742", fontSize:"14px"}}>SWUSD</span></span>
                        </div>
                        <div className="RightLockingShowBoxDown">
                            <span>{t('BOOT')}USD {t('Balance')}:</span>
                            <span style={{marginLeft:"5px", color: darkMode ? "#ffffff" : "#323742"}}>525.03</span>
                        </div>
                    </div>
                        <button style={{marginTop:"5px", marginBottom:"10px"}}>
                            {t('Withdraw')}
                        </button>
                    </div>
                    <div className="RightLockingBottom">
                    <div className="TwoRowBorderSet" style={{border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8"}}>
                    <div className="RightLockingShowBox" style={{backgroundColor: darkMode ? "#22262A" : "#ffffff", border: darkMode ? "1px solid #22262A" : "1px solid #5A6AF0"}}>   
                            <span style={{color: darkMode ? "#ffffff" : "#323742"}}>1233.37</span>
                            <span style={{color: darkMode ? "#ffffff" : "#323742", display:"flex"}}>
                                <img src={bootlogo} style={{height:"18px", width:"18px", borderRadius:"50%", border:"1px solid #5A6AF0", marginRight:"5px"}} alt=""/>${t('BOOT')}</span>
                        </div>
                        <div className="RightLockingShowBoxDown">
                            <span>{t('BOOT')}USD {t('Balance')}:</span>
                            <span style={{marginLeft:"5px", color: darkMode ? "#ffffff" : "#323742"}}>525.03</span>
                        </div>
                    </div>
                        <button style={{marginTop:"5px", marginBottom:"30px"}}>
                            {t('Claim')}
                        </button>
                    </div>
                </div>
                </div>
                    
    
                       
                        <div className="boxContainerRightPoolsOptionBottom" style={{borderTop: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8",}}>
                        <div className="LockingHeader">{t('Lock')} ${t('BOOT')} {t('to')} {t('increase')} APY</div>
                        <div className="LockingForm2">
                            <div className="LockingForm2Top">
                                <div style={{display:"flex", flexDirection:"row"}}>
                                    <span style={{display:"flex", width:"100%", color:" #A3B7A7", marginLeft:"8px"}}>{t('My')} APY</span>
                                    <span style={{display:"flex", width:"100%", color:" #A3B7A7", marginLeft:"8px"}}>{t('Boost')}</span>
                                </div>
                            <div className="TwoRowBorderSet mb-15" style={{display:"flex", width:"100%", border:"none"}}>
                                <div className="RightLockingShowBox" style={{width:"50%", marginRight:"5px", backgroundColor: darkMode ? "#22262A" : "#ffffff", border: darkMode ? "1px solid #22262A" : "1px solid #5A6AF0"}}>
                                        <span style={{color: darkMode ? "#ffffff" : "#323742", }}>17.33%</span>
                                </div>
                                <div className="RightLockingShowBox" style={{width:"50%", marginLeft:"5px", backgroundColor: darkMode ? "#22262A" : "#ffffff", border: darkMode ? "1px solid #22262A" : "1px solid #5A6AF0"}}>
                                        <span style={{color: darkMode ? "#ffffff" : "#323742"}}>2.40X</span>
                                </div>
                            </div>
                                <div style={{color:" #A3B7A7", marginLeft:"8px"}}>{t('Locking')}</div>
                                <div className="TwoRowBorderSet mb-15" style={{ border:"none"}}>
                                <div className="RightLockingShowBox" style={{backgroundColor: darkMode ? "#22262A" : "#ffffff", border: darkMode ? "1px solid #22262A" : "1px solid #5A6AF0"}}>
                                        <span style={{color: darkMode ? "#ffffff" : "#323742"}}>91.04</span>
                                        <span style={{color:"#A3B7A7", fontSize:"12px", display:"flex"}}>{t('Max')} 
                                        <span style={{color: darkMode ? "#ffffff" : "#323742", fontSize:"14px", display:"flex"}}>
                                        <img src={bootlogo} style={{height:"18px", width:"18px", borderRadius:"50%", border:"1px solid #5A6AF0", marginRight:"5px", marginLeft:"5px"}} alt=""/>
                                        ${t('BOOT')}</span></span>
                                </div>
                                </div>
                                <div style={{marginTop:"10px", color:" #A3B7A7", marginLeft:"8px"}}>{t('Add')} {t('Lock')}</div>
                                <div className="TwoRowBorderSet" style={{border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8"}}>
                                <div className="RightLockingShowBox" style={{backgroundColor: darkMode ? "#22262A" : "#ffffff",  border: darkMode ? "1px solid #22262A" : "1px solid #5A6AF0" }}>
                                        <span style={{color: darkMode ? "#ffffff" : "#323742"}}>91.05</span>
                                        <span style={{color:"#A3B7A7", fontSize:"12px", display:"flex"}}>{t('Max')} 
                                        <span style={{color: darkMode ? "#ffffff" : "#323742", fontSize:"14px", display:"flex"}}>
                                        <img src={bootlogo} style={{height:"18px", width:"18px", borderRadius:"50%", border:"1px solid #5A6AF0", marginRight:"5px", marginLeft:"5px"}} alt=""/>
                                        ${t('BOOT')}</span></span>
                                    </div>
                                    <div className="RightLockingShowBoxDown">
                                        <span>{t('BOOT')}USD {t('Balance')}:</span>
                                        <span style={{marginLeft:"5px", color: darkMode ? "#ffffff" : "#323742"}}>525.03</span>
                                    </div>
                                </div>
                                    <button className="alignSelfCenter" style={{marginTop:"10px"}}>{t('Add')}</button>
                            </div>
                            <div className="LockingForm2Bottom">
                            <div style={{marginTop:"30px",color:" #A3B7A7", marginLeft:"8px"}}>{t('Locked_Until')}</div>
                             <DatePicker 
                                            className="RightLockingShowBoxDate" 
                                            style={{backgroundColor: darkMode ? "#22272A" : "#ffffff", border: darkMode ? "1px solid #22262A" : "1px solid #5A6AF0", color: darkMode ? "#ffffff" : "#323742"}} 
                                            defaultValue={moment('2015/01/01', dateFormat)} 
                                            format={dateFormat} 
                                        />
                            <button className="alignSelfCenter" style={{marginTop:"10px"}}>{t('Lock')}</button>
                            </div>
                        </div>
                        </div>


                        </div>
            </Segment>
        </div>
    )
}

export default LockingTable
