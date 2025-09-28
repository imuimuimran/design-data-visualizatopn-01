
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyComponents/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PriceTable from './components/PriceTable/PriceTable'

const pricingPromise = fetch('/public/pricingTableData.json')
  .then(res => res.json())

function App() {
  
  return (
    <>

      <header>
        <NavBar></NavBar>
        <DaisyNav></DaisyNav>
        <h1 className='text-3xl text-center mt-10'>Design and Data Visualization</h1>
      </header>
      
      <main>
        <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
          <PriceTable pricingPromise = {pricingPromise}></PriceTable>
        </Suspense>
      </main>
      
    </>
  )
}

export default App
