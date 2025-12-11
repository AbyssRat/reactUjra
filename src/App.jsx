import LoadData from './components/LoadData'
import KeresoPanel from './components/KeresoPanel'
import DataTable from './components/DataTable'
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [adatok, setAdatok] = useState([])
  

  //https://retoolapi.dev/hUctvr/dolgozok

  return (
    <>
     <h1>kereses</h1>
     <LoadData adatok={adatok} setAdatok={setAdatok} />
     <KeresoPanel />
     <DataTable />

    </>
  )
}

export default App
