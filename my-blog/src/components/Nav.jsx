import React from 'react'

const Nav = () => (
    <div className="container-fluid">
        <div className="row">         
            <div className="col-12 fixed-top">
                <ul className="nav justify-content-center position-fixed rounded-bottom nav mx-5">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#inicio">&lt;/&gt;</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#perfil">Perfil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#servicios">Servicios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#escolaridad">Escolaridad</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#habilidades">Habilidades</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

)
 
export default Nav;