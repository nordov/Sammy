import { HeaderTitleComponent } from "./HeaderTitleComponent";

export const HeaderComponent = () => {
    return(
        <div className="header">
            <div className="header-content">
                <nav className="navbar navbar-expand">
                    <div className="collapse navbar-collapse justify-content-between">
                        <div className="header-left">
                            <HeaderTitleComponent />
                        </div>
                        <ul className="navbar-nav header-right">
                            <li className="nav-item dropdown  header-profile">
                                <a className="nav-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
                                    <img src="https://i2-prod.dailyrecord.co.uk/incoming/article26938233.ece/ALTERNATES/s1200c/1_Screenshot-2022-05-11-at-154927.png" width="56" alt="" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a href="./app-profile.html" className="dropdown-item ai-icon">
                                        <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" className="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        <span className="ms-2">Profile </span>
                                    </a>
                                    <a href="./login.html" className="dropdown-item ai-icon">
                                        <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" className="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                        <span className="ms-2">Logout </span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}