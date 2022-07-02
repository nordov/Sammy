import { useState } from "react";
import { useHistory } from "react-router-dom";

export const LogInPage = () => {

    const [ emailValue, setEmailValue ] = useState('');
    const [ passwordValue, setPasswordValue ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');
    const history = useHistory();

    const onLogInClicked = async () => {
        alert("Login was clicked");
    }

    return (
        <div className="content-container">
            <h1>Log In</h1>
            { errorMessage && <div className="fail">{ errorMessage }</div>}

            <input 
                value={ emailValue }
                onChange={ e=> setEmailValue(e.target.value) }
                placeholder="Email" />
            <input 
                type="password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)} 
                placeholder="Password" />

            <button 
                diabled={ !emailValue || !passwordValue }
                onClick={ onLogInClicked }>Log In</button>
            <button 
                onClick={ () => history.push('/forgot-password')}>Forgot your password?</button>
            <button
                onClick={() => history.push('/sign-up')}>Sign Up</button>
        </div>
    );
}