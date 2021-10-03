import React from 'react'
import ErrorIcon from "./Error.png"
const Error = () => {
    return (
        <div data-testid="error" className="error__wrapper">
            <p className="error__wrapper__text">OOps!We dont know about the planet you searched for</p>
            <img src={ErrorIcon} className="error__wrapper__img"alt="some error occured"/>
        </div>
    )
}

export default Error
