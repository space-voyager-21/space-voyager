import React from "react";
import ErrorIcon from "./Error.png";
const Error = ({ type }) => {
  return (
    <>
      <div className="error__wrapper">
        <p className="error__wrapper__quote">
          “There can be no centre in infinity.” - Lucretius.
        </p>
        <div data-testid="error" className="error__wrapper">
          <p className="error__wrapper__text">
            OOps!We dont know about the {type} you searched for
          </p>
          <img
            src={ErrorIcon}
            className="error__wrapper__img"
            alt="some error occured"
          />
        </div>
      </div>
    </>
  );
};

export default Error;
