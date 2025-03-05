import React from "react";

export  const Button = (props) => {
  return (
    <button
      onClick={() => props.setColor(props.color)}
      className="m-2 p-3 text-white rounded-xl   active:scale-95 hover:opacity-80" style={{backgroundColor:props.color}}
    >
     {props.color}
    </button>
  );
};


