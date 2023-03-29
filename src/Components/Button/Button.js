import "./Button.scss";
import { Loading } from "../Loading/Loading";

export const BUTTON_TYPE_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted"
}
export const Button = ({children, buttonType, isLoading, ...otherProps}) => {
    return (
        <button disabled={isLoading} {...otherProps} className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>{isLoading ? <Loading /> : children}</button>
    )
}