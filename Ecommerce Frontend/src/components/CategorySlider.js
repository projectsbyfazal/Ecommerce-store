import Image from "next/image"
import MainHeading from "./MainHeading"

const CategorySlider = () => {
    return (
        <section className="pt-5">
            <div className="container">

                <div className="mb-4">
                    <MainHeading
                        title="Checkout our Furniture"
                        subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere voluptates illo, architecto minus autem exercitationem impedit."
                    />
                </div>

                <div className=" category-slider border-bottom border-2 pb-5">
                    <div className="category-card text-center pe-5">
                        <Image src="/assets/frontend_assets/food_1.png"
                            alt="ice-creamCategoryImage"
                            width={100} height={100}
                            className="rounded-circle object-fit-cover border border-3 border-light p-1" />

                        <h6>Ice Cream</h6>
                    </div>
                    <div className="category-card text-center pe-5">
                        <Image src="/assets/frontend_assets/food_2.png"
                            alt="ice-creamCategoryImage"
                            width={100} height={100}
                            className="rounded-circle object-fit-cover border border-3 border-light p-1" />

                        <h6>Ice Cream</h6>
                    </div>
                    <div className="category-card text-center pe-5">
                        <Image src="/assets/frontend_assets/food_3.png"
                            alt="ice-creamCategoryImage"
                            width={100} height={100}
                            className="rounded-circle object-fit-cover border border-3 border-light p-1" />

                        <h6>Ice Cream</h6>
                    </div>
                    <div className="category-card text-center pe-5">
                        <Image src="/assets/frontend_assets/food_4.png"
                            alt="ice-creamCategoryImage"
                            width={100} height={100}
                            className="rounded-circle object-fit-cover border border-3 border-light p-1" />

                        <h6>Ice Cream</h6>
                    </div>
                    <div className="category-card text-center pe-5">
                        <Image src="/assets/frontend_assets/food_6.png"
                            alt="ice-creamCategoryImage"
                            width={100} height={100}
                            className="rounded-circle object-fit-cover border border-3 border-light p-1" />

                        <h6>Ice Cream</h6>
                    </div>
                    <div className="category-card text-center pe-5">
                        <Image src="/assets/frontend_assets/food_5.png"
                            alt="ice-creamCategoryImage"
                            width={100} height={100}
                            className="rounded-circle object-fit-cover border border-3 border-light p-1" />

                        <h6>Ice Cream</h6>
                    </div>
                    <div className="category-card text-center pe-5">
                        <Image src="/assets/frontend_assets/food_7.png"
                            alt="ice-creamCategoryImage"
                            width={100} height={100}
                            className="rounded-circle object-fit-cover border border-3 border-light p-1" />

                        <h6>Ice Cream</h6>
                    </div>
                    <div className="category-card text-center pe-5">
                        <Image src="/assets/frontend_assets/food_8.png"
                            alt="ice-creamCategoryImage"
                            width={100} height={100}
                            className="rounded-circle object-fit-cover border border-3 border-light p-1" />

                        <h6>Ice Cream</h6>
                    </div>
                    <div className="category-card text-center pe-5">
                        <Image src="/assets/frontend_assets/food_9.png"
                            alt="ice-creamCategoryImage"
                            width={100} height={100}
                            className="rounded-circle object-fit-cover border border-3 border-light p-1" />

                        <h6>Ice Cream</h6>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategorySlider
