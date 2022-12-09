import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51MCNkxSFsMTnmESM7SDVwYsYGI4JZExcJ4GLkP2034gGK70mlzP43CwdOxtuCqcxXKK0tlQ0LCqKeYMBrWz3qjBJ00vYdDixbV"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}