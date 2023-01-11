import { SignInForm } from "../../Components/SignInForm/SignInForm";
import { SignUpForm } from "../../Components/SignUpForm/SignUpForm";
import "./Authentication.scss";

export const Authentication = () => {
    return (
        <main>
            <SignInForm />
            <SignUpForm />
        </main>
    )
}

