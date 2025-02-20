import { useState } from "react";

function ListComponent(props) {
  const { list } = props;
  const [index, setIndex] = useState(1);

  const handleClick = (i) => {
    setIndex(i);
  };

  return (
    <ul className="list-group">
      {list.map((e, i) => (
        <li
          onClick={() => handleClick(i)}
          key={e}
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {e}
        </li>
      ))}
    </ul>
  );
}

export default ListComponent;
