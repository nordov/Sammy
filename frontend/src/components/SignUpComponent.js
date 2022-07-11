import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToken } from "../auth/useToken";

export const SignUpComponent = () => {

    const [ , setToken ] = useToken();

    const [ emailValue, setEmailValue ] = useState('');
    const [ passwordValue, setPasswordValue ] = useState('');
    const [ confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');
    const navigate = useNavigate();

    const onSignUpClicked = async () => {
        try {

            const response = await axios.post('/api/sign-up', {
                email: emailValue,
                password: passwordValue,
            });

            const { token } = response.data;
            setToken(token);
            navigate('/');
        
        } catch( error ) {
            setErrorMessage(error.response.data.error);
        }


    }

    return (
        <>
            <h4 className="text-center mb-4">Registrar cuenta</h4>
            {errorMessage &&
                <div class="alert alert-danger alert-dismissible fade show">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                    <strong>Error!</strong> {errorMessage}.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
                    </button>
                </div>}
            <div>
                <div className="mb-3">
                    <label className="mb-1"><strong>Email</strong></label>
                    <input
                        type="email"
                        className="form-control"
                        value={emailValue}
                        onChange={e => setEmailValue(e.target.value)}
                        placeholder="" required />
                </div>
                <div className="mb-3">
                    <label className="mb-1"><strong>Contraseña</strong></label>
                    <input
                        type="password"
                        className="form-control"
                        value={passwordValue}
                        onChange={e => setPasswordValue(e.target.value)}
                        placeholder="" required />
                </div>
                <div className="mb-3">
                    <label className="mb-1"><strong>Confirmar Contraseña</strong></label>
                    <input
                        type="password"
                        className="form-control"
                        value={confirmPasswordValue}
                        onChange={e => setConfirmPasswordValue(e.target.value)}
                        placeholder="" required />
                </div>
                <div className="text-center">
                    <button
                        className="btn btn-primary btn-block"
                        disabled={
                            !emailValue || !passwordValue ||
                            passwordValue !== confirmPasswordValue
                        }
                        onClick={onSignUpClicked}>Acceder</button>
                </div>
                <div className="row mt-4 mb-2">
                    <span className="c-pointer" onClick={() => navigate('/sign-in')}>Ya tienes cuenta? Haz click aqui para acceder.</span>
                </div>
            </div>
        </>
    );
}