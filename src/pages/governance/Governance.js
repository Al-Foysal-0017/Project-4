import React from 'react'
import Navbar from '../../components/Navbar'
import { BiChevronRightCircle } from "react-icons/bi";
import "./Governance.css"
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { Form, Select } from 'semantic-ui-react'
// import DatePicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
// import "react-datepicker/dist/react-datepicker.css";
import logoImage from "../../images/logo1.png"
import { useTranslation } from 'react-i18next'
//   import DateFnsUtils from '@date-io/date-fns';
  import { DatePicker } from 'antd';
  import moment from 'moment';
  
//   const { RangePicker } = DatePicker;
  
  const dateFormat = 'YYYY/MM/DD';

const Governance = () => {
    // const [startDate, setStartDate] = useState(new Date());
    let darkMode = localStorage.getItem('theme')=== 'theme-dark';
    const { t } = useTranslation()
    const Options = [
        { key: 'm', text: 'One', value: 'one' },
        { key: 'f', text: 'Two', value: 'two' },
        { key: 'o', text: 'Three', value: 'three' },
      ]
    //   const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };
    return (
        <div>
            <Navbar/>
            <div className="containerGov" style={{backgroundColor: darkMode ? "#23252A" : "#F7F8FD"}}>
                <div className="containerLeftPools"></div>
                
                <div className="containerCenterGov">
                   <div className="containerCenterHeaderGov" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                       {t('Governance')}
                    </div>
                   
                   {/* <div className="boxContainerGov" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}> */}
                    
                   <div className="boxContainerGov" style={{backgroundColor: darkMode ? "#323742" : "#ffffff", border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8"}}>
                    <div className="boxContainerLeftGov" style={{backgroundColor: darkMode ? "#323742" : "#ffffff", border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8"}}>
                        <div className="boxContainerLeftGovTop">
                            <div className="HeaderOverview">{t('Overview')}</div>
                            <div className="overViewItems">
                                <div className="overViewItem">
                                    <div className="overViewItemRow1" style={{color: darkMode ? "#ffffff" : "#323742"}}>1,690,458.81 ${t('BOOT')}</div>
                                    <div className="overViewItemRow2">{t('Total_$BOOT_vote-locked')}</div>
                                </div>
                                <div className="overViewItem">
                                    <div className="overViewItemRow1" style={{color: darkMode ? "#ffffff" : "#323742"}}>1,690,458.81 ${t('BOOT')}</div>
                                    <div className="overViewItemRow2">{t('Total_$BOOT_vote-locked')}</div>
                                </div>
                                <div className="overViewItem">
                                    <div className="overViewItemRow1" style={{color: darkMode ? "#ffffff" : "#323742"}}>1,690,458.81 ${t('BOOT')}</div>
                                    <div className="overViewItemRow2">{t('Total_$BOOT_vote-locked')}</div>
                                </div>
                                <div className="overViewItem">
                                    <div className="overViewItemRow1" style={{color: darkMode ? "#ffffff" : "#323742"}}>1,690,458.81 ${t('BOOT')}</div>
                                    <div className="overViewItemRow2">{t('Total_$BOOT_vote-locked')}</div>
                                </div>
                            </div>
                        </div>
                        <div className="boxContainerLeftGovBottom" style={{borderTop: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8"}}>
                            <div className="HeaderManageLocking">{t('Manage_Locking')}</div>
                            <div className="ManageItems">
                                <div className="ManageItem">
                                    <div className="label" style={{marginLeft:"15px", marginBottom:"5px"}}>{t('Add')} {t('Lock')}</div>
                                    <div className="setTwoBox" style={{border: darkMode ? "1.5px solid #22262A" : "1px solid #D8D8D8"}}>
                                        <div className="setBox1">
                                            <span style={{color: darkMode ? "#ffffff" : "#323742",}}>91.05</span>
                                            <span style={{color: darkMode ? "#ffffff" : "#323742", display:"flex"}}> 
                                            <span style={{fontSize:"12px", color:"#A3B7A7"}}>{t('Max')}</span>
                                            <img src={logoImage} style={{width:"18px", height:"18px", border:"1px solid #5A6AF0", borderRadius:"50%", marginLeft:"5px", marginRight:"5px",}} alt="cx"/>
                                             <span style={{color: darkMode ? "#ffffff" : "#323742", fontWeight:"bold"}} >${t('BOOT')}</span>
                                            </span>
                                        </div>
                                        <div className="setBox2" style={{paddingTop: "8px", fontSize:"12px"}}>${t('BOOT')} {t('Balance')}: <span style={{color: darkMode ? "#ffffff" : "#323742", fontWeight:"bold"}}> 525.97</span></div>
                                    </div>
                                    <button className="GovButton">{t('Add')}</button>
                                </div>
                                <div className="ManageItem">
                                    <div className="label" style={{marginLeft:"15px", marginBottom:"5px"}}>{t('Locked_Until')}</div>
                                    {/* <div className="setTwoBox"> */}
                                    <div className="setTwoBoxForDate">
                                      
                                    <DatePicker 
                                            className="RightLockingShowBoxDate" 
                                            style={{backgroundColor: darkMode ? "#22272A" : "#ffffff", border: darkMode ? "1px solid #22262A" : "1px solid #5A6AF0", color: darkMode ? "#ffffff" : "#323742"}} 
                                            defaultValue={moment('2015/01/01', dateFormat)} 
                                            format={dateFormat} 
                                        />

                                    </div>



                                    <button className="GovButton">{t('Lock')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="boxContainerRightGov" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                            <div className="boxContainerRightGovTop">
                            <Grid columns='equal'>
                                <Grid.Row>
                                <Grid.Column></Grid.Column>
                                <Grid.Column></Grid.Column>
                                <Grid.Column></Grid.Column>
                                {/* <Grid.Column></Grid.Column> */}
                                <Grid.Column>
                                    <button className="boxContainerRightGovTopButton">
                                        <Link to="/governance-info" style={{color:"#fff"}}>
                                        {t('New_Proposal')}
                                        </Link>
                                    </button>
                                </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                <Grid.Column>
                                    <div className="boxContainerRightGovTopHeader" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                        {t('Proposal')} 24
                                    </div>
                                </Grid.Column>
                                <Grid.Column></Grid.Column>
                                <Grid.Column></Grid.Column>
                                </Grid.Row>
                            </Grid>
                            </div>
                        <div className="boxContainerRightGovCenter" style={{borderTop: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8"}}>
                        <Form className="boxContainerRightGovCenterForm">
                            <Form.Group widths='equal'>
                            <Form.Field
                                style={{backgroundColor: darkMode?"#22262A":"#fff"}}
                                control={Select}
                                options={Options}
                                label={{ children: t('Status'), htmlFor: 'form-select-control' }}
                                placeholder={t('All')}
                                search
                                searchInput={{ id: 'form-select-control' }}
                            />
                            <Form.Field
                                style={{backgroundColor: darkMode?"#22262A":"#fff"}}
                                control={Select}
                                options={Options}
                                label={{ children: t('Outcome'), htmlFor: 'form-select-control' }}
                                placeholder={t('All')}
                                search
                                searchInput={{ id: 'form-select-control' }}
                            />
                            <Form.Field
                                style={{backgroundColor: darkMode?"#22262A":"#fff"}}
                                control={Select}
                                options={Options}
                                label={{ children: t('App'), htmlFor: 'form-select-control' }}
                                placeholder={t('All')}
                                search
                                searchInput={{ id: 'form-select-control' }}
                            />
                            </Form.Group>
                        </Form>
                        </div>
                        <div className="boxContainerRightGovBottom">
                            <div className="boxContainerRightGovBottomBox" style={{backgroundColor: darkMode ? "#323742" : "#ffffff", border: darkMode ? "1px solid #22262A" : "1px solid #D8D8D8"}}>
                                <button className="boxContainerRightGovBottomButton" style={{background: darkMode ? "#5A6AF0" : "#fff", color: darkMode? "#fff":"#5A6AF0"}}>
                                    {t('Active')}
                                </button>
                                <div className="boxContainerRightGovBottomHeader" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                    {t('Pool_proxy')}</div>
                                <div className="boxContainerRightGovBottomBody" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                    {t('LOREM1')}
                                </div>
                                <div className="boxContainerRightGovBottomFooter" style={{color: darkMode ? "#ffffff" : "#323742"}}>05D:13H-33M:44S</div>
                            </div>
                        </div>

                        <div className="footerGov">
                        <div style={{display:"flex", flex:"10.5"}}></div>
                        <div style={{display:"flex", flex:"1.5"}} className="footerRightGov">
                        <span className="footerRight1Gov" style={{color: darkMode ? "#fff" : "#5A6AF0"}}>1</span>
                        <span className="footerRight2Gov" style={{color: darkMode ? "#fff" : "#5A6AF0"}}>2</span>
                        <span style={{paddingRight:"20px", cursor: "pointer"}}>
                            <Link to="/governance-info">
                            <BiChevronRightCircle style={{color: darkMode ? "#fff" : "#5A6AF0"}} fontSize="25px"/>
                            </Link>
                        </span>
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

export default Governance
