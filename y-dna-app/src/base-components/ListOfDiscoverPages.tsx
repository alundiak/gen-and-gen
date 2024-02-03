import { FTDNA_DISCOVER } from "../feature-components/constant";

export function ListOfDiscoverPages({ data }: { data: any }) {
  return <>
    <ul>
      {
        data.map((item: any, index: number) => {
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
  </>;
}
