import MainHeading from "./MainHeading"
import ProductCard from "./ProductCard";

const ProductsList = () => {
    return (
        <section>
            <div className="container pt-5">
                {/* <div className="mb-5">
                    <MainHeading title="Featured Products" />
                </div> */}

                <div className="row">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                </div>
            </div>

        </section>
    )
}

export default ProductsList
