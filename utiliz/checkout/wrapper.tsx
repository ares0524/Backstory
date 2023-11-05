import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ReactNode } from "react";

const stripePromise = loadStripe('pk_test_51O7iZSKKxegAdYfWVGA8bfiXfcpnIt0cHVweX8SgFV28oPHVO8UVtaGKCGtPKpJ0fv1rF0QeP1hb583mbrfO9sde00lg3O3jHK');

type WrapperProps = {
    children: ReactNode
}

function StripeWrapper({ children }:WrapperProps) {
    return (
        <Elements stripe={stripePromise}>
            {children}
        </Elements>
    )
}