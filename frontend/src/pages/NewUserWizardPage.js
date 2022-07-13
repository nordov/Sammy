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
                                    <PersonalInfoTab />
                                    <IdentificationTab />
                                    <AdsTab />
                                    <PaymentTab />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const PersonalInfoTab = () => {
    return(
        <div id="wizard_personal_info" class="tab-pane" role="tabpanel">
            <div class="row">
                <div class="col-lg-12 mb-2">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control form-control-lg" id="floatingInput" placeholder="Nombre" />
                        <label for="floatingInput">
                            Nombre, incluyendo medio si tienes
                            <span class="text-danger">*</span>
                        </label>
                    </div>
                </div>
                <div class="col-lg-12 mb-2">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control form-control-lg" id="floatingInput" placeholder="Apellidos" />
                        <label for="floatingInput">
                            Ambos Apellidos
                            <span class="text-danger">*</span>
                        </label>
                    </div>
                </div>
                <div class="col-lg-12 mb-2">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control form-control-lg" id="floatingInput" placeholder="Apellidos" />
                        <label for="floatingInput">
                            Dirección Completa
                            <span class="text-danger">*</span>
                        </label>
                    </div>
                </div>
                <div class="col-lg-6 mb-2">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control form-control-lg" id="floatingInput" placeholder="Apellidos" />
                        <label for="floatingInput">
                            Departamento / Provincia
                            <span class="text-danger">*</span>
                        </label>
                    </div>
                </div>
                <div class="col-lg-6 mb-2">
                    <div class="mb-3">
                        <select class="default-select form-control form-control-lg wide mb-3">
                            <option value="" selected>Pais</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Panama">Panama</option>
                            <option value="Venezuela">Venezuela</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

const IdentificationTab = () => {
    return(
        <div id="wizard_identification" class="tab-pane" role="tabpanel">
            <div class="row">
                <div class="col-lg-12 mb-2">
                    <div class="mb-3">
                        <div>
                            <label for="formFileLg" class="form-label">Foto de Perfil</label>
                            <input class="form-control form-control-lg" id="formFileLg" type="file"/>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-2">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control form-control-lg" id="floatingInput" placeholder="Apellidos" />
                            <label for="floatingInput">
                                Número de Identificacion
                                <span class="text-danger">*</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-2">
                        <div class="mb-3">
                            <label for="formFileLg" class="form-label">Foto tuya sosteniendo identificacion</label>
                            <input class="form-control form-control-lg" id="formFileLg" type="file" />
                        </div>
                    </div>
                    <div class="col-lg-6 mb-2">
                        <div class="mb-3">
                            <label for="formFileLg" class="form-label">Identificacion: Frente</label>
                            <input class="form-control form-control-lg" id="formFileLg" type="file" />
                        </div>
                    </div>
                    <div class="col-lg-6 mb-2">
                        <div class="mb-3">
                            <label for="formFileLg" class="form-label">Identificacion: Atras</label>
                            <input class="form-control form-control-lg" id="formFileLg" type="file" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const AdsTab = () => {
    return (
        <div id="wizard_ads" class="tab-pane" role="tabpanel">
            <div class="row">
                <h1>Advertisement Tab</h1>
            </div>
        </div>
    );
}

const PaymentTab = () => {
    return (
        <div id="wizard_payment" class="tab-pane" role="tabpanel">
            <div class="row">
                <h1>Payment Tab</h1>
            </div>
        </div>
    );
}