import React from 'react'
import loading from "./loading.gif"

function Spinner () {
        return (
            <div className="container d-flex justify-content-center">
                <img src={loading} alt="..." />
            </div>
        )
}

export default Spinner
