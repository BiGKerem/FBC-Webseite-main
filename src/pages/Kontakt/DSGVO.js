import React from "react";
import { MenuList } from "../../helpers/MenuList";
import MenuItem from "../../components/MenuItem";


function DSGVO() {
  return (
    <div className="DSGVO" id="DSGVO">
      <h1 className="menuTitle">DSGVO</h1>
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

export default DSGVO;