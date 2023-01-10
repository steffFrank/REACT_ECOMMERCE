import { SignInForm } from "../../Components/SignInForm/SignInForm";
import { SignUp } from "../../Components/SignUpForm/SignUpForm";
import "./Authentication.scss";

export const Authentication = () => {
    return (
        <main>
            <SignInForm />
            <SignUp />
        </main>
    )
}

