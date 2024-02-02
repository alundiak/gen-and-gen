
export function YdnaSNPmatchPeople({ names }: { names: string[] }) {
  if (!names.length) {
    return null;
  }

  return <ul>
    {names.map((name: string, index: number) => {
      return <li key={`${index}-name`}>{name}</li>
    })}
  </ul>;
}
