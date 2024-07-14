import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
// import { MouseEvent } from "react";

// {items: [], heading: string} we achieve this using props
interface Props {
  items: string[];
  heading: string; 

  // (item: string) => void;
  onSelectItem: (item: string) => void;
}
function Nav({items, heading, onSelectItem}: Props) {
  //hook: allows us to tap into built in function in react
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //event handler
  // const handleClick = (event:MouseEvent) => console.log( event)
  return (
    <Fragment>
      <h1> {heading}</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group active ">
        {items.map((item, index) => (
          <li
            //conditional rendering
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default Nav;
