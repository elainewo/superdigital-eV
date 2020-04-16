import React from "react";

const HeaderItem = (props) => {
  return (
    <section className="head">
      <div className="text">
        <h2>{props.headline}</h2>
        <p>{props.thin}</p>
        <h3>{props.second}</h3>
      </div>
    </section>
  );
};

export default HeaderItem;
