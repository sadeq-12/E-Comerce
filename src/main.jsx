import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Header from './components/Header'
import Dayniile from './components/Dayniile'
import DayniileApi from './components/DayniileApi'

ReactDOM.createRoot(document.getElementById('root')).render(

  <div>
    <Header/>
    {/* <Dayniile/> */}

    <DayniileApi/>
  

  </div>
  
)
