import ftDnaData from '../data/ftdna.json';
import { FTDNA_GROUP } from './shared';

export function FtdnaGroupPages() {
  return <>
    <h3>FTDNA Group pages</h3>
    <section>
      <ul>
        {
          ftDnaData.map((item, index) => {
            const key = `${index}-${item.idGroup}-group`;
            const url = `${FTDNA_GROUP}/${item.idGroup}`;
            return <li key={key}><a href={url} target="_blank">{item.idGroup}</a></li>
          })
        }
      </ul>
      <button value="Test">test</button>
    </section>
  </>;
}
