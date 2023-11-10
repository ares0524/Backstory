"use client"

import Image from "next/image";
import Link from "next/link";
import { register } from "../store/auth/AuthSlice";
import { useDispatch } from "../store/store";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Register() {
    const dispatch = useDispatch();

    useEffect(() => {
        // const data = {
        //     first_name: 'Cal',
        //     last_name: 'West',
        //     email: 'admin@backstory.com',
        //     password: 'rootroot'
        // }

        // dispatch(register(data));
        document.getElementById('submit')?.addEventListener('click', userRegister);
    }, [])

    const userRegister = (e: Event) => {
        e.preventDefault();
        const first_name_el = document.getElementById('first_name') as HTMLInputElement;
        const last_name_el = document.getElementById('last_name') as HTMLInputElement;
        const email_el = document.getElementById('email') as HTMLInputElement;
        const password_el = document.getElementById('password') as HTMLInputElement;
        const confirm_pwd_el = document.getElementById('confirmPassword') as HTMLInputElement;

        if (password_el.value != confirm_pwd_el.value) {
            toast("Password doesn't match!", {
                autoClose: 2000,
                type: 'warning',
                theme: 'dark'
            })
            return;
        }

        const data = {
            first_name: first_name_el.value,
            last_name: last_name_el.value,
            email: email_el.value,
            password: password_el.value
        }

        if (first_name_el.value == '' || last_name_el.value == '' || email_el.value == '' || password_el.value == '') {
            toast('Please fill out all informations!', {
                autoClose: 2000,
                type: 'warning',
                theme: 'dark'
            })
            return;
        }

        dispatch(register(data));
    }

    return (
        <>
            <a href="#" className="flex items-center auth-logo">
                <Image src="/assets/images/logo.png" width={60} height={35} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Backstory</span>
            </a>
            
            <div className="flex flex-col items-center md:flex-row md:h-screen justify-center">
                <div className="flex items-center justify-center w-full md:w-2/5">
                    <Image src="/assets/images/auth/register.png" alt="Register Image" width={500} height={350} />
                </div>
                <div className="flex flex-col items-center justify-center w-full md:w-1/4">
                    <div className="w-full max-w-md space-y-8">
                    <div>
                        <h1 className="text-2xl font-bold">Welcome to the Backstory!</h1>
                        <p className="mt-2 text-gray-600">
                        Please register an account.
                        </p>
                    </div>
                    <form className="mt-8 space-y-4">
                        <div className="flex">
                            <div className="w-1/2 pr-2">
                                <label htmlFor="first_name" className="block font-bold text-[#dddddd]">
                                    First Name
                                </label>
                                <input
                                    id="first_name"
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                                    required
                                />
                            </div>

                            <div className="w-1/2 pl-2">
                                <label htmlFor="last_name" className="block font-bold text-[#dddddd]">
                                    Last Name
                                </label>
                                <input
                                    id="last_name"
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                                    required
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block font-bold text-[#dddddd]">
                                Email address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block font-bold text-[#dddddd]"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block font-bold text-[#dddddd]"
                            >
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm your password"
                                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                                required
                            />
                        </div>
                    
                        <div className="text-center">
                            <Link
                                href="/forget"
                                className="text-md text-blue-600 hover:underline font-bold"
                            >
                                Terms and conditions
                            </Link>
                            <button
                                type="submit"
                                id="submit"
                                className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
                                // onClick={() => userRegister()}
                            >
                                Register
                            </button>
                        </div>
                    </form>

                    <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                        <div className="absolute px-5 bg-[#2f2f2f]">Or</div>
                    </div>

                    <p className="mt-4 text-sm text-center text-[#dddddd]">
                        Have an account?{" "}
                        <Link
                            href="/login"
                            className="font-medium text-blue-600 hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                    </div>
                </div>
            </div>
        </>
    );
}