import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

const stripePromise = loadStripe("your-publishable-key-here");

const CheckoutForm = () => {
  const { eventId } = useParams();
  const [clientSecret, setClientSecret] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("/api/payments/create-payment-intent", { eventId })
      .then((res) => setClientSecret(res.data.clientSecret))
      .catch(console.error);
  }, [eventId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const card = elements.getElement(CardElement);

    const { paymentIntent, error } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card,
          billing_details: {
            name,
            email,
          },
        },
      }
    );

    if (error) {
      console.error(error);
    } else if (paymentIntent.status === "succeeded") {
      navigate(`/confirmation/${paymentIntent.id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Checkout</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay Now
      </button>
    </form>
  );
};

const Checkout = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default Checkout;