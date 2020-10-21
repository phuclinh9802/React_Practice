import React from 'react'

export const Elec = (props) => {
  const {img, title, creator} = props;
  const Buy = () => {
  alert("You have bought this item!")
  }
  const More = (title) => {
    alert(title);
  }
  return (
    <div className="elec" onMouseOver={() => {
      console.log(creator)
    }}>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h3>{creator}</h3>
      <button onClick={Buy}>Buy</button>
      <button onClick={() => More(title)}>More</button>
    </div>
  );
}

