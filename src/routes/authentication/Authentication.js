import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import { Button } from "../../Components/Button/Button";
import { FormInput } from "../../Components/FormInput/FormInput";
import { useState } from "react";
import "./Authentication.scss";
import { signInWithEmailAndPassword } from "firebase/auth";

const defaultFormFields = {
    email: "",
    password: ""
}

export const Authentication = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const handleChange = event => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }


    const logGoogleUser = async () => {
        try {
            const response = await signInWithGooglePopup();
            await createUserDocumentFromAuth(response.user);
        } catch(error) {
            console.log(error);
        }
       
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await signInWithEmailAndPassword(email, password);
            console.log(response);
            setFormFields(defaultFormFields);
        } catch(error) {
            console.log(error);
        }
    }


    return (
        <div className="sign-in-form">
            <h1>Already have an account ?</h1>
            <span>Sign in with your email and password</span>
            <form>
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
                    <Button onSubmit={handleSubmit} type="submit">Sign In</Button>
                    <Button 
                        buttonType="google"
                        onClick={logGoogleUser}>Google Sign in
                    </Button>
                </div>
                
            </form>
        </div>
    )
}