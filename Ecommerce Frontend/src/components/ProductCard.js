import Image from "next/image";
import { Star, StarFill, Plus } from "react-bootstrap-icons";

const ProductCard = () => {
    return (
        <div className="col-md-3">
            <div className="product_card mb-5">
                <div className="product_img">
                    <Image
                        src={"/assets/products/product3.webp"}
                        width={"250"}
                        height={150}
                        alt="productImage"
                    />
                    <div className="sale_tag">Sale</div>
                </div>
                <div className="product_content bg-white p-3 border">
                    <h5>Aliquam Blandit</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="size ">Chair</div>
                        <div style={{ color: "gold" }}>
                            <StarFill className="ms-1" />
                            <StarFill className="ms-1" />
                            <StarFill className="ms-1" />
                            <StarFill className="ms-1" />
                            <Star className="ms-1" />
                        </div>
                    </div>

                    <div className="card_footer bg-white py-3 mt-3 d-flex justify-content-between align-items-center">
                        <div className="price fw-bold text-dark fs-5"> Rs.129
                            <strike className="ms-2"> Rs.149</strike> </div>
                        <div>
                            <button className="button py-1 px-2 pe-3 fs-6 h-auto">
                                <Plus className="fs-5 " /> Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
