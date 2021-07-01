import React from 'react'
import { Link } from 'react-router-dom';
import {useLocation} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const PoolTopbar = () => {
    const {pathname} = useLocation();
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    const { t } = useTranslation()
    return (
        <div className="boxContainerRightPoolsOptionTopLink" style={{display:"flex", justifyContent:"center"}}>
                            {pathname==="/pools/add-liquidity" ?
                              <Link to="/pools/add-liquidity">
                                  <div style={{background:"#5A6AF0", color:"#fff", padding:"10px 25px", borderRadius:"5px", border:"1px solid #5A6AF0"}} className="boxContainerRightPoolsOptionTopButton">
                                        {t('Add_Liquidity')}
                                    </div>
                              </Link>
                            :
                               <Link to="/pools/add-liquidity">
                                   <div className="boxContainerRightPoolsOptionTopButton"  style={{backgroundColor: darkMode ? "#22262A" : "#fff", color: darkMode ? "gray" : "#d8d9dd",  borderLeft:"1px solid #d8d9dd", borderBottomLeftRadius:"5px", borderTopLeftRadius:"5px"}}>
                                        {t('Add_Liquidity')}
                                    </div>
                               </Link>
                            }
                            {pathname==="/pools/remove-liquidity" ?
                              <Link to="/pools/remove-liquidity">
                                  <div style={{background:"#5A6AF0", color:"#fff", padding:"10px 25px", borderRadius:"5px", border:"1px solid #5A6AF0"}} className="boxContainerRightPoolsOptionTopButton">
                                        {t('Remove_Liquidity')}
                                    </div>
                              </Link>
                            :
                               <Link to="/pools/remove-liquidity">
                                   <div className="boxContainerRightPoolsOptionTopButton" style={{backgroundColor: darkMode ? "#22262A" : "#fff", color: darkMode ? "gray" : "#d8d9dd"}}>
                                        {t('Remove_Liquidity')}
                                    </div>
                               </Link>
                            }
                            {pathname==="/pools/swap" ?
                              <Link to="/pools/swap">
                                  <div style={{background:"#5A6AF0", color:"#fff", padding:"10px 25px", borderRadius:"5px", border:"1px solid #5A6AF0"}} className="boxContainerRightPoolsOptionTopButton">
                                        {t('Swap')}
                                    </div>
                              </Link>
                            :
                               <Link to="/pools/swap">
                                   <div className="boxContainerRightPoolsOptionTopButton" style={{backgroundColor: darkMode ? "#22262A" : "#fff", color: darkMode ? "gray" : "#d8d9dd"}}>
                                        {t('Swap')}
                                    </div>
                               </Link>
                            }
                            {pathname==="/pools/locking" ?
                              <Link to="/pools/locking">
                                  <div style={{background:"#5A6AF0", color:"#fff", padding:"10px 25px", borderRadius:"5px", border:"1px solid #5A6AF0"}} className="boxContainerRightPoolsOptionTopButton">
                                        {t('Locking')}
                                    </div>
                              </Link>
                            :
                               <Link to="/pools/locking">
                                   <div className="boxContainerRightPoolsOptionTopButton" style={{backgroundColor: darkMode ? "#22262A" : "#fff", color: darkMode ? "gray" : "#d8d9dd", borderRight:"1px solid #d8d9dd", borderBottomRightRadius:"5px", borderTopRightRadius:"5px"}}>
                                        {t('Locking')}
                                    </div>
                               </Link>
                            }
        </div>
    )
}

export default PoolTopbar
