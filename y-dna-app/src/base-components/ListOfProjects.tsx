import { FTDNA_GROUP } from "../feature-components/constant";

export function ListOfProjects({ data }: { data: any }) {
  return <>
    <ul>
      {
        data.map((item: any, index: number) => {
          const key = `${index}-${item.idGroup}-group`;
          const url = `${FTDNA_GROUP}/${item.idGroup}`;
          return <li key={key}><a href={url} target="_blank">{item.idGroup}</a></li>
        })
      }
    </ul>
  </>;
}
