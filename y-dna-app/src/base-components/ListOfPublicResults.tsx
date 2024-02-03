import { FTDNA_PUBLIC } from "../feature-components/constant";

export function ListOfPublicResults({ data }: { data: any }) {
  return <>
    <ul>
      {
        data.map((item: any, index: number) => {
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
  </>;
}
