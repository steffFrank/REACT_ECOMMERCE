import "./Button.scss";

const BUTTON_TYPE_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted"
}
export const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <button {...otherProps} className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>{children}</button>
    )
}