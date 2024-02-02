import { useProjectsData } from './common';
import { FTDNA_GROUP } from './constant';

export function GroupFTDNApages() {
  const [myFtdnaProjects, otherFtdnaProjects] = useProjectsData();

  return <>
    <h3>Group FTDNA pages</h3>
    <section>
      <ul>
        {
          myFtdnaProjects.map((item, index) => {
            const key = `${index}-${item.idGroup}-group`;
            const url = `${FTDNA_GROUP}/${item.idGroup}`;
            return <li key={key}><a href={url} target="_blank">{item.idGroup}</a></li>
          })
        }
      </ul>
      <button value="Test">test</button>
    </section>

    <h3>Group FTDNA pages (where I am NOT member)</h3>
    <section>
      <ul>
        {
          otherFtdnaProjects.map((item, index) => {
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
