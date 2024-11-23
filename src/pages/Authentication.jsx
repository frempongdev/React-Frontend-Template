import { useSelector } from "react-redux";
import LoginForm from "../components/LoginForm"
import SignupForm from "../components/SignupForm";
import { Helmet } from "react-helmet";

const Authentication = () => {
    const formAuth = useSelector((state) => state.auth.formAuth);


    return (
        <div>

            {
                formAuth === 'login' ? (
                    <Helmet><title>Login - Rigi-X || Car Rental</title></Helmet>
                ) : (
                    <Helmet><title>Sign Up - Rigi-X || Car Rental</title></Helmet>
                )
            }
            {
                formAuth === 'login' ? (
                    <LoginForm />
                ) : (
                    <SignupForm />
                )
            }
        </div>
    )
}

export default Authentication