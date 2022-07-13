import { SimplePageFormWrap } from "../components/SimplePageFormWrapComponent";
import { useScript } from "../hooks/UseScriptHook";
import "../app-assets/css/wizard/smart_wizard.css";
import { PersonalInfoTabComponent } from "../components/wizard/PersonalInfoTabComponent";
import { IdentificationTabComponent } from "../components/wizard/IdentificationTabComponent";
import { AdsTabComponent } from "../components/wizard/AdsTabComponent";
import { PaymentTabComponent } from "../components/wizard/PaymentTabComponent";

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
                                    <li><a class="nav-link" href="#wizard_personal_info">
                                        <span>5</span>
                                    </a></li>
                                    <li><a class="nav-link" href="#wizard_identification">
                                        <span>6</span>
                                    </a></li>
                                    <li><a class="nav-link" href="#wizard_ads">
                                        <span>7</span>
                                    </a></li>
                                </ul>
                                <div className="tab-content">
                                    <PersonalInfoTabComponent />
                                    <IdentificationTabComponent />
                                    <AdsTabComponent />
                                    <PaymentTabComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}