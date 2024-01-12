import React from "react";
import "./Ref.scss";
import {refMenu} from "../../utils/ref-menu-array";
import RefItem from "./ref-item/RefItem";


function Ref() {
  return (
    <div className="ref">
      <h3 className="ref__title">Справка</h3>
      <nav className="ref__menu">
        {refMenu.map((i, index) => (
          <RefItem key={index} item={i} />
        ))}
      </nav>
    </div>
  );
}

export default Ref;
