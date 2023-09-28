// import { Helmet } from 'react-helmet';
import { LoginForm } from "components/LoginForm/LoginForm";
import { useAuth } from 'hooks/hooks';

export const LoginPage = () => {
    const { isLoggedIn } = useAuth();
    return (
        <div>
            {!isLoggedIn && <LoginForm />}


        </div>
    );
}
