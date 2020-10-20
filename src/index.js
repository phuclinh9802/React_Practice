import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { ElecArr } from "./Elecs";
import { Elec } from "./Elec";


function ElecList() {
  return (
    <div className="eleclist">
        {ElecArr.map((elec)=> {
          return <Elec key={elec.id} {...elec}/>
        })
        }
    </div>
  );
}




ReactDom.render(<ElecList />, document.getElementById("root"));
