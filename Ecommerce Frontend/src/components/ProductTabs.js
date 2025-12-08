"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useForm } from "react-hook-form"
import Rating from "react-rating";
import { Star, StarFill } from "react-bootstrap-icons";
import Image from "next/image";
import RatingStars from "./RatingStars";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Link from "next/link";

const ProductTabs = () => {

    const [rating, setRating] = useState(0);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    // watch input value by passing the name of it
    console.log(watch("reviewImages"))

    return (
        <Tabs className="custom-tabs">
            <TabList>
                <Tab>Additional Information</Tab>
                <Tab>Customer Reviews (0)</Tab>
            </TabList>

            <TabPanel>
                <div className="p-2">
                    <p>
                        Chilly weather is just an excuse to throw on your toasty, handsome new Oslo Trek Hoodie. It features an adjustable drawstring hood and a kangaroo pocket for extra hand warmth. The ultra-soft, cozy lining will have you wishing for more brisk days.
                    </p>

                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <th>Brand</th>
                                <td>Godrej Interio</td>
                            </tr>
                            <tr>
                                <th>Color</th>
                                <td>Beige</td>
                            </tr>
                            <tr>
                                <th>Material</th>
                                <td>Fabric, Wood</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="p-2">
                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="fw-semibold text-black">Reviews</h5>

                            <div className="text-light-black">There are no reviews yet.</div>

                            <div className="reviews-container">
                                <ReviewBox name={"Vinod Rathod"} />
                                <ReviewBox name={"Raj Khanna"} />
                                <ReviewBox name={"Ashwini Makwana"} />
                                <ReviewBox name={"Suresh Yadav"} />
                            </div>

                        </div>
                        <div className="col-md-6">
                            <h5 className="fw-semibold text-black">Be the first to review “Aliquam Blandit”</h5>
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="row custom-form">
                                        <div className="col-12 mt-4">
                                            <div className="d-flex align-items-center justify-content-between ">
                                                <div className="d-flex gap-3">
                                                    <Rating
                                                        initialRating={rating}
                                                        onChange={(rate) => setRating(rate)}
                                                        emptySymbol={<Star size={25} color="#ccc" />}
                                                        fullSymbol={<StarFill size={25} color="gold" />}
                                                        fractions={2} // Allows half stars if needed
                                                    />
                                                    <big>{rating}</big>
                                                </div>
                                                <div>
                                                    Please <Link href={'/login'} className="text-pink fw-semibold">Login</Link> before review.
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="col-md-6 mt-4">
                                            <input placeholder="Your Name*"
                                                {...register("name", {
                                                    required: "Name is required!",
                                                    minLength: {
                                                        value: 4,
                                                        message: "Name contains atleast 4 letters"
                                                    }
                                                })} />
                                            <div className="error-message">{errors.name?.message}</div>
                                        </div>

                                        <div className="col-md-6 mt-4">
                                            <input placeholder="Your Email*"
                                                {...register("email", {
                                                    required: "Email is required!",
                                                    pattern: {
                                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                        message: "Please enter correct email."
                                                    }
                                                })} />
                                            <div className="error-message">{errors.email?.message}</div>
                                        </div> */}

                                        <div className="col-12 mt-4">
                                            <input placeholder="Review Title*"
                                                {...register("reviewTitle", {
                                                    required: "Title is required!",
                                                    minLength: {
                                                        value: 4,
                                                        message: "Title contains atleast 4 letters"
                                                    }
                                                })} />
                                            <div className="error-message">{errors.reviewTitle?.message}</div>
                                        </div>

                                        <div className="col-12 mt-4">
                                            <textarea placeholder="Your review*" rows={5}
                                                {...register("reviewText", {
                                                    required: "Review is required!",
                                                    minLength: {
                                                        value: 10,
                                                        message: "Review contains atleast 10 letters"
                                                    }
                                                })} />
                                            <div className="error-message">{errors.reviewText?.message}</div>
                                        </div>

                                        <div className="col-12 mt-4">
                                            <label htmlFor="product_image_upload" className="error-message text-black mb-1">Upload images (optional)</label>
                                            <input type="file" multiple accept="image/*" id="product_image_upload" placeholder="Review Title"
                                                {...register("reviewImages")} />
                                        </div>

                                        <div className="col-12 mt-3 d-flex gap-2 flex-wrap">
                                            {
                                                watch("reviewImages") &&
                                                Array.from(watch("reviewImages"))?.map(file => (
                                                    <div key={file.size * Math.random()}>
                                                        <Image src={URL.createObjectURL(file)} height={50} width={50} alt="reviewImage" />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <button className="button button-pink">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
        </Tabs>
    );
};


const ReviewBox = ({ name }) => {

    const [open, setOpen] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);

    const images = [
        "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/product-35-768x768.webp",
        "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/product-37-768x768.webp",
        "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/product-10-768x768.webp",
        "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/product-3-768x768.webp"
    ]


    const slides = images.map((src) => ({ src }));

    return (
        <div className="p-3 me-3 border-bottom">
            <div className="d-md-flex gap-3 align-items-center mb-2">
                <h6 className="fw-semibold text-black mb-0">{name}</h6>
                <RatingStars rating={4} />
            </div>
            <div className="text-light-black">This is very good product, really worth for money, Thanks</div>

            <div className="d-flex gap-2 flex-wrap mt-2">
                {images.map((img, i) => (
                    <Image
                        key={img}
                        src={img}
                        alt="reviewImg"
                        height={100}
                        width={100}
                        onClick={() => {
                            setImgIndex(i);
                            setOpen(true);
                        }}
                        style={{
                            width: 70,
                            height: 70,
                            objectFit: "cover",
                            cursor: "pointer",
                            borderRadius: 8,
                        }}
                    />
                ))}
            </div>

            {open && (
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={slides}
                    index={imgIndex}
                    on={{ view: ({ index }) => setImgIndex(index) }}
                />
            )}
        </div>
    )
}

export default ProductTabs;
