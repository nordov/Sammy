import { Link } from 'react-router-dom';

export const SideBarComponent = () => {
    return(
        <div className="dlabnav">
            <div className="dlabnav-scroll">
                <ul className="metismenu" id="menu">
                    <li>
                        <Link to="#" className='has-arrow' aria-expanded="false">
                            <i className="fas fa-home"></i>
                            <span className="nav-text">Inicio</span>
                        </Link>
                        <ul>
                            <li>
                                <Link to="/dashboard">Consola</Link>
                            </li>
                            <li>
                                <Link to="#">Entradas</Link>
                            </li>
                            <li>
                                <Link to="#">Gastos</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#" className='has-arrow' aria-expanded="false">
                            <i className="fas fa-piggy-bank"></i>
                            <span className="nav-text">Cortes</span>
                        </Link>
                        <ul>
                            <li>
                                <Link to="#">Pendiente Aprobacion</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/start">En Curso</Link>
                            </li>
                            <li>
                                <Link to="#">Historial</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#" className='has-arrow' aria-expanded="false">
                            <i className="fas fa-home"></i>
                            <span className="nav-text">Anuncios</span>
                        </Link>
                        <ul>
                            <li>
                                <Link to="#">Crear Anuncio</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/ads">Lista de Anuncios</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#" className='has-arrow' aria-expanded="false">
                            <i className="fas fa-home"></i>
                            <span className="nav-text">Preferencias</span>
                        </Link>
                        <ul>
                            <li>
                                <Link to="/dashboard/profile">Perfil</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="side-bar-profile">
                    {/* <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="side-bar-profile-img">
                            <img src="images/user.jpg" alt="" />
                        </div>
                        <div className="profile-info1">
                            <h4 className="fs-18 font-w500">Levi Siregar</h4>
                            <span>leviregar@mail.com</span>
                        </div>
                        <div className="profile-button">
                            <i className="fas fa-caret-down scale5 text-light"></i>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mb-2 progress-info">
                        <span className="fs-12"><i className="fas fa-star text-orange me-2"></i>Task Progress</span>
                        <span className="fs-12">20/45</span>
                    </div> */}
                    {/* <div className="progress default-progress">
                        <div className="progress-bar bg-gradientf progress-animated" style="width: 45%; height:10px;" role="progressbar">
                            <span className="sr-only">45% Complete</span>
                        </div>
                    </div> */}
                </div>

                <div className="copyright">
                    <p><strong>Sammy</strong> © 2022 All Rights Reserved</p>
                    <p className="fs-12">TechToGo LLC</p>
                </div>
            </div>
        </div>
    );
}