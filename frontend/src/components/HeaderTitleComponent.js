import { useLocation } from "react-router-dom";

const headers = {
    "": "Inicio",
    "/profile": "Perfil",
    "/ads": "Anuncios",
}

export const HeaderTitleComponent = () => {

    const currentPath = useLocation().pathname.replace("/dashboard", "");

    return(
        <div className="dashboard_bar">
            {headers[currentPath]}
        </div>
    );
}