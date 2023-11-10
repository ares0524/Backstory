import Image from "next/image";
import { loadStripe, StripeElementsOptions  } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "@/utiliz/checkout/checkoutForm";
import { useEffect, useState } from "react";

type DrawerProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function Drawer({ isOpen, setIsOpen }: DrawerProps) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/stripe/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);
  
  const appearance = {
    theme: 'stripe'
  }
  
  const options = {
    clientSecret,
    appearance
  }

  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-[#2f2f2f] h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <div className="py-5 px-5">
          <p className="text-2xl text-center text-white pt-10">How many tokens do you want to buy?</p>
          <div className="flex justify-between p-5">
            <div className="block border-gray-600 border-2 rounded-md p-3 hover:cursor-pointer">
              <Image src="/assets/images/header/coin.png" alt="Coin" width={30} height={35} style={{width:'30px', height:'35px', margin: 'auto'}} />
              <p className="text-2xl text-center text-white">50</p>
            </div>

            <div className="block border-gray-600 border-2 rounded-md p-3 hover:cursor-pointer">
              <Image src="/assets/images/header/coin.png" alt="Coin" width={30} height={35} style={{width:'30px', height:'35px', margin: 'auto'}} />
              <p className="text-2xl text-center text-white">100</p>
            </div>

            <div className="block border-gray-600 border-2 rounded-md p-3 hover:cursor-pointer">
              <Image src="/assets/images/header/coin.png" alt="Coin" width={30} height={35} style={{width:'30px', height:'35px', margin: 'auto'}} />
              <p className="text-2xl text-center text-white">150</p>
            </div>

            <div className="block border-gray-600 border-2 rounded-md p-3 hover:cursor-pointer">
              <Image src="/assets/images/header/coin.png" alt="Coin" width={30} height={35} style={{width:'30px', height:'35px', margin: 'auto'}} />
              <p className="text-2xl text-center text-white">200</p>
            </div>

            <div className="block border-gray-600 border-2 rounded-md p-3 hover:cursor-pointer">
              <Image src="/assets/images/header/coin.png" alt="Coin" width={30} height={35} style={{width:'30px', height:'35px', margin: 'auto'}} />
              <p className="text-2xl text-center text-white">250</p>
            </div>

            <div className="block border-gray-600 border-2 rounded-md p-3 hover:cursor-pointer">
              <Image src="/assets/images/header/coin.png" alt="Coin" width={30} height={35} style={{width:'30px', height:'35px', margin: 'auto'}} />
              <p className="text-2xl text-center text-white">500</p>
            </div>
          </div>
            {clientSecret && (
              <Elements stripe={stripePromise} options={options as any}>
                <CheckoutForm />
              </Elements>
            )}
        </div>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
