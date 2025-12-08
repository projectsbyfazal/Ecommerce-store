"use client";
import React from "react";
import { useForm } from "react-hook-form";

const ProductForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    //   {
    //       _id: "66f1b2d72b1d9a001f3f0a20",
    //       name: "iPhone 15 Pro",
    //       description:
    //         "Apple iPhone 15 Pro with A17 Pro chip, titanium frame, and 120Hz ProMotion display.",
    //       images: [
    //         "https://example.com/images/iphone15pro-front.jpg",
    //         "https://example.com/images/iphone15pro-back.jpg",
    //       ],
    //       price: 129999,
    //       stockQuantity: 25,
    //       slug: "iphone-15-pro",
    //       category: "66f1a7c12b1d9a001f3f0a10", // Electronics
    //       brand: "66f1b1e32b1d9a001f3f0a01", // Apple
    //       color: "Natural Titanium",
    //       material: "Titanium & Glass",
    //       isActive: true,
    //     },

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row custom-form">
                <div className="col-md-8">
                    <div className="card border-0 shadow-sm p-3 mb-3 rounded-4 overflow-hidden">
                        <h5 className="fw-semibold mb-4">General Information</h5>

                        {/* Name */}
                        <div className="mb-4">
                            <label
                                htmlFor="product_image_upload"
                                className="error-message text-black fs-6 mb-1"
                            >
                                Product Name
                            </label>

                            <input
                                placeholder="Product Name*"
                                {...register("name", {
                                    required: "Product name is required!",
                                    minLength: {
                                        value: 3,
                                        message: "Name must contain at least 2 characters",
                                    },
                                })}
                            />
                            <div className="error-message">{errors.name?.message}</div>
                        </div>

                        <div className="">
                            <label
                                htmlFor="product_image_upload"
                                className="error-message text-black fs-6 mb-1"
                            >
                                Description
                            </label>
                            <textarea
                                placeholder="Describe the Product..*"
                                rows={5}
                                {...register("description", {
                                    required: "Description is required!",
                                    minLength: {
                                        value: 50,
                                        message: "Description contains atleast 50 letters",
                                    },
                                })}
                            />
                            <div className="error-message">{errors.description?.message}</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border-0 shadow-sm p-3 mb-3 rounded-4 overflow-hidden">
                        <h5>Add Product</h5>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card border-0 shadow-sm p-3 mb-3 rounded-4 overflow-hidden">
                        <h5 className="fw-semibold mb-4">Pricing & Stock</h5>
                        <div className="row">
                            <div className="col-md-6">
                                {/* Pricing */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="product_image_upload"
                                        className="error-message text-black fs-6 mb-1"
                                    >
                                        Base Pricing
                                    </label>

                                    <input
                                        placeholder="Price*"
                                        {...register("price", {
                                            required: "Product price is required!"
                                        })}
                                    />
                                    <div className="error-message">{errors.price?.message}</div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                {/* Stock Quantity */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="product_image_upload"
                                        className="error-message text-black fs-6 mb-1"
                                    >
                                        Stock Quantity
                                    </label>

                                    <input
                                        placeholder="Stock Quantity*"
                                        {...register("stockQuantity", {
                                            required: "Stock Quantity is required!"
                                        })}
                                    />
                                    <div className="error-message">{errors.stockQuantity?.message}</div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                {/* Stock Quantity */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="product_image_upload"
                                        className="error-message text-black fs-6 mb-1"
                                    >
                                        Stock Quantity
                                    </label>

                                    <input
                                        placeholder="Stock Quantity*"
                                        {...register("stockQuantity", {
                                            required: "Stock Quantity is required!"
                                        })}
                                    />
                                    <div className="error-message">{errors.stockQuantity?.message}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border-0 shadow-sm p-3 mb-3 rounded-4 overflow-hidden">
                        <h5>Add Product</h5>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ProductForm;
