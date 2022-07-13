// import { useScript } from "../../hooks/UseScriptHook";
// import "../../app-assets/css/bootstrap-material-datetimepicker.css"

export const PersonalInfoTabComponent = () => {

    // TODO add Date picker to form
    // useScript("./vendor/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js")
    // useScript("./js/plugins-init/material-date-picker-init.js")

    return (
        <div id="wizard_personal_info" class="tab-pane" role="tabpanel">
            <div class="row">
                <div class="col-lg-12 mb-2">
                    <div class="mb-3">
                        <div>
                            <label for="formFileLg" class="form-label">Foto de Perfil</label>
                            <input class="form-control form-control-lg" id="formFileLg" type="file" />
                        </div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control form-control-lg" id="floatingInput" placeholder="Nombre" />
                        <label for="floatingInput">
                            Nombre, 1ro y 2do
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
                <div class="col-lg-6 mb-2">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control form-control-lg" id="floatingInput" placeholder="Nombre" />
                        <label for="floatingInput">
                            Pseudonimo
                            <span class="text-danger">*</span>
                        </label>
                    </div>
                </div>
                <div class="col-lg-6 mb-2">
                    <div class="form-floating mb-3">
                        <input type="date" class="form-control form-control-lg" id="floatingInput" placeholder="Nombre" />
                        <label for="floatingInput">
                            Pseudonimo
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