import './App.css'
import TagCloud from './components/TagCloud';
import nicknames from './data/nicknames.json';
console.log(nicknames);

// const fontSizeScale = d3
//   .scaleLinear()
//   .domain([d3.min(nicknames, (d) => d.count) || 1, d3.max(surnames, (d) => d.count) || 100])
//   .range([10, 50]); // Font sizes between 10px and 50px

// const nicknames = s.map((d) => ({
//   text: d.name,
//   size: fontSizeScale(d.count),
//   id: d.name, // Unique identifier
// }));

const { main, other } = nicknames;

let data = main;
const concatOther = false;
if (concatOther) {
  data = main.concat(other);
}

function App() {
  return (
    <>
      <TagCloud nicknames={data} />
    </>
  )
}

export default App
