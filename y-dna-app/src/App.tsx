import { Container } from 'reactstrap';
import './App.css'
import { GroupFTDNApages } from './feature-components/GroupFTDNApages'
import { PublicFTDNAresults } from './feature-components/PublicFTDNAresults'
import { DiscoverFTDNApages } from './feature-components/DiscoverFTDNApages'
import { DiscoverFTDNApagesByPerson } from './feature-components/DiscoverFTDNApagesByPerson'
import { YdnaPagesBySNP } from './feature-components/YdnaPagesBySNP'
import { YfullPagesByPerson } from './feature-components/YfullPagesByPerson'
import { MyContactsInfo } from './feature-components/MyContactsInfo'
import MyButton from './feature-components/MyButton';

function App() {

  return (
    <>
      <header>
        <h2>Y-DNA info (FTDNA, YFULL, SNP Tracker)</h2>
      </header>

      <div className="y-dna-app">
        <Container>
          <GroupFTDNApages />
          <PublicFTDNAresults />
          <DiscoverFTDNApages />

          <YdnaPagesBySNP />

          <DiscoverFTDNApagesByPerson />
          <YfullPagesByPerson />
        </Container>

        <MyButton>Test</MyButton>

        <footer>
          <MyContactsInfo />
        </footer>
      </div>
    </>
  )
}

export default App
