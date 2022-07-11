import { SimplePageFormWrap } from "../components/SimplePageFormWrapComponent";
import { useScript } from "../hooks/UseScriptHook";
import "../app-assets/css/wizard/smart_wizard.css";

export const NewUserWizardPage = () => {

    return(
        <SimplePageFormWrap component={<Wizard />} />
    );
}

const Wizard = () => {

    useScript("./assets/js/new-user-wizard.js");

    return(
        <div className="container-fluid">
            <div className="row">
                <div class="col-xl-12 col-xxl-12">
                    <div className="card shadow-none">
                        <div className="card-header justify-content-center py-0">
                            <h3>Registracion Inicial</h3>
                        </div>
                        <div className="card-body p-0">
                            <div id="smartwizard" class="form-wizard order-create">
                                <ul class="nav nav-wizard pb-3">
                                    <li><a class="nav-link" href="#wizard_personal_info">
                                        <span>1</span>
                                    </a></li>
                                    <li><a class="nav-link" href="#wizard_identification">
                                        <span>2</span>
                                    </a></li>
                                    <li><a class="nav-link" href="#wizard_ads">
                                        <span>3</span>
                                    </a></li>
                                    <li><a class="nav-link" href="#wizard_payment">
                                        <span>4</span>
                                    </a></li>
                                </ul>
                                <div className="tab-content">
                                    <div id="wizard_personal_info" class="tab-pane" role="tabpanel">
                                        <div class="row">
                                            <div class="col-lg-6 mb-2">
                                                <div class="mb-3">
                                                    <label class="text-label form-label">First Name*</label>
                                                    <input type="text" name="firstName" class="form-control" placeholder="Parsley" required />
                                                </div>
                                            </div>
                                            <div class="col-lg-6 mb-2">
                                                <div class="mb-3">
                                                    <label class="text-label form-label">Last Name*</label>
                                                    <input type="text" name="lastName" class="form-control" placeholder="Montana" required />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="wizard_identification" class="tab-pane" role="tabpanel">
                                        <div class="row">
                                            <h1>Identifiction Tab</h1>
                                        </div>
                                    </div>

                                    <div id="wizard_ads" class="tab-pane" role="tabpanel">
                                        <div class="row">
                                            <h1>Advertisement Tab</h1>
                                        </div>
                                    </div>

                                    <div id="wizard_payment" class="tab-pane" role="tabpanel">
                                        <div class="row">
                                            <h1>Payment Tab</h1>
                                        </div>
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