import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import { Button } from "../Button/Button";
import { FormInput } from "../FormInput/FormInput";
import "./SignUpForm.scss";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
const defaultFormFiels = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

export const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFiels);
    const {displayName, email, password, confirmPassword} = formFields;
    const dispatch = useDispatch();
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
            dispatch(signUpStart(email, password, displayName));
            setFormFields(defaultFormFiels);
            alert("User registered with success");
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