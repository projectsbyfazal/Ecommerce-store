"use client";
import React from "react";
import { useForm } from "react-hook-form";

const CheckoutForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className="px-md-0 px-3">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row custom-form">
                    <h6 className="fw-bold mb-0"> Personal details *</h6>

                    <div className="col-md-12 mt-4">
                        <input
                            placeholder="Full Name*"
                            {...register("fullName", {
                                required: "Full Name is required!",
                                minLength: {
                                    value: 4,
                                    message: "Name contains atleast 4 letters",
                                },
                            })}
                        />
                        <div className="error-message">{errors.fullName?.message}</div>
                    </div>

                    {/* <div className="col-md-6 mt-4">
                        <input
                            placeholder="Last Name*"
                            {...register("lastName", {
                                required: "Last Name is required!",
                                minLength: {
                                    value: 4,
                                    message: "Name contains atleast 4 letters",
                                },
                            })}
                        />
                        <div className="error-message">{errors.lastName?.message}</div>
                    </div> */}

                    <div className="col-md-6 mt-4">
                        <input
                            placeholder="Email Address*"
                            {...register("email", {
                                required: "Email is required!",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Please enter correct email id.",
                                },
                            })}
                        />
                        <div className="error-message">{errors.email?.message}</div>
                    </div>

                    <div className="col-md-6 mt-4">
                        <input
                            placeholder="Phone Number*"
                            {...register("phone", {
                                required: "Phone Number is required!",
                                pattern: {
                                    value: /^[0-9]{10,12}$/,
                                    message: "Please enter correct phone number.",
                                },
                            })}
                        />
                        <div className="error-message">{errors.phone?.message}</div>
                    </div>

                    <h6 className="fw-bold mb-0 mt-4"> Delivery address details *</h6>

                    <div className="col-md-12 mt-4">
                        <textarea
                            id="full_address"
                            rows="3"
                            placeholder="Flat No., Building Name, Street, Area, Landmark, etc."
                            {...register("address", {
                                required: "Full Address is required!",
                                minLength: {
                                    value: 10,
                                    message: "Address should be at least 10 characters long.",
                                },
                            })}
                        ></textarea>
                        <div className="error-message">{errors.address?.message}</div>
                    </div>

                    <div className="col-md-6 mt-4">
                        <select
                            {...register("country", {
                                required: "Country is required!",
                            })}
                            className="form-select"
                        >
                            <option value="">Select Country*</option>
                            <option value="India">India</option>
                        </select>
                        <div className="error-message">{errors.country?.message}</div>
                    </div>

                    <div className="col-md-6 mt-4">
                        <select
                            {...register("state", {
                                required: "State is required!",
                            })}
                            className="form-select"
                        >
                            <option value="">Select State*</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                        </select>
                        <div className="error-message">{errors.state?.message}</div>
                    </div>

                    <div className="col-md-6 mt-4">
                        <select
                            {...register("city", {
                                required: "City is required!",
                            })}
                            className="form-select"
                        >
                            <option value="">Select Town/City*</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Delhi">Delhi</option>
                        </select>
                        <div className="error-message">{errors.city?.message}</div>
                    </div>

                    <div className="col-md-6 mt-4">
                        <input
                            type="text"
                            placeholder="Zip Code*"
                            {...register("zipcode", {
                                required: "Zip Code is required!",
                                pattern: {
                                    value: /^[1-9][0-9]{5}$/,
                                    message: "Enter a valid 6-digit Zip Code.",
                                },
                            })}
                        />
                        <div className="error-message">{errors.zipcode?.message}</div>
                    </div>


                    <h6 className="fw-bold mb-0 mt-5"> Additional information</h6>

                    <div className="col-12 mt-3">
                        <label htmlFor="" className="mb-2">Order notes (optional)</label>
                        <textarea
                            placeholder="Notes about your order, e.g. special notes for delivery"
                            rows={4}
                            {...register("additionalInfo")}
                        /> 
                    </div>
                </div>

            </form>
        </div>
    );
};

export default CheckoutForm;
