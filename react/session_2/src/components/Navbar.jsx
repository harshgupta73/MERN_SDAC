import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav
            className="navbar navbar-expand-sm navbar-light bg-light"
        >
            <div className="container">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" aria-current="page"
                                >Home
                                <span className="visually-hidden">(current)</span></NavLink
                            >
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/props">Props Ex 1</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/props2">Props Ex 2</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/if_rendering">IF</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/conditional2">conditonal 2</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/switch">Switch</NavLink>
                        </li>
                        
                    </ul>
                    <form className="d-flex my-2 my-lg-0">
                        
                    </form>
                </div>
            </div>
        </nav>
        
    </>
  )
}

export default Navbar