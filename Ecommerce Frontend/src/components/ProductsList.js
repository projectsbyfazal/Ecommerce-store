import MainHeading from "./common/MainHeading";
import ProductCard from "./common/ProductCard";

const ProductsList = () => {
  return (
    <section>
      <div className="container pt-5">
        {/* <div className="mb-5">
                    <MainHeading title="Featured Products" />
                </div> */}

        <div className="row">
          <ProductCard className={"col-md-3 col-sm-6"} />
          <ProductCard className={"col-md-3 col-sm-6"} />
          <ProductCard className={"col-md-3 col-sm-6"} />
          <ProductCard className={"col-md-3 col-sm-6"} />
          <ProductCard className={"col-md-3 col-sm-6"} />
          <ProductCard className={"col-md-3 col-sm-6"} />
          <ProductCard className={"col-md-3 col-sm-6"} />
          <ProductCard className={"col-md-3 col-sm-6"} />
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
