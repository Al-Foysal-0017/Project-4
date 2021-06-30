
        import "./GovernanceInfo.css"
        import React from 'react'
        import Navbar from '../../components/Navbar'
        // import { BiChevronRightCircle } from "react-icons/bi";
        import "./Governance.css"
        import { Link } from 'react-router-dom';
        // import { Grid } from 'semantic-ui-react';
        // import { Form, Select } from 'semantic-ui-react'
        import { Progress } from 'semantic-ui-react'
        import { AiOutlineLeft } from "react-icons/ai";
        import { useTranslation } from 'react-i18next'
        
        const GovernanceInfo = () => {
            const { t } = useTranslation()
            let darkMode = localStorage.getItem('theme')=== 'theme-dark';
            // const Options = [
            //     { key: 'm', text: 'One', value: 'one' },
            //     { key: 'f', text: 'Two', value: 'two' },
            //     { key: 'o', text: 'Three', value: 'three' },
            //   ]
            return (
                <div>
                    <Navbar/>
                    <div className="containerGov" style={{backgroundColor: darkMode ? "#23252A" : "#F7F8FD"}}>
                        <div className="containerLeftPools"></div>
                        
                        <div className="containerCenterGov">
                        <div className="containerCenterHeaderPoolsOptionBox">   
                        <div className="containerCenterHeaderPoolsOptionBoxLeft"> 
                            <div className="BackLinkSpan">
                                <Link to="/governance" className="BackLink">
                                <AiOutlineLeft style={{paddingTop:"4px", marginLeft:"15px"}}/>
                                    {t('Back')}
                                </Link>
                            </div>
                        </div>                
                        <div className="containerCenterHeaderPoolsOptionCenter" style={{color: darkMode ? "#ffffff" : "#323742"}}>{t('Governance')}</div>
                        <div className="containerCenterHeaderPoolsOptionBoxRight"></div>
                    </div>
                           {/* <div className="containerCenterHeaderGov" style={{color: darkMode ? "#ffffff" : "#323742"}}>Governance</div> */}
                           
                           {/* <div className="boxContainerGov" style={{backgroundColor: darkMode ? "#323742" : "#ffffff", border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8"}}> */}
                            
                           <div className="boxContainerGov" style={{backgroundColor: darkMode ? "#323742" : "#ffffff", border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8"}}>
                            <div className="boxContainerLeftGovInfo" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                                <div className="boxContainerLeftGovInfoTop">
                                    <div className="boxContainerLeftGovInfoTopHeader">{t('Description')}</div>
                                    <div className="boxContainerLeftGovInfoTopHeaderInfo" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                    {t('Pool_Proxy2')}
                                    </div>
                                    <div className="description" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                    {t('LOREM2')}
                                    </div>
                                    <div className="description" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                    {t('LOREM3')}
                                    </div>

                                    <div className="LeftGontInfoFooterHeader">
                                    {t('VotingWith')}
                                    </div>
                                    <div className="LeftGontInfoFooterYesNo">
                                        <button className="LeftGontInfoFooterYes"  style={{background: darkMode ? "#5A6AF0" : "#fff", color: darkMode? "#fff":"#5A6AF0"}}>{t('Yes')}</button>
                                        <button className="LeftGontInfoFooterNo"  style={{background: darkMode ? "#5A6AF0" : "#fff", color: darkMode? "#fff":"#5A6AF0"}}>{t('No')}</button>
                                    </div>
                                </div>
                                {/* <div className="boxContainerLeftGovInfoBottom"></div> */}
                            </div>


                            <div className="boxContainerRightGovInfo" style={{backgroundColor: darkMode ? "#323742" : "#ffffff", border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8"}}>
                                    <div className="boxContainerRightGovInfoTop">
                                    <div className="boxContainerRightGovInfoTopHeader">{t('Information')}</div>    
                                    <div>
                                    <div className="boxContainerRightGovInfoTopDate">{t('Date')}</div>    
                                    <div className="boxContainerRightGovInfoTopDate2" style={{color: darkMode ? "#ffffff" : "#323742"}}>05D:13H:33M:44S</div>    
                                    <div className="boxContainerRightGovInfoTopDate3" style={{color: darkMode ? "#ffffff" : "#323742"}}>21/10/2020 22:30:28 --- 28/10/2020</div>    
                                    <div className="boxContainerRightGovInfoTopDate3" style={{color: darkMode ? "#ffffff" : "#323742"}}>22:30:28</div>    
                                    
                                    <div className="boxContainerRightGovInfoTopProposed">{t('Proposed')}</div>    
                                    <div className="boxContainerRightGovInfoTopProposedValue" style={{color: darkMode ? "#ffffff" : "#323742"}}>0X6811...D85A3E</div>    
                                    
                                    <div className="boxContainerRightGovInfoTopSupport">{t('Support')}</div>    
                                    <div className="boxContainerRightGovInfoTopSupportValue" style={{color: darkMode ? "#ffffff" : "#323742"}}><span style={{color: "rgb(7, 182, 7)"}}>100.00%</span> ({">"} 51% {t('REQUIRED')})</div>    
                                    
                                    <div className="boxContainerRightGovInfoTopMinimum">{t('Minimum_Approval')}</div>    
                                    <div className="boxContainerRightGovInfoTopMinimumValue" style={{color: darkMode ? "#ffffff" : "#323742"}}><span style={{color: "red"}}>2.36% </span>({">"} 30% {t('REQUIRED')})</div>    
                                    </div>
                                    </div>
                                {/* <div className="boxContainerRightGovCenter">
                                
                                </div> */}
                                <div className="boxContainerRightGovInfoBottom" style={{borderTop: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8"}}>
                                    <div>
                                        <div className="boxContRightGovInfoBottHeader">
                                            <span>{t('Votes')}</span>
                                            <span><button className="RightGontInfoFooterButton"  style={{background: darkMode ? "#5A6AF0" : "#fff", color: darkMode? "#fff":"#5A6AF0"}}>{t('Show_Voters')}</button></span>
                                        </div>
                                        <div className="boxContRightGovInfoBottProgYES">
                                            <span style={{color: darkMode ? "#ffffff" : "#323742"}}>{t('Yes')}</span>
                                            <span>
                                            <Progress percent={80} success >
                                                <span style={{fontSize:"12px", color:"#A3B7A7"}}>14144.16</span>
                                            </Progress>
                                            </span>
                                        </div>
                                        <div className="boxContRightGovInfoBottProgNo">
                                            <span style={{color: darkMode ? "#ffffff" : "#323742"}}>{t('No')}</span>
                                            <span>
                                            <Progress percent={40} error>
                                            <span style={{fontSize:"12px", color:"#A3B7A7"}}>14144.16</span>
                                            </Progress>
                                            </span>
                                        </div>

                                        <div className="boxContRightGovInfoBottFooter">
                                            <div className="boxContRightGovInfoBottFooterYes">
                                                <div>
                                                <div style={{color: darkMode ? "#ffffff" : "#323742"}} >0XOF26...7241AB</div>
                                                <div style={{color:"#A3B7A7"}}>14144.16</div>
                                                </div>
                                                <div style={{color: "rgb(7, 182, 7)"}}>{t('Yes')}</div>
                                            </div>
                                       
                                            <div className="boxContRightGovInfoBottFooterNo">
                                                <div>
                                                <div style={{color: darkMode ? "#ffffff" : "#323742"}}>0XOF26...7241AB</div>
                                                <div style={{color: "#A3B7A7"}}>14144.16</div>
                                                </div>
                                                <div style={{color:"red"}}>{t('No')}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                               
                            </div>
                            
                           </div>
                            
                           {/* </div> */}
                        </div>
                        <div className="containerRightPools"></div>
                    </div>
                </div>
            )
        }
        
        export default GovernanceInfo
        

