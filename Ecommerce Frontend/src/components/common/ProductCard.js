import Image from "next/image";
import { Plus } from "react-bootstrap-icons";
import RatingStars from "../RatingStars";
import Link from "next/link";

const ProductCard = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="product_card mb-5">

        <Link href={"/furniture/details"} className="text-decoration-none">
          <div className="product_img">
            <Image
              src={"/assets/products/product3.webp"}
              width={"250"}
              height={150}
              alt="productImage"
            />
            <div className="sale_tag">Sale</div>
          </div>
        </Link>

        <div className="product_content bg-white p-3 border">
          <Link href={"/furniture/details"} className="text-decoration-none">

            <h5 className="text-black">Aliquam Blandit</h5>
            <div className="d-flex justify-content-between align-items-center">
              <div className="size text-light-black">Chair</div>
              <div>
                <RatingStars rating={4} />
              </div>
            </div>
          </Link>


          <div className="card_footer bg-white py-3 mt-3 d-flex justify-content-between align-items-center">
            <div className="price fw-bold text-black fs-5">
              {" "}
              Rs.129
              <strike className="ms-2"> Rs.149</strike>{" "}
            </div>
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
