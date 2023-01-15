import { useState } from "react";
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import "./App.css";
import InfiniteItems from "./components/InfiniteItems";

const Row = ({ data, index, style }) => (
  <div style={style}>Row {data[index]}</div>
);

function App() {
  const [lists, setList] = useState([]);

  const addLists = () => {
    setList(new Array(20000).fill(0).map((v, id) => id));
  };

  return (
    <>
      <button onClick={addLists}>Add Lists</button>
      <InfiniteItems />
      {/* <AutoSizer>
        {({ width, height }) => (
          <FixedSizeList
            className="List"
            width={width}
            height={height}
            itemSize={35}
            itemCount={lists.length}
            itemData={lists}
          >
            {Row}
          </FixedSizeList>
        )}
      </AutoSizer> */}
      {/* {lists.map((list, i) => (
        <Row key={i} data={list} index={i} />
      ))} */}
    </>
  );
}

export default App;
