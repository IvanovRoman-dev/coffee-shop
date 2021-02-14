import React from 'react'
import smokeImg from '../images/smoke03.gif'

export default function BG() {
    return (
        <div className="body__bg" tabIndex="-1">
            <img src={smokeImg} alt="smoke"/>
        </div>
    )
}
