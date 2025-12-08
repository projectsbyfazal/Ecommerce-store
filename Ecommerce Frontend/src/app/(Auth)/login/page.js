"use client"
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return <>
        <div className="auth-container py-5">
            <div className="container d-flex justify-content-center align-items-center">

                <form onSubmit={handleSubmit(onSubmit)} className="border">

                    <h3 className="text-black fw-semibold display-6">Sign In</h3>

                    <div className="row custom-form">
                        <div className="col-md-12 mt-4">
                            <input placeholder="Enter Email*"
                                {...register("email", {
                                    required: "Email is required!",
                                    pattern: {
                                        value: emailRegex,
                                        message: "Please enter correct email."
                                    }
                                })} />
                            <div className="error-message">{errors.email?.message}</div>
                        </div>

                        <div className="col-md-12 mt-4">
                            <input type="password" placeholder="Enter Password*"
                                {...register("password", {
                                    required: "Password is required!",
                                    pattern: {
                                        value: passwordRegex,
                                        message: "Required min 8 letters with 1 uppercase & 1 symbol ($#@& ...)"
                                    }
                                })} />
                            <div className="error-message">{errors.password?.message}</div>
                        </div>
                    </div>

                    <div className="mt-md-5 mt-4 d-flex flex-md-row flex-column-reverse justify-content-between align-items-md-center">
                        <div className="mt-md-0 mt-4">
                            Don't have account? <Link href="/register" className="text-pink fw-semibold text-decoration-none">Create Now</Link>
                        </div>
                        <div>
                            <button className="button button-pink">Login Now</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
};

export default Login;
