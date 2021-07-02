import React from 'react'
import { Segment } from 'semantic-ui-react'
import CurrencyName from '../CurrencyName'
import TotalValueLocked from '../TotalValueLocked'
import DAIimage from "../../../images/DAIimage.png"
import TUDTimage from "../../../images/TUDT.jpg"
import TUSDimage from "../../../images/TUSD.jpg"
import USDCimage from "../../../images/USDC.jpg"
import { Link } from 'react-router-dom'
import PoolTopbar from '../PoolTopbar'
import { AiOutlineLeft } from "react-icons/ai";
// import Chart from "../Chart"
import { useTranslation } from 'react-i18next'

const TablePoolsOptionLeft = () => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    const { t } = useTranslation()
    return (
        <> 
            <div className="containerCenterHeaderPoolsOptionBox" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>   
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
            <div style={{backgroundColor: darkMode ? "#323742" : "#ffffff", paddingTop:"20px"}}>
            <PoolTopbar/>
            </div>
            
            <div style={{padding:"25px" ,backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
            <Segment padded='very' textAlign='center' style={{borderRadius:"25px", backgroundColor: darkMode ? "#464B58" : "#ffffff"}}>
            <div className="" style={{paddingTop:"20px", paddingBottom:"20px",}}>
                            <div style={{}}>
                            <CurrencyName/>
                            </div>
                            <div className="boxContainerLeftPoolsOptionTopValuesSet" style={{display:"flex", justifyContent:"center"}}>
                                <TotalValueLocked/>
                            </div>
                            <div style={{paddingTop:"20px", marginLeft:"10px"}} className="boxContainerLeftPoolsOptionTopValueName">
                                {t('Underlying_Tokens')}
                            </div>

            <div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <span><img src={DAIimage} className="currencyImage" alt="DAI"/></span>
                <span className="boxContainerPoolsColumn2Value" style={{color: darkMode ? "#fff" : "#323742"}}>$4,534,375.88</span>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <span><img src={USDCimage} className="currencyImage" alt="DAI"/></span>
                <span className="boxContainerPoolsColumn2Value" style={{color: darkMode ? "#fff" : "#323742"}}>$4,534,375.88</span>
            </div>
            <div style={{ display:"flex", justifyContent:"center" }}>
                <span><img src={TUDTimage} className="currencyImage" alt="DAI"/></span>
                <span className="boxContainerPoolsColumn2Value" style={{color: darkMode ? "#fff" : "#323742"}}>$4,534,375.88</span>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <span><img src={TUSDimage} className="currencyImage" alt="DAI"/></span>
                <span className="boxContainerPoolsColumn2Value" style={{color: darkMode ? "#fff" : "#323742"}}>$4,534,375.88</span>
            </div>
            </div>
            </div>
            <div style={{display:"flex", justifyContent:"center", }}>
            {/* <Chart  /> */}
            {/* <Chart data={userData} title="User Analytics" grid dataKey="$"/> */}
            </div>
            
            </Segment>


            </div>
        </>
    )
}

export default TablePoolsOptionLeft
