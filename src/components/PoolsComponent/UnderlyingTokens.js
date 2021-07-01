import React from 'react'
import DAIimage from "../../images/DAIimage.png"
import TUDTimage from "../../images/TUDT.jpg"
import TUSDimage from "../../images/TUSD.jpg"
import USDCimage from "../../images/USDC.jpg"

const UnderlyingTokens = () => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    return (
        <div>
            <div style={{display:"flex", textAlign:"center", paddingBottom:"6px"}}>
                <span><img src={DAIimage} className="currencyImage" alt="DAI"/></span>
                <span className="boxContainerPoolsColumn2Value" style={{color: darkMode ? "#fff" : "#323742"}}>$4,534,375.88</span>
            </div>
            <div style={{display:"flex", textAlign:"center",  paddingBottom:"6px"}}>
                <span><img src={USDCimage} className="currencyImage" alt="DAI"/></span>
                <span className="boxContainerPoolsColumn2Value" style={{color: darkMode ? "#fff" : "#323742"}}>$4,534,375.88</span>
            </div>
            <div style={{display:"flex", textAlign:"center",  paddingBottom:"6px"}}>
                <span><img src={TUDTimage} className="currencyImage" alt="DAI"/></span>
                <span className="boxContainerPoolsColumn2Value" style={{color: darkMode ? "#fff" : "#323742"}}>$4,534,375.88</span>
            </div>
            <div style={{display:"flex", textAlign:"center", paddingBottom:"10px"}}>
                <span><img src={TUSDimage} className="currencyImage" alt="DAI"/></span>
                <span className="boxContainerPoolsColumn2Value" style={{color: darkMode ? "#fff" : "#323742"}}>$4,534,375.88</span>
            </div>
        </div>
    )
}

export default UnderlyingTokens
