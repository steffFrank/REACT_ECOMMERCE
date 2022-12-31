import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";

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
        <div>
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" name="displayName" type="text" onChange={handleChange} value={displayName} required/>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={email} required onChange={handleChange}/>
                <label htmlFor="password">Password</label>
                <input id="password" autoComplete="new-Password" name="password" type="password" value={password} required onChange={handleChange}/>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input id="confirmPassword" type="password" value={confirmPassword} autoComplete="new-Password" name="confirmPassword" required onChange={handleChange}/>
                <button type="submit">Sign Up</button>
            </form>
        </div>

    )
}