import LoadData from './components/LoadData'
import KeresoPanel from './components/KeresoPanel'
import DataTable from './components/DataTable'
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [adatok, setAdatok] = useState([])
  const [filters, setFilters] = useState({
    id: '',
    nev: '',
    kor:'',
    belepesDatuma:''
  })
  useEffect(()=> {
    LoadData({adatok, setAdatok})
  }, []);
  

  //https://retoolapi.dev/hUctvr/dolgozok

  return (
    <>
     <h1>kereses</h1>
    <form action="">
      <thead>
        <tr>
          <th>id</th>
          <th>név</th>
          <th>kor</th>
          <th>belepes</th>
        </tr>
      </thead>
      </form>
    
     
     
     
     <KeresoPanel filters={filters} setFilters={setFilters}/>
     <DataTable adatok={adatok} />

    </>
  )
}

export default App
