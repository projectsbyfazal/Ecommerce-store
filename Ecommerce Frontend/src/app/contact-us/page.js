"use client"
import BreadcrumImage from "@/components/common/BreadcrumImage";
import Image from "next/image";
import ProductTabs from "@/components/ProductTabs";
import ProductsList from "@/components/ProductsList";
import MainHeading from "@/components/common/MainHeading";
import { useForm } from "react-hook-form";

const ContactUs = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    const breadcrumPath = [
        {
            label: "Contact Us",
        },
    ];

    return (
        <>
            <BreadcrumImage
                breadcrumPath={breadcrumPath}
                pageName={"Connect with us"}
            />

            <div className="container my-5 pb-md-5 pt-md-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="pe-md-4">
                            <MainHeading
                                title={"Contact Us"}
                                subtitle={"Amet purus dictum urna sagittis dignissim.At fermentum nisl ullamcorper orci."} />
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="row custom-form">
                                    <div className="col-md-6 mt-4">
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
                                    </div>

                                    <div className="col-12 mt-4">
                                        <input placeholder="Subject*"
                                            {...register("subject", {
                                                required: "Subject is required!",
                                                minLength: {
                                                    value: 4,
                                                    message: "Subject contains atleast 4 letters"
                                                }
                                            })} />
                                        <div className="error-message">{errors.subject?.message}</div>
                                    </div>

                                    <div className="col-12 mt-4">
                                        <textarea placeholder="Your message*" rows={5}
                                            {...register("messageText", {
                                                required: "Message is required!",
                                                minLength: {
                                                    value: 10,
                                                    message: "Message contains atleast 10 letters"
                                                }
                                            })} />
                                        <div className="error-message">{errors.messageText?.message}</div>
                                    </div>

                                </div>

                                <div className="mt-4">
                                    <button className="button button-pink">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-6 mt-md-0 mt-5">

                        <div>
                            <div className="row mb-4">
                                <div className="col-md-4">
                                    <h5 className="fw-bold">Address</h5>
                                    <p>Street Name, NY 38954 </p>
                                </div>
                                <div className="col-md-4">
                                    <h5 className="fw-bold">Phone Number</h5>
                                    <p>+91 9313911094</p>
                                </div>
                                <div className="col-md-4">
                                    <h5 className="fw-bold">Email Id</h5>
                                    <p>yasirkhan8104@gmail.com</p>
                                </div>
                            </div>
                            <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1722.5338941232867!2d73.16929127742384!3d22.33926874908209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8d9e4e2d289%3A0x967115f2a3379779!2sRoshan%20Park%20Society%2C%20Chhani%20Jakatnaka%2C%20Vadodara%2C%20Gujarat%20390024!5e0!3m2!1sen!2sin!4v1756008404430!5m2!1sen!2sin" height="350" className="w-100 rounded-4" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ContactUs;
