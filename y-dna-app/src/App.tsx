// import React from 'react'
import './App.css'
import { FtdnaDiscoverPages } from './feature-components/FtdnaDiscoverPages'
import { FtdnaDiscoverPagesBySNP } from './feature-components/FtdnaDiscoverPagesBySNP'
import { FtdnaGroupPages } from './feature-components/FtdnaGroupPages'
import { FtdnaPublicResults } from './feature-components/FtdnaPublicResults'
import { MyContactsInfo } from './feature-components/MyContactsInfo'
import { YfullPages } from './feature-components/YfullPages'

function App() {

  return (
    <>
      <h2>Y-DNA</h2>

      <div className="y-dna-app">
        <FtdnaGroupPages />
        <FtdnaPublicResults />
        <FtdnaDiscoverPages />
        <FtdnaDiscoverPagesBySNP />
        <YfullPages />

        <footer>
          <MyContactsInfo />
        </footer>
      </div>
    </>
  )
}

export default App
