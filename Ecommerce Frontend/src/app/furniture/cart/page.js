import { BreadcrumPath } from "@/components/common/BreadcrumImage";
import Image from "next/image";
import { QuantityCounter } from "../details/page";
import { Trash } from "react-bootstrap-icons";
import Link from "next/link";

const CartIndex = () => {
    const breadcrumPath = [
        {
            label: "Shop",
            link: "/furniture/category",
        },
        {
            label: "Cart",
        },
    ];

    return (
        <>
            <div className="container mb-5 mt-3">
                <BreadcrumPath breadcrumPath={breadcrumPath} />
                <div className="row mt-4">
                    <h2 className="display-6 fw-bold ">
                        Product Cart
                    </h2>
                    <div className="col-lg-9">
                        <div className="cart-table">
                            <table className="table" style={{ verticalAlign: "middle" }}>
                                <thead>
                                    <tr>
                                        <th className="text-light-black">Product</th>
                                        <th className="text-light-black">Quantity</th>
                                        <th className="text-light-black">Subtotal</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <CartItem />
                                    <CartItem />
                                    <CartItem />

                                    {/* <tr>
                                        <td colSpan={4} className="text-center">Cart is Empty! </td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <form className="custom-form mt-4 mb-md-0 mb-5">
                                <div className="row ">
                                    <div className="col-md-4 col-8">
                                        <input type="text" placeholder="Coupon code.." />
                                    </div>
                                    <div className="col-md-4 col-4">
                                        <button className="button btn-pink">Apply</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="rounded-4 border border-2 bg-light p-3">
                            <h6 className="fw-bold mb-3"> Cart Total</h6>

                            <div>
                                <table className="table bg-light">
                                    <tbody>
                                        <tr>
                                            <td>Subtotal</td>
                                            <td>Rs.129.00</td>
                                        </tr>

                                        <tr>
                                            <td>Total</td>
                                            <td>Rs.129.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-4">
                                <Link href={"/furniture/checkout"} className="button button-pink w-100">Proceed to checkout</Link>
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
                            height={70} width={70}
                            alt="offerImage"
                        />
                    </div>
                    <div className="text-light-black">
                        <p className="mb-1">Aliquam Blandit</p>
                        <h6 className="fw-bold mb-0"> Rs.129.00	</h6>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <QuantityCounter />
                </div>
            </td>
            <td>
                <h6 className="fw-bold mb-0"> Rs.129.00	</h6>
            </td>
            <td>
                <button className="border-0 bg-transparent text-pink">
                    <Trash />
                </button>
            </td>
        </tr>
    )
}

export default CartIndex;
