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
  const [szurtAdatok, setSzurtAdatok] = useState(adatok)

  const szures = (e) => {
    e.preventDefault()
    let szurtAdat = adatok.filter((adatsor)=> {
      return (
        (filters.id === '' || adatsor.id === Number(filters.id))&&
        (filters.nev === '' || adatsor.TeljesNev.toLowerCase())
      )
    })
    setSzurtAdatok(szurtAdat)
  }
  useEffect(()=> {
    LoadData({adatok, setAdatok})
  }, []);
  

  //https://retoolapi.dev/hUctvr/dolgozok

  return (
    <>
     <h1>kereses</h1>
    <form action="">
      <button onClick={szures}>Kereses</button>
      <table>
      <thead>
        <tr>
          <th>id</th>
          <th>név</th>
          <th>kor</th>
          <th>belepes</th>
        </tr>
        <KeresoPanel filters={filters} setFilters={setFilters}/>
      </thead><DataTable adatok={szurtAdatok} />
      </table>
      </form>
    
     
     
     
     
     

    </>
  )
}

export default App
