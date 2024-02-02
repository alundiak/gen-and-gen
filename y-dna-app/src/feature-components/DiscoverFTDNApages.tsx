import { FTDNA_DISCOVER } from './constant';
import { useProjectsData } from './common';

export function DiscoverFTDNApages() {
  const [myFtdnaProjects, otherFtdnaProjects] = useProjectsData();
  return <>
    <h3>Discover FTDNA Y-DNA group pages</h3>
    <section>
      <ul>
        {
          myFtdnaProjects.map((item, index) => {
            const key = `${index}-${item.idGroup}-discover-page`;
            const url = `${FTDNA_DISCOVER}/${item.idGroup}`;
            return (
              <li key={key}>
                <a href={url} target="_blank">{item.idGroup}</a>
              </li>
            );
          })
        }
      </ul>
    </section>
    <h3>Discover FTDNA Y-DNA group pages (where I am NOT member)</h3>
    <section>
      <ul>
        {
          otherFtdnaProjects.map((item, index) => {
            const key = `${index}-${item.idGroup}-discover-page`;
            const url = `${FTDNA_DISCOVER}/${item.idGroup}`;
            return (
              <li key={key}>
                <a href={url} target="_blank">{item.idGroup}</a>
              </li>
            );
          })
        }
      </ul>
    </section>
  </>;
}
