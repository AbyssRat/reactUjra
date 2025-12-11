import LoadData from './components/LoadData'
import KeresoPanel from './components/KeresoPanel'
import DataTable from './components/DataTable'
import './App.css'

function App() {
  

  //https://retoolapi.dev/hUctvr/dolgozok

  return (
    <>
     <h1>kereses</h1>
     <LoadData />
     <KeresoPanel />
     <DataTable />

    </>
  )
}

export default App
