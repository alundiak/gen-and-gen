// import ftDnaData from '../data/ftdna-projects.json';
import { useProjectsData } from './common';
import { FTDNA_PUBLIC } from './constant';

export function PublicFTDNAresults() {
  const [myFtdnaProjects, otherFtdnaProjects] = useProjectsData();

  return <>
    <h3>Public FTDNA DNA results</h3>
    <section>
      <ul>
        {
          myFtdnaProjects.map((item, index) => {
            const key = `${index}-${item.idGroup}-dna-results`;
            const yDNAResultsURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=ycolorized`;
            const ySNPResultsURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=ysnp`;
            const mtDNAResultsURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=mtresults`;
            return (
              <li key={key}>
                <span>{item.idPublic}</span> | <a href={yDNAResultsURL} target="_blank">yColorized</a> | <a href={ySNPResultsURL} target="_blank">ysnp</a> | <a href={mtDNAResultsURL} target="_blank">mtResults</a>
              </li>
            );
          })
        }
      </ul>
    </section>

    <h3>Public FTDNA DNA results (where I am NOT member)</h3>
    <section>
      <ul>
        {
          otherFtdnaProjects.map((item, index) => {
            const key = `${index}-${item.idGroup}-dna-results`;
            const yDNAResultsURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=ycolorized`;
            const ySNPResultsURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=ysnp`;
            const mtDNAResultsURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=mtresults`;
            return (
              <li key={key}>
                <span>{item.idPublic}</span> | <a href={yDNAResultsURL} target="_blank">yColorized</a> | <a href={ySNPResultsURL} target="_blank">ysnp</a> | <a href={mtDNAResultsURL} target="_blank">mtResults</a>
              </li>
            );
          })
        }
      </ul>
    </section>
  </>;
}
