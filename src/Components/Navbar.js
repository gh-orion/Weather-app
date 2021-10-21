import React from 'react'

function Navbar (props) {
    const handleSubmit = (event) => {
        event.preventDefault()
        props.searchCity(event.target.searchtxt.value)
    }

    return (
        <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid d-flex">
                <form onSubmit={handleSubmit} className="d-flex mx-auto">
                    <input className="form-control me-2" style={{marginLeft: "25%"}} id="searchtxt" type="search" placeholder="Enter City or State" aria-label="Search"/>
                    <button className="btn btn-outline-success" style={{marginRight: "-25%"}} type="submit">Search</button>
                </form>
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" style={{color: props.mode === 'dark' ? 'white' : 'black'}} htmlFor="flexSwitchCheckDefault">Switch Mode</label>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
