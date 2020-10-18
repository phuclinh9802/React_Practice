import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const ElecArr = [{
  id:1,
  title:
    "SAMSUNG 65-inch Class QLED Q80T Series - 4K UHD Direct Full Array 12X Quantum HDR 12X Smart TV with Alexa Built-in (QN65Q80TAFXZA, 2020 Model)",
  creator: "SAMSUNG",
  img: "https://m.media-amazon.com/images/I/41wRWxMSX6L._AC_SY200_.jpg"
},
{
  id:2,
  title:
    'Samsung QN65Q60TA 65" Ultra High Definition 4K Quantum HDR Smart QLED TV with a Klipsch CINEMA-600 3.1 Dynamic Power Soundbar with 10" Wireless Subwoofer (2020)',
  creator: "SAMSUNG",
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81dJD40DFjL._AC_SL1500_.jpg"
}];

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

function Elec(props) {
  const {img, title, creator} = props;
  return (
    <div className="elec">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h3>{creator}</h3>
    </div>
  );
}

ReactDom.render(<ElecList />, document.getElementById("root"));
