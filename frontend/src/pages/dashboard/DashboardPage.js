import { Outlet } from 'react-router';
import { NewUserWizardPage } from '../NewUserWizardPage';
import { PreloaderComponent } from "../../components/PreloaderComponent";
import { NavHeaderComponent } from "../../components/NavHeaderComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { SideBarComponent } from "../../components/SideBarComponent";
import { FooterComponent } from "../../components/FooterComponent";

export const DashboardPage = (props) => {

    const newUser = true;
    if ( newUser ) return <NewUserWizardPage />

    return(
        <>
        <div id="main-wrapper">
            <NavHeaderComponent />
            <HeaderComponent />
            <SideBarComponent />
            <div className='content-body'>
                {/* TODO fix preloader for just content area */}
                {/* <PreloaderComponent /> */}
                <Outlet />
            </div>
            <FooterComponent />
        </div>
        </>
    );

}