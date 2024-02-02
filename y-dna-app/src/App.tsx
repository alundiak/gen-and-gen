// import React from 'react'
import './App.css'
import { GroupFTDNApages } from './feature-components/GroupFTDNApages'
import { PublicFTDNAresults } from './feature-components/PublicFTDNAresults'
import { DiscoverFTDNApages } from './feature-components/DiscoverFTDNApages'
import { DiscoverFTDNApagesByPerson } from './feature-components/DiscoverFTDNApagesByPerson'
import { YdnaPagesBySNP } from './feature-components/YdnaPagesBySNP'
import { YfullPagesByPerson } from './feature-components/YfullPagesByPerson'
import { MyContactsInfo } from './feature-components/MyContactsInfo'

function App() {

  return (
    <>
      <header>
        <h2>Y-DNA</h2>
      </header>

      <div className="y-dna-app">
        <GroupFTDNApages />
        <PublicFTDNAresults />
        <DiscoverFTDNApages />

        <YdnaPagesBySNP />

        <DiscoverFTDNApagesByPerson />
        <YfullPagesByPerson />

        <footer>
          <MyContactsInfo />
        </footer>
      </div>
    </>
  )
}

export default App
