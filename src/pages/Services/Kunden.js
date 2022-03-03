import React from "react";
import { MenuList } from "../../helpers/MenuList";
import MenuItem from "../../components/MenuItem";


function Kunden() {
  return (
    <div className="Kunden" id="Kunden">
      <h1 className="menuTitle">Kunden</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              text={menuItem.text}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Kunden;