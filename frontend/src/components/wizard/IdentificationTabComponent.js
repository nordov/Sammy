
export const IdentificationTabComponent = () => {
    return (
        <div id="wizard_identification" class="tab-pane" role="tabpanel">
            <div class="row">
                <div class="col-lg-12 mb-2">
                    <div class="col-lg-12 mb-2">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control form-control-lg" id="floatingInput" placeholder="Apellidos" />
                            <label for="floatingInput">
                                Número de Identificacion
                                <span class="text-danger">*</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-lg-12 mb-2">
                        <div class="mb-3">
                            <label for="formFileLg" class="form-label">Foto tuya sosteniendo identificacion</label>
                            <input class="form-control form-control-lg" id="formFileLg" type="file" />
                        </div>
                    </div>
                    <div class="col-lg-12 mb-2">
                        <div class="mb-3">
                            <label for="formFileLg" class="form-label">Identificacion: Frente</label>
                            <input class="form-control form-control-lg" id="formFileLg" type="file" />
                        </div>
                    </div>
                    <div class="col-lg-12 mb-2">
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