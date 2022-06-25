import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img src={require("../images/PaigeSquare.jpeg" )}/>
            <p className="info--title">Paige Trask</p>
            <p className="info--subtitle">Front End Developer</p>
            <p className="info--address">paigetrask.website</p>
            <button className="button">
                <img src={require("../images/email-icon.png")} />
                <p>Email</p>
            </button>
        </div>
    )
}