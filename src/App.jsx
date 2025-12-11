import LoadData from './components/LoadData'
import KeresoPanel from './components/KeresoPanel'
import DataTable from './components/DataTable'
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [adatok, setAdatok] = useState([])
  useEffect(()=> {
    LoadData({adatok, setAdatok})
  }, []);
  

  //https://retoolapi.dev/hUctvr/dolgozok

  return (
    <>
     <h1>kereses</h1>
     
     <KeresoPanel />
     <DataTable adatok={adatok} />

    </>
  )
}

export default App
