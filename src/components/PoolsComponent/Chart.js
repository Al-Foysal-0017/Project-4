import React, { Component } from 'react';
// import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// import { useTranslation } from 'react-i18next'
import "./Chart.css"



am4core.useTheme(am4themes_animated);

class App extends Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    chart.paddingRight = 20;

    chart.data = [{
      "date": "2021-01-01",
      "value": 250.00
    }, {
      "date": "2021-02-03",
      "value": 600.00
    }, {
      "date": "2021-03-05",
      "value": 700.00
    }, {
      "date": "2021-04-12",
      "value": 900.00
    }];

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    // dateAxis.renderer.grid.template.location = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    dateAxis.renderer.grid.template.strokeWidth = 0;
    valueAxis.renderer.grid.template.strokeWidth = 0;

    valueAxis.renderer.minWidth = 35;

    valueAxis.min= 400;
    valueAxis.max = 900;

    valueAxis.renderer.labels.template.fill = am4core.color("#A3B7A7");
    dateAxis.renderer.labels.template.fill = am4core.color("#A3B7A7");

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";

    series.strokeWidth = 2;
    series.tensionX = 0.77;


    var range = valueAxis.createSeriesRange(series);
    range.value = 0;
    range.endValue = 1000;
    range.contents.stroke = am4core.color("#5A6AF0");
    range.contents.fill = range.contents.stroke;

    // series.tooltipText = "{valueY.value}";
    // chart.cursor = new am4charts.XYCursor();

    // let scrollbarX = new am4charts.XYChartScrollbar();
    // scrollbarX.series.push(series);
    // chart.scrollbarX = scrollbarX;

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark';
  // const { t } = useTranslation()
    return (
     <div className="chart" style={{display:"flex", flexDirection:"column", alignSelf:"center"}}>


<div className="chartTitle" style={{display:"flex", flexDirection:"column", alignSelf:"center", marginBottom:"25px"}}>
         <div className="chartTop">
           <div className="chartTopLeft">
             <span className="chartTopLeftButton" style={{background: darkMode ? "#5A6AF0" : "#F7F8FD", color: darkMode? "#fff":"#5A6AF0"}}>TVL</span>
             <span className="chartTopLeftButton" style={{background: darkMode ? "#5A6AF0" : "#F7F8FD", color: darkMode? "#fff":"#5A6AF0"}}>
               {/* {t('Volume')} */}
               Volume
            </span>
           </div>
          <div className="chartTopRight">
             <span className="chartTopRightButton" style={{background: darkMode ? "#5A6AF0" : "#F7F8FD", color: darkMode? "#fff":"#5A6AF0"}}>D</span>
             <span className="chartTopRightButton" style={{background: darkMode ? "#5A6AF0" : "#F7F8FD", color: darkMode? "#fff":"#5A6AF0"}}>M</span>
            <span className="chartTopRightButton" style={{background: darkMode ? "#5A6AF0" : "#F7F8FD", color: darkMode? "#fff":"#5A6AF0"}}>Y</span>
          </div>
        </div>
       </div>



      <div id="chartdiv" style={{ width: "300px", height: "150px" }}></div>
      
      {/* For hide  redirect link */}
      <div 
       style={{backgroundColor : darkMode ? "#323842" :"white", marginLeft:"-245px", padding:"20px 40px", marginTop:"-25px",  position:"relative"}}
      ></div>


      </div>
    );
  }
}

export default App;




// import "./Chart.css";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   Tooltip,
// } from "recharts";
// import { useTranslation } from 'react-i18next'

// export default function Chart({ title, data, dataKey, grid }) {
//   let darkMode = localStorage.getItem('theme')=== 'theme-dark';
//   const { t } = useTranslation()
//   return (
//     <div className="chart" style={{display:"flex", flexDirection:"column", alignSelf:"center"}}>
//       <div className="chartTitle" style={{display:"flex", flexDirection:"column", alignSelf:"center"}}>
//         <div className="chartTop">
//           <div className="chartTopLeft">
//             <span className="chartTopLeftButton" style={{background: darkMode ? "#5A6AF0" : "#F7F8FD", color: darkMode? "#fff":"#5A6AF0"}}>TVL</span>
//             <span className="chartTopLeftButton" style={{background: darkMode ? "#5A6AF0" : "#F7F8FD", color: darkMode? "#fff":"#5A6AF0"}}>{t('Volume')}</span>
//           </div>
//           <div className="chartTopRight">
//             <span className="chartTopRightButton" style={{background: darkMode ? "#5A6AF0" : "#F7F8FD", color: darkMode? "#fff":"#5A6AF0"}}>D</span>
//             <span className="chartTopRightButton" style={{background: darkMode ? "#5A6AF0" : "#F7F8FD", color: darkMode? "#fff":"#5A6AF0"}}>M</span>
//             <span className="chartTopRightButton" style={{background: darkMode ? "#5A6AF0" : "#F7F8FD", color: darkMode? "#fff":"#5A6AF0"}}>Y</span>
//           </div>
//         </div>
//       </div>
//       <div className="ResponsiveDesktop" >
//         <LineChart 
//           width={300}
//           height={150} 
//           data={data}
//         >
//           <XAxis dataKey="name" stroke="#A3B7A7" />
//           <Line type="monotone" dataKey={dataKey} stroke={darkMode?"#D8D8D8":"#5A6AF0"} />
//           <Tooltip />
//         </LineChart>
//       </div>


//       <div className="ResponsiveMobile" >
//         <LineChart 
//           width={200}
//           height={150} 
//           data={data}
//         >
//           <XAxis dataKey="name" stroke="#A3B7A7" />
//           <Line type="monotone" dataKey={dataKey} stroke={darkMode?"#D8D8D8":"#5A6AF0"} />
//           <Tooltip />
//         </LineChart>
//       </div>
//     </div>
//   );
// }
