import React, { useState } from "react";
import arrow from "./arrow.svg";

export default function DropDown({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="box">
            <button className="btn-box" onClick={() => setIsOpen(!isOpen)}>
                <h1 className="title-box">{title}</h1>
                <img className={`arrow ${isOpen && "arrow-active"}`} src={arrow} alt="arrow" />
            </button>
            {isOpen && <div>{children}</div>}
        </div>
    )
}