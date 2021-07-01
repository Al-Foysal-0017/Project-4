import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom';
import { userData } from "../../dummyData";
import Chart from '../../components/PoolsComponent/Chart';
import { AiOutlineLeft } from "react-icons/ai";
import CurrencyName from '../../components/PoolsComponent/CurrencyName';
import UnderlyingTokens from '../../components/PoolsComponent/UnderlyingTokens';
import TotalValueLocked from '../../components/PoolsComponent/TotalValueLocked';
import PoolTopbar from '../../components/PoolsComponent/PoolTopbar';
import TablePoolsOptionLeft from "../../components/PoolsComponent/Table/TablePoolsOptionLeft.js";
import { useTranslation } from 'react-i18next'

const Pools_Swap = () => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    const { t } = useTranslation()
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
               
               {/* <div className="boxContainerPoolsOption" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}> */}
               <div className="boxContainerPoolsOption" style={{backgroundColor: darkMode ? "#323742" : "#ffffff", border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8"}}>
                <div className="boxContainerLeftPoolsOption" style={{backgroundColor: darkMode ? "#323742" : "#ffffff", border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8"}}>
                    <div className="boxContainerLeftPoolsOptionTop">
                        <CurrencyName/>
                        <div className="boxContainerLeftPoolsOptionTopValuesSet">
                            <TotalValueLocked/>
                        </div>
                        {/* <div style={{paddingTop:"3px", paddingBottom:"1px"}} className="boxContainerLeftPoolsOptionTopValueName">
                        {t('Underlying_Tokens')}
                        </div>
                        <UnderlyingTokens/> */}
                        <div style={{paddingTop:"20px", paddingBottom:"5px", paddingLeft:"20px"}} className="boxContainerLeftPoolsOptionTopValueName">
                                {t('Underlying_Tokens')} 
                        </div>
                        <div style={{paddingLeft:"8px",}}>
                        <UnderlyingTokens/>
                        </div>
                    </div>
                    <div className="boxContainerLeftPoolsOptionBottom" style={{borderTop: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8"}}>
                    <Chart data={userData} title="$" grid dataKey="$"/>
                    </div>
                </div>
                <div className="boxContainerRightPoolsOption" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                    <div className="boxContainerRightPoolsOptionTop">
                        <PoolTopbar/>
                        
                    </div>



                    <div className="boxContainerRightPoolsOptionCenter"></div>
                    <div className="boxContainerRightPoolsOptionBottom">
                    </div>
                </div>
                
               </div>
                
               {/* </div> */}
            </div>
            <div className="containerRightPools"></div>
        </div>

        <div className="tableResponsiveMobile">
           <TablePoolsOptionLeft/>
           </div>

    </div>
    </div>
    )
}

export default Pools_Swap

