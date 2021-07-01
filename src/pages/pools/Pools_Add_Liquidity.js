import "./Pools_Add_Liquidity.css"
import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom';
import DAIimage from "../../images/DAIimage.png"
import TUDTimage from "../../images/TUDT.jpg"
import USDCimage from "../../images/USDC.jpg"
import TUSDimage from "../../images/TUSD.jpg"
import { userData } from "../../dummyData";
import Chart from '../../components/PoolsComponent/Chart';
import { AiOutlineLeft } from "react-icons/ai";
import CurrencyName from '../../components/PoolsComponent/CurrencyName';
import UnderlyingTokens from '../../components/PoolsComponent/UnderlyingTokens';
import TotalValueLocked from '../../components/PoolsComponent/TotalValueLocked';
import PoolTopbar from '../../components/PoolsComponent/PoolTopbar';
// import { BiCheckboxChecked } from "react-icons/bi";
import { VscQuestion } from "react-icons/vsc";
import TablePoolsOptionLeft from "../../components/PoolsComponent/Table/TablePoolsOptionLeft.js";
import AddLiqTable from "../../components/PoolsComponent/Table/AddLiqTable";
import { useTranslation } from 'react-i18next'
import { Checkbox } from 'antd';

const Pools_Add_Liquidity = () => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    const { t } = useTranslation()
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      }
    return (
        <div>
            <Navbar/>
            <div>
            <div className="containerPoolsOption" style={{backgroundColor: darkMode ? "#23252A" : "#F7F8FD"}}>
                <div className="containerLeftPoolsOption"></div>
                
                <div className="containerCenterPoolsOption">
                    <div className="containerCenterHeaderPoolsOptionBox">   
                        <div className="containerCenterHeaderPoolsOptionBoxLeft"> 
                            <div className="BackLinkSpan">
                                <Link to="/pools" className="BackLink">
                                <AiOutlineLeft style={{paddingTop:"4px", marginLeft:"15px"}}/>
                                    {t('Back')}
                                </Link>
                            </div>
                        </div>                
                        <div className="containerCenterHeaderPoolsOptionCenter" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                            {t('Details')}    
                        </div>
                        <div className="containerCenterHeaderPoolsOptionBoxRight"></div>
                    </div>
                   
                   {/* <div className="boxContainerPoolsOption" style={{backgroundColor: darkMode ? "#323742" : "#ffffff", border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8"}}> */}
                   <div className="boxContainerPoolsOption" style={{backgroundColor: darkMode ? "#323742" : "#ffffff", border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8"}}>
                    <div className="boxContainerLeftPoolsOption" style={{backgroundColor: darkMode ? "#323742" : "#ffffff", border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8"}}>
                        <div className="boxContainerLeftPoolsOptionTop">
                            <CurrencyName/>
                            <div className="boxContainerLeftPoolsOptionTopValuesSet">
                                <TotalValueLocked/>
                            </div>
                            <div style={{paddingTop:"20px", paddingBottom:"5px", paddingLeft:"20px"}} className="boxContainerLeftPoolsOptionTopValueName">
                                {t('Underlying_Tokens')} 
                            </div>
                            <div style={{paddingLeft:"8px",}}>
                            <UnderlyingTokens/>
                            </div>
                        </div>
                        <div className="boxContainerLeftPoolsOptionBottom" style={{borderTop: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8"}}>
                        <Chart data={userData} title="User Analytics" grid dataKey="$"/>
                        </div>
                    </div>
                    <div className="boxContainerRightPoolsOption" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                        <div className="boxContainerRightPoolsOptionTop">
                            <PoolTopbar/>
                        </div>


                        <div className="boxContainerRightPoolsOptionCenter">
                            <div className="boxContainerRightPoolsOptionCenterHeader" style={{marginTop:"40px"}}>
                                {t('Currencies')}
                            </div>
                            <div className="boxContainerRightPoolsOptionCenterList">
                                <div className="boxContainerRightPoolsOptionCenterListItem" style={{backgroundColor: darkMode ? "#23252A" : "#fff", border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8"}}>
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>100.00</span>
                                    <span style={{ display:"flex" ,justifyContent:"center"}}>
                                        <span style={{paddingRight:"8px", color:"#A3B7A7"}}>
                                            {t('Max')}
                                        </span>
                                        <span><img src={DAIimage} className="currencyImage" alt=""/></span>
                                        <span style={{paddingLeft:"8px", color:"#A3B7A7"}}>
                                            DAI &nbsp; &nbsp;
                                        </span>
                                    </span>
                                    <span>
                                        <div style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                            {t('Balance')}
                                        </div>
                                        <div style={{color: darkMode ? "#ffffff" : "#323742"}}>52045.003</div>
                                    </span>
                                </div>
                                <div className="boxContainerRightPoolsOptionCenterListItem" style={{backgroundColor: darkMode ? "#23252A" : "#fff", border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8"}}>
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
                                <div className="boxContainerRightPoolsOptionCenterListItem" style={{backgroundColor: darkMode ? "#23252A" : "#fff", border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8"}}>
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
                                <div className="boxContainerRightPoolsOptionCenterListItem" style={{backgroundColor: darkMode ? "#23252A" : "#fff", border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8"}}>
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
                               {/* <BiCheckboxChecked size="25px" style={{color:"#A3B7A7"}}/> */}
                               <Checkbox onChange={onChange} style={{fontSize:"13px", color:"gray"}}>{t('InfiAppo')}</Checkbox>
                                    {/* {t('InfiAppo')} */}
                               <VscQuestion size="18px" style={{marginLeft:"5px", color:"gray"}}/>
                            </span>

                            {/* <TablePoolsOptionLeft />
                            <Segment>Naiem</Segment> */}

                           </div>
                           <button className="footerPoolOptionButton">
                                {t('Add_Liquidity')}
                           </button>
                        </div>
                    </div>

                   
                    
                    
                   </div>
                  
                   {/* </div> */}
      
                </div>
          
                <div className="containerRightPools"></div>
            </div>
           



            <div className="tableResponsiveMobile">
           <TablePoolsOptionLeft/>
           <AddLiqTable/>
           </div>



           
        </div>
        </div>
    )
}

export default Pools_Add_Liquidity
