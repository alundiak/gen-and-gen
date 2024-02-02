// import React from 'react'
import './App.css'
import { MyContactsInfo } from './feature-components/MyContactsInfo'

function App() {

  return (
    <>
      <h2>Y-DNA</h2>

      <div className="y-dna">
        <h3>FTDNA Group pages</h3>
        <section>
          <ul>
            <li>
              <a href="https://www.familytreedna.com/groups/polish">Polish</a>
            </li>
            <li>
              <a href="https://www.familytreedna.com/groups/ukrainian-dna">Ukrainian DNA</a>
            </li>
          </ul>
          <button value="TT">test</button>
        </section>

        <h3>Public FTDNA Y-DNA results</h3>
        <section>
          <ul>
            <li>
              <a href="https://www.familytreedna.com/public/polish?iframe=ycolorized">Polish</a>
            </li>
            <li>
              <a href="https://www.familytreedna.com/public/UkrainianDNA?iframe=ycolorized">Ukrainian DNA</a>
            </li>
          </ul>
        </section>

        <h3>Discover FTDNA Y-DNA group pages</h3>
        <section>
          <label>Enter SNP in the form: I-Y4460 or R-Z92</label>
          <ul>
            <li>
              <a href="https://discover.familytreedna.com/y-dna/I-FGC63213/tree">Andrii Lundiak</a>
            </li>
            <li>
              <a href="https://discover.familytreedna.com/y-dna/I-FT278687/tree">Taras Kravchenko</a>
            </li>

          </ul>
        </section>

        <h3>YFULL pages</h3>
        <section>
          <label>Enter SNP in the form: I-Y4460 or R-Z92</label>
          <ul>
            <li>
              <a href="https://www.yfull.com/tree/I-Y128456/">Andrii Lundiak</a>
            </li>
            <li>
              <a href="https://www.yfull.com/tree/I-FT278687/">Taras Kravchenko</a>
            </li>

          </ul>
        </section>

        <footer>
          <MyContactsInfo />
        </footer>
      </div>
    </>
  )
}

export default App
