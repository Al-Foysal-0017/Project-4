import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from "recharts";
import { useTranslation } from 'react-i18next'

export default function Chart({ title, data, dataKey, grid }) {
  let darkMode = localStorage.getItem('theme')=== 'theme-dark';
  const { t } = useTranslation()
  return (
    <div className="chart" style={{display:"flex", flexDirection:"column", alignSelf:"center"}}>
      <div className="chartTitle" style={{display:"flex", flexDirection:"column", alignSelf:"center"}}>
        <div className="chartTop">
          <div className="chartTopLeft">
            <span className="chartTopLeftButton" style={{background: darkMode ? "#5A6AF0" : "#F7F8FD", color: darkMode? "#fff":"#5A6AF0"}}>TVL</span>
            <span className="chartTopLeftButton" style={{background: darkMode ? "#5A6AF0" : "#F7F8FD", color: darkMode? "#fff":"#5A6AF0"}}>{t('Volume')}</span>
          </div>
          <div className="chartTopRight">
            <span className="chartTopRightButton" style={{background: darkMode ? "#5A6AF0" : "#F7F8FD", color: darkMode? "#fff":"#5A6AF0"}}>D</span>
            <span className="chartTopRightButton" style={{background: darkMode ? "#5A6AF0" : "#F7F8FD", color: darkMode? "#fff":"#5A6AF0"}}>M</span>
            <span className="chartTopRightButton" style={{background: darkMode ? "#5A6AF0" : "#F7F8FD", color: darkMode? "#fff":"#5A6AF0"}}>Y</span>
          </div>
        </div>
      </div>
      <div className="ResponsiveDesktop" >
        <LineChart 
          width={300}
          height={150} 
          data={data}
        >
          <XAxis dataKey="name" stroke="#A3B7A7" />
          <Line type="monotone" dataKey={dataKey} stroke={darkMode?"#D8D8D8":"#5A6AF0"} />
          <Tooltip />
        </LineChart>
      </div>


      <div className="ResponsiveMobile" >
        <LineChart 
          width={200}
          height={150} 
          data={data}
        >
          <XAxis dataKey="name" stroke="#A3B7A7" />
          <Line type="monotone" dataKey={dataKey} stroke={darkMode?"#D8D8D8":"#5A6AF0"} />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
}
