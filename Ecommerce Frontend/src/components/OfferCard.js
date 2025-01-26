import Image from "next/image";
import React from "react";

const OfferCard = ({color}) => {
    return (
        <div className="col-md-4">
            <div className={`offer_card d-flex align-items-center mb-5 p-4 bg-light-${color}`}>
                <div className="offer_img">
                    <Image
                        src={"/assets/products/product1.webp"}
                        width={"120"}
                        height={170}
                        alt="offerImage"
                    />
                </div>
                <div className="text-white ps-4">
                    <div>
                        <h5 className="fw-bold">Special Discount</h5>
                        <h6 className="fw-semibold">25% OFF</h6>

                        <p>Aliquet sagittis purus faucibus egestas.</p>
                        <div>
                            <button className="button button-pink">
                                Browse Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferCard;
