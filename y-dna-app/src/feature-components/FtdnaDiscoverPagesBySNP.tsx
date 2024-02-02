import i2aSNPdata from '../data/ftdna-I2-SNP-chain.json';
import { MyYdnaMatchPeople } from './MyYdnaMatchPeople';
import { FTDNA_DISCOVER_Y_DNA, parseSNP_data } from './shared';

export function FtdnaDiscoverPagesBySNP() {
  return <>
    <h3>Discover FTDNA Y-DNA pages by Person Name</h3>
    <section>
      <ul>
        <li>
          <a href="https://discover.familytreedna.com/y-dna/I-FGC63213/tree">Andrii Lundiak</a>
        </li>
        <li>
          <a href="https://discover.familytreedna.com/y-dna/I-FT278687/tree">Taras Kravchenko</a>
        </li>
      </ul>
    </section>

    <h3>Discover FTDNA Y-DNA pages by SNP</h3>
    <section>
      {/* <label>Enter SNP in the form: I-Y4460</label> */}
      <ul>
        {
          i2aSNPdata.map((element, index) => {
            const { SNP, people } = parseSNP_data(element);
            const key = `${index}-${SNP}-y-dna-snp`;
            const url = `${FTDNA_DISCOVER_Y_DNA}/${SNP}`; // TBD: maybe add/extend with suffixes
            return (
              <li key={key}>
                <a href={url} target="_blank">{SNP}</a>
                {
                  people && <MyYdnaMatchPeople names={people} />
                }
              </li>
            );
          })
        }
      </ul>
    </section>
  </>;
}
