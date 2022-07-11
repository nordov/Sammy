import LogoFull from "../app-assets/images/logo-full.png";

export const SimplePageFormWrap = ({ component }) => {
    return (
        <div className="authincation">
            <div className="container-fluid">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-md-6">
                        <div className="authincation-content">
                            <div className="row no-gutters">
                                <div className="col-xl-12">
                                    <div className="auth-form">
                                        <div className="text-center mb-3">
                                            <img src={LogoFull} alt="" />
                                        </div>
                                        { component }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}