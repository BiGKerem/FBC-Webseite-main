import React from "react";
import { MenuList } from "../../helpers/MenuList";
import MenuItem from "../../components/MenuItem";


function Termin() {
  return (
    <div className="Termin" id="Termin">
      <h1 className="menuTitle">Termin</h1>
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

export default Termin;