import ftDnaData from '../data/ftdna.json';
import { FTDNA_PUBLIC } from './shared';

export function FtdnaPublicResults() {
  return <>
    <h3>Public FTDNA Y-DNA results</h3>
    <section>
      <ul>
        {
          ftDnaData.map((item, index) => {
            const key = `${index}-${item.idGroup}-ycolorized`;
            const url = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=ycolorized`;
            return <li key={key}><a href={url} target="_blank">{item.idPublic}</a></li>
          })
        }
      </ul>
    </section>

    <h3>Public FTDNA mt-DNA results</h3>
    <section>
      <ul>
        {
          ftDnaData.map((item, index) => {
            const url = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=mtresults`;
            return <li key={`${index}-${item.idGroup}-mtresults`}><a href={url} target="_blank">{item.idPublic}</a></li>
          })
        }
      </ul>
    </section>
  </>;
}
