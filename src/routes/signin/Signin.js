import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase";


export const Signin = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const data = await createUserDocumentFromAuth(response.user);
        console.log(data);
    }
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Signin with Google popup</button>
        </div>
    )
}