import BreadcrumImage from "@/components/common/BreadcrumImage";
import Image from "next/image";
import RatingStars from "@/components/RatingStars";
import { DashLg, PlusLg } from "react-bootstrap-icons";
import ProductTabs from "@/components/ProductTabs";
import ProductsList from "@/components/ProductsList";
import MainHeading from "@/components/common/MainHeading";

const ProductDetails = () => {
  const breadcrumPath = [
    {
      label: "Shop",
      link: "/furniture/category",
    },
    {
      label: "Beds",
      link: "/beds",
    },
    {
      label: "Product Details",
    },
  ];

  const productImage = "/assets/products/product3.webp";

  return (
    <>
      <BreadcrumImage
        breadcrumPath={breadcrumPath}
        pageName={"Aliquam Blandit"}
      />

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <div>
                <Image
                  src={productImage}
                  width={100}
                  height={400}
                  alt="productImage"
                  className="w-100 object-fit-cover"
                />
              </div>
              <div
                className="d-flex gap-2 mt-2 overflow-auto product-details-image"
                style={{ scrollbarWidth: "none" }}
              >
                <div>
                  <Image
                    src={productImage}
                    width={100}
                    height={100}
                    alt="productImage"
                  />
                </div>
                <div>
                  <Image
                    src={productImage}
                    width={100}
                    height={100}
                    alt="productImage"
                  />
                </div>
                <div>
                  <Image
                    src={productImage}
                    width={100}
                    height={100}
                    alt="productImage"
                  />
                </div>
                <div>
                  <Image
                    src={productImage}
                    width={100}
                    height={100}
                    alt="productImage"
                  />
                </div>
                <div>
                  <Image
                    src={productImage}
                    width={100}
                    height={100}
                    alt="productImage"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-md-0 mt-5">
            <div className="product-description">
              <h2 className="display-6 fw-bold text-black">Aliquam Blandit</h2>

              <div className="d-flex align-items-center gap-3">
                <h4 className="fs-4 fw-semibold text-light-black mt-3">
                  Rs.129
                </h4>
                <div>
                  <RatingStars rating={4} />
                </div>
              </div>

              <div className="mt-4 pb-3 border-bottom">
                <p>
                  Amet consectetur adipiscing elit duis tristique. A diam
                  sollicitudin tempor id eu nisl nunc mi. Tincidunt ornare massa
                  eget egestas purus viverra accumsan in nisl. Sit amet volutpat
                  consequat mauris. Quis blandit turpis cursus in hac habitasse
                  platea dictumst. Pellentesque elit eget gravida cum sociis
                  natoque. Orci a scelerisque purus semper eget duis at. Arcu
                  non sodales neque sodales ut. Malesuada nunc vel risus commodo
                  viverra maecenas.
                </p>

                <p>
                  Senectus et netus et malesuada fames ac turpis. Dictum non
                  consectetur a erat nam at lectus urna duis. Aenean sed
                  adipiscing diam donec adipiscing tristique. In nulla posuere
                  sollicitudin aliquam ultrices sagittis orci a scelerisque.
                </p>
              </div>

              <div className="pt-4 d-flex gap-3">
                <div>
                  <QuantityCounter />
                </div>

                <div>
                  <button className="button button-pink d-flex align-items-center">
                    {" "}
                    <PlusLg className="me-2" /> Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <ProductTabs />
        </div>

        <div className="mt-5 pt-md-5">
          <MainHeading title={"Related Products"} />
          <ProductsList />
        </div>
      </div>
    </>
  );
};

export const QuantityCounter = () => {
  return (
    <div className="quantity-counter">
      <button>
        <DashLg />
      </button>
      <input type="text" defaultValue={1} max={20} min={1} maxLength={3}/>
      <button>
        <PlusLg />
      </button>
    </div>
  );
};

export default ProductDetails;
