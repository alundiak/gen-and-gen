import i2aSNPdata from '../data/ftdna-I2-SNP-chain.json';
import { MyYdnaMatchPeople } from './MyYdnaMatchPeople';
import { YFULL_URL, parseSNP_data } from './shared';

export function YfullPages() {
  return <>
    <h3>YFULL pages</h3>
    <section>
      {/* <label>Enter SNP in the form: I-Y4460 or R-Z92</label> */}
      <ul>
        {
          i2aSNPdata.map((element, index) => {
            const { SNP, people } = parseSNP_data(element);
            const key = `${index}-${SNP}-on-yfull`;
            const url = `${YFULL_URL}/${SNP}`;
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

    <h3>YFULL pages (other people or DNA samples NOT direct in my Y-DNA SNP chain)</h3>
    <section>
      <ul>
        <li>
          <a href="https://www.yfull.com/tree/I-FT278687/">Taras Kravchenko</a>
        </li>
      </ul>
    </section>
  </>;
}
