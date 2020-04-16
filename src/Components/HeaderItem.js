import React from "react";
import TextLoop from "react-text-loop";

const HeaderItem = (props) => {
  return (
    <section className="head">
      <div className="text">
        <h2 className="eins">{props.headline1}</h2>
        <TextLoop mask={true}>
          <div>
            <span>
              <h2>{props.headline2}</h2>
            </span>
          </div>
          <div>
            <h2>{props.headline3}</h2>
          </div>
        </TextLoop>
        <br></br>
        <h2 className="braucht">{props.thin}</h2>

        <TextLoop mask={true}>
          <div>
            <span>
              <h3>{props.second1}</h3>
            </span>
          </div>
          <div>
            <h3>{props.second2}</h3>
          </div>
        </TextLoop>
      </div>
    </section>
  );
};

export default HeaderItem;
