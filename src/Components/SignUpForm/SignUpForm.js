import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import { Button } from "../Button/Button";
import { FormInput } from "../FormInput/FormInput";
import "./SignUpForm.scss";

const defaultFormFiels = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

export const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFiels);
    const {displayName, email, password, confirmPassword} = formFields;

    const handleChange = event => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password did not match");
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            setFormFields(defaultFormFiels);
        } catch(error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("Cannot create user, email already in use");
            } else {
                console.log("something went wrong", error);
            }
        }
    }
    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}> 
                <FormInput
                    label="Name"
                    id="name"
                    name="displayName"
                    type="text"
                    onChange={handleChange}
                    value={displayName}
                    required
                />
                <FormInput 
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    required
                />
                <FormInput 
                    label="password"
                    id="password"
                    autoComplete="new-Password" 
                    name="password" 
                    type="password" 
                    value={password} 
                    required 
                    onChange={handleChange}
                />
                <FormInput label="Confirm Password"
                    id="confirmPassword" 
                    type="password" 
                    value={confirmPassword} 
                    autoComplete="new-Password" 
                    name="confirmPassword" 
                    required 
                    onChange={handleChange}
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>

    )
}