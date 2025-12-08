import { BreadcrumPath } from "@/components/common/BreadcrumImage";
import Image from "next/image";
import { QuantityCounter } from "../details/page";
import { Trash } from "react-bootstrap-icons";
import CheckoutForm from "@/components/CheckoutForm";
import Link from "next/link";

const CheckoutIndex = () => {
    const breadcrumPath = [
        {
            label: "Shop",
            link: "/furniture/category",
        },
        {
            label: "Checkout",
        },
    ];

    return (
        <>
            <div className="container mb-5 mt-3">
                <BreadcrumPath breadcrumPath={breadcrumPath} />
                <div className="row mt-4">
                    <h2 className="display-6 fw-bold mb-4">Checkout</h2>
                    <div className="col-lg-7">
                        <CheckoutForm />
                    </div>
                    <div className="col-lg-5 mt-md-0 mt-5">
                        <div className="rounded-4 border border-2 p-4">
                            <h6 className="fw-bold mb-3"> Your Order</h6>

                            <div className="cart-table">
                                <table className="table" style={{ verticalAlign: "middle" }}>
                                    <thead>
                                        <tr>
                                            <td className="fw-semibold">Product</td>
                                            <td className="fw-semibold">Subtotal</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <CartItem />
                                        <CartItem />


                                        <tr >
                                            <td className="py-4 fw-bold">Subtotal</td>
                                            <td className="py-4">Rs.129.00</td>
                                        </tr>

                                        <tr>
                                            <td className="py-4 fw-bold">Total</td>
                                            <td className="py-4">Rs.129.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="p-3 bg-light rounded-2 mt-2">
                                Your personal data will be used to process your order, support your experience
                                throughout this website, and for other purposes described in our <Link href={"/privacy-policy"} className="text-pink">privacy policy.</Link>
                            </div>

                            <div className="mt-4">
                                <button className="button button-pink w-100">
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const CartItem = () => {
    return (
        <tr>
            <td>
                <div className="d-flex align-items-center gap-3">
                    <div>
                        <Image
                            src={"/assets/products/product1.webp"}
                            height={60} width={60}
                            alt="offerImage"
                        />
                    </div>
                    <div className="text-light-black">
                        <p className="mb-1">Aliquam Blandit</p>
                        <h6 className="fw-semibold mb-0"> Rs.129.00 <b>X</b> 2</h6>
                    </div>
                </div>
            </td>
            <td>Rs.258.00</td>
        </tr>
    );
};

export default CheckoutIndex;
