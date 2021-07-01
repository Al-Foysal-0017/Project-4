import React from 'react'
import { Header, Table } from 'semantic-ui-react'
import CurrencyName from '../CurrencyName'
import DAIimage from "../../../images/DAIimage.png"
import TUDTimage from "../../../images/TUDT.jpg"
import TUSDimage from "../../../images/TUSD.jpg"
import USDCimage from "../../../images/USDC.jpg"
import poolsImg1 from "../../../images/pools1.jpg"
import poolsImg2 from "../../../images/pools2.jpg"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

let darkMode = localStorage.getItem('theme')=== 'theme-dark'

const TableForPool = () => {
  const { t } = useTranslation()
  return (
    <>
    <Table celled padded style={{border: darkMode ? "1px solid #22262A":"1px solid #d8d9dd", borderRadius:"15px", backgroundColor: darkMode ? "#464B58" : "#fff"}}>
      <Table.Body>  
        <Table.Row>
          <Table.Cell>
            <Header as='h3' textAlign='center' style={{color: darkMode ? "#A3B7A7" : "#323742"}}>
            {t('Pool')}
            </Header>
          </Table.Cell>
          <Table.Cell textAlign='center'>
            <CurrencyName/> <br />
          </Table.Cell>
        </Table.Row>
        {/* style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}} */}
        <Table.Row >
          <Table.Cell>
            <Header as='h3' textAlign='center' style={{color: darkMode ? "#A3B7A7" : "#323742"}}>
            {t('Underlying_Tokens')}
            </Header>
          </Table.Cell>
          <Table.Cell textAlign='center'>
          <div>
              <div style={{display:"flex", justifyContent:"center", paddingBottom:"4px"}}>
                  <span><img src={DAIimage} className="currencyImage" alt="DAI"/></span>
                  <span className="boxContainerPoolsColumn2Value" style={{color: darkMode ? "#fff" : "#323742"}}>$4,534,375.88</span>
              </div>
              <div style={{display:"flex", justifyContent:"center", paddingBottom:"4px"}}>
                  <span><img src={USDCimage} className="currencyImage" alt="DAI"/></span>
                  <span className="boxContainerPoolsColumn2Value" style={{color: darkMode ? "#fff" : "#323742"}}>$4,534,375.88</span>
              </div>
              <div style={{ display:"flex", justifyContent:"center", paddingBottom:"4px" }}>
                  <span><img src={TUDTimage} className="currencyImage" alt="DAI"/></span>
                  <span className="boxContainerPoolsColumn2Value" style={{color: darkMode ? "#fff" : "#323742"}}>$4,534,375.88</span>
              </div>
              <div style={{display:"flex", justifyContent:"center"}}>
                  <span><img src={TUSDimage} className="currencyImage" alt="DAI"/></span>
                  <span className="boxContainerPoolsColumn2Value" style={{color: darkMode ? "#fff" : "#323742"}}>$4,534,375.88</span>
              </div>
          </div>
          </Table.Cell>
        </Table.Row>
  
        <Table.Row>
          <Table.Cell>
            <Header as='h3' textAlign='center' style={{color: darkMode ? "#A3B7A7" : "#323742"}}>
            {t('Value_Locked')}
            </Header>
          </Table.Cell>
          <Table.Cell textAlign='center' style={{color: darkMode ? "#fff" : "#323742"}}>
          4,534,375.88 <br />
          </Table.Cell>
        </Table.Row>
  
        <Table.Row>
          <Table.Cell>
            <Header as='h3' textAlign='center' style={{color: darkMode ? "#A3B7A7" : "#323742"}}>
            {t('Daily_Value')}
            </Header>
          </Table.Cell>
          <Table.Cell textAlign='center' style={{color: darkMode ? "#fff" : "#323742"}}>
          $4,534,375.88<br />
          </Table.Cell>
        </Table.Row>
  
        <Table.Row>
          <Table.Cell>
            <Header as='h3' textAlign='center' style={{color: darkMode ? "#A3B7A7" : "#323742"}}>
            {t('Pool_APY')}
            </Header>
          </Table.Cell>
          <Table.Cell textAlign='center' style={{color: darkMode ? "#fff" : "#323742"}}>
          1.98% <br />
          </Table.Cell>
        </Table.Row>
  
        <Table.Row>
          <Table.Cell>
            <Header as='h3' textAlign='center' style={{color: darkMode ? "#A3B7A7" : "#323742"}}>
            {t('BOOT_APY')}
            </Header>
          </Table.Cell>
          <Table.Cell textAlign='center' style={{color: darkMode ? "#fff" : "#323742"}}>
          1.98% <br />
          </Table.Cell>
        </Table.Row>
  
        <Table.Row>
          <Table.Cell>
            <Header as='h3' textAlign='center'>
            </Header>
          </Table.Cell>
          <Table.Cell textAlign='center'>
            <Link to="/pools/add-liquidity">
                  <button className="boxContainerPoolsColumn7Button">{t('Details')}</button>
            </Link>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    
    
    
    
    
    <Table celled padded style={{border: darkMode ? "1px solid #22262A":"1px solid #d8d9dd", borderRadius:"15px", marginTop:"50px", backgroundColor: darkMode ? "#464B58" : "#fff"}}>
      <Table.Body>  
        <Table.Row >
          <Table.Cell >
            <Header as='h3' textAlign='center' style={{color: darkMode ? "#A3B7A7" : "#323742"}}>
            {t('Pool')}
            </Header>
          </Table.Cell>
          <Table.Cell textAlign='center'>
                         <div className="">
                              <button className="boxContainerLeftPoolsOptionTopButton" style={{color: darkMode ? "#fff" : "#5A6AF0", backgroundColor: darkMode ? "#323742" : "#fff"}}>WETH</button>
                              <button className="boxContainerLeftPoolsOptionTopButton" style={{color: darkMode ? "#fff" : "#5A6AF0", backgroundColor: darkMode ? "#323742" : "#fff"}}>SETH</button>
                          </div> <br />
          </Table.Cell>
        </Table.Row>
        <Table.Row >
          <Table.Cell>
            <Header as='h3' textAlign='center' style={{color: darkMode ? "#A3B7A7" : "#323742"}}>
            {t('Underlying_Tokens')}
            </Header>
          </Table.Cell>
          <Table.Cell textAlign='center'>
          <div>
              <div style={{display:"flex", justifyContent:"center", paddingBottom:"4px"}}>
                  <span><img src={poolsImg2} className="currencyImage" alt="DAI"/></span>
                  <span className="boxContainerPoolsColumn2Value" style={{color: darkMode ? "#fff" : "#323742"}}>$4,534,375.88</span>
              </div>
              <div style={{display:"flex", justifyContent:"center"}}>
                  <span><img src={poolsImg1} className="currencyImage" alt="DAI"/></span>
                  <span className="boxContainerPoolsColumn2Value" style={{color: darkMode ? "#fff" : "#323742"}}>$4,534,375.88</span>
              </div>
          </div>
          </Table.Cell>
        </Table.Row>
  
        <Table.Row>
          <Table.Cell>
            <Header as='h3' textAlign='center' style={{color: darkMode ? "#A3B7A7" : "#323742"}}>
            {t('Value_Locked')}
            </Header>
          </Table.Cell>
          <Table.Cell textAlign='center' style={{color: darkMode ? "#fff" : "#323742"}}>
          4,534,375.88 <br />
          </Table.Cell>
        </Table.Row>
  
        <Table.Row>
          <Table.Cell>
            <Header as='h3' textAlign='center' style={{color: darkMode ? "#A3B7A7" : "#323742"}}>
            {t('Daily_Value')}
            </Header>
          </Table.Cell>
          <Table.Cell textAlign='center' style={{color: darkMode ? "#fff" : "#323742"}}>
          $4,534,375.88<br />
          </Table.Cell>
        </Table.Row>
  
        <Table.Row>
          <Table.Cell>
            <Header as='h3' textAlign='center' style={{color: darkMode ? "#A3B7A7" : "#323742"}}>
            {t('Pool_APY')}
            </Header>
          </Table.Cell>
          <Table.Cell textAlign='center' style={{color: darkMode ? "#fff" : "#323742"}}>
          1.98% <br />
          </Table.Cell>
        </Table.Row>
  
        <Table.Row>
          <Table.Cell>
            <Header as='h3' textAlign='center' style={{color: darkMode ? "#A3B7A7" : "#323742"}}>
            {t('BOOT_APY')}
            </Header>
          </Table.Cell>
          <Table.Cell textAlign='center' style={{color: darkMode ? "#fff" : "#323742"}}>
          1.98% <br />
          </Table.Cell>
        </Table.Row>
  
        <Table.Row>
          <Table.Cell>
            <Header as='h3' textAlign='center'>
            </Header>
          </Table.Cell>
          <Table.Cell textAlign='center'>
          <Link to="/pools/add-liquidity">
                  <button className="boxContainerPoolsColumn7Button">{t('Details')}</button>
            </Link>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </>
  )
}

export default TableForPool





