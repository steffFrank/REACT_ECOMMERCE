import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import { Button } from "../Button/Button";
import { FormInput } from "../FormInput/FormInput";
import { useState } from "react";
import "./SignInForm.scss";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase";

const defaultFormFields = {
    email: "",
    password: ""
}

export const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const handleChange = event => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }


    const logGoogleUser = async () => {
        try {
            await signInWithGooglePopup();
        } catch(error) {
            console.log(error);
        }
       
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            setFormFields(defaultFormFields);

        } catch(error) {
            if(error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
                alert("Please check your email and password");
            }
        }
    }


    return (
        <div className="sign-in-form">
            <h1>Already have an account ?</h1>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="email"
                    required
                    onChange={handleChange}
                    type="email"
                    value={email}
                    name="email"
                    autoComplete="username"
                />
                <FormInput 
                    label="password"
                    required
                    name="password"
                    onChange={handleChange}
                    type="password"
                    value={password}
                    autoComplete="current-password"
                />
                <div className="btns-container">
                    <Button type="submit">Sign In</Button>
                    <Button 
                        type="button"
                        buttonType="google"
                        onClick={logGoogleUser}>Google Sign in
                    </Button>
                </div>
                
            </form>
        </div>
    )
}