import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToken } from "../auth/useToken";

export const SignInComponent = () => {

    const [ , setToken ] = useToken();
    const [ emailValue, setEmailValue ] = useState(localStorage.getItem('SammySignIn') || '' );
    const [ passwordValue, setPasswordValue ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');
    const [signInInfo, setSaveSignInInfo] = useState(localStorage.getItem('SammySignIn') ? true : false );

    const navigate = useNavigate();
    
    const saveSignInInfo = () => {

        if ( signInInfo ) {
            localStorage.removeItem('SammySignIn');
            setSaveSignInInfo(false);
        } else {
            setSaveSignInInfo(true);
        }

    }

    const onSignInClicked = async () => {
        try {
            const response = await axios.post('/api/sign-in', {
                email: emailValue,
                password: passwordValue,
            })
            
            const { token } = response.data; 
            setToken(token);

            if ( signInInfo ) localStorage.setItem('SammySignIn', emailValue);
            navigate('/');
            
        } catch ( error ) {
            setErrorMessage( error.response.data.error );
        }

    }

    return (
        <>
            <h4 className="text-center mb-4">Acceder a tu cuenta</h4>
            {errorMessage && 
            <div className="alert alert-danger alert-dismissible fade show">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                <strong>Error!</strong> { errorMessage }.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
                </button>
            </div>}
            <div>
                <div className="mb-3">
                    <label className="mb-1"><strong>Email</strong></label>
                    <input 
                        type="email" 
                        className="form-control"
                        value={ emailValue }
                        onChange={e => setEmailValue(e.target.value)} 
                        placeholder="" />
                </div>
                <div className="mb-3">
                    <label className="mb-1"><strong>Contraseña</strong></label>
                    <input 
                        type="password" 
                        className="form-control" 
                        value={ passwordValue }
                        onChange={e => setPasswordValue(e.target.value)}
                        placeholder="" />
                </div>
                <div className="row d-flex justify-content-between mt-4 mb-2">
                    <div className="mb-3">
                        <div className="form-check custom-checkbox ms-1">
                            <input 
                                type="checkbox" 
                                className="form-check-input" 
                                id="basic_checkbox_1"
                                checked={ signInInfo }
                                onChange={ saveSignInInfo } />
                                <label className="form-check-label" for="basic_checkbox_1">Salvar mis preferencias</label>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <span className="c-pointer" onClick={() => navigate('/sign-up')}>Registrar nueva cuenta</span>
                        <span className="c-pointer" onClick={() => alert('Forgot Password')}>Olvido su contraseña?</span>
                    </div>
                </div>
                <div className="text-center">
                    <button
                        className="btn btn-primary btn-block"
                        disabled={!emailValue || !passwordValue}
                        onClick={onSignInClicked}>Acceder</button>
                </div>
            </div>
        </>
    );
}