import ftDnaData from '../data/ftdna.json';
import { FTDNA_DISCOVER } from './shared';

export function FtdnaDiscoverPages() {
  return <>
    <h3>Discover FTDNA Y-DNA group pages</h3>
    <section>
      <ul>
        {
          ftDnaData.map((item, index) => {
            const key = `${index}-${item.idGroup}-discover-page`;
            const url = `${FTDNA_DISCOVER}/${item.idGroup}`;
            return <li key={key}><a href={url} target="_blank">{item.idGroup}</a></li>
          })
        }
      </ul>
    </section>
  </>;
}
