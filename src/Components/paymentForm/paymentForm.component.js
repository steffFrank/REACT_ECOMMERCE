import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { Button, BUTTON_TYPE_CLASSES } from "../Button/Button";
import "./paymentForm.styles.scss";
import { useSelector } from "react-redux";

import { selectNewCartTotal } from "../../store/cart-dropdown/cart-dropdown.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

export const PaymentForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectNewCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        
        setIsProcessingPayment(true);
        const response = await fetch("/.netlify/functions/create-payment-intent", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({amount: amount * 100})
        }).then((res) => res.json());

        
        const { paymentIntent: { client_secret }} = response;
        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : "Guest"
                }
            }
        })

        setIsProcessingPayment(false);
        if (paymentResult.error) {
            alert(paymentResult.error);
        } else {
            if (paymentResult.paymentIntent.status === "succeeded") {
                alert("Payment Successful");
            }
        }
    }

    return (
        <div className="form-container" onSubmit={paymentHandler}>
            <form className="payment-form">
                <h2 className="payment-form--title">Credit Card Payment: </h2>
                <CardElement />
                <div className="payment-form--button">
                    <Button isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay now </Button>
                </div>
            </form>
        </div>
    )
}