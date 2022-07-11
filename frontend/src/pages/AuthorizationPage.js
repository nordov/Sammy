import { SimplePageFormWrap } from "../components/SimplePageFormWrapComponent";
import { SignInComponent } from "../components/SignInComponent";
import { SignUpComponent } from "../components/SignUpComponent";

export const AuthorizationPage = ({ authComponent }) => {
    return (
        <SimplePageFormWrap 
            component={ authComponent === 'sign-in' ? <SignInComponent /> : <SignUpComponent /> } />
    );
}