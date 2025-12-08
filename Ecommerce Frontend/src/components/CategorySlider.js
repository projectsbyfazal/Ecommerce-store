import Image from "next/image";
import MainHeading from "./common/MainHeading";

const CategorySlider = ({ isHeading = false }) => {
  const categories = [
    {
      id: 1,
      name: "Armchairs",
      products: 6,
      img: "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/armchairs-category-hero-image.webp",
    },
    {
      id: 2,
      name: "Chairs",
      products: 6,
      img: "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/chairs-category-hero-image.webp",
    },
    {
      id: 3,
      name: "Storage",
      products: 6,
      img: "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/storage-category-hero-image.webp",
    },
    {
      id: 4,
      name: "Sofas",
      products: 6,
      img: "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/sofas-category-hero-image.webp",
    },
    {
      id: 5,
      name: "Decor",
      products: 6,
      img: "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/decor-category-hero-image.webp",
    },
    {
      id: 6,
      name: "Tables",
      products: 6,
      img: "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/tables-category-hero-image.webp",
    },
  ];

  return (
    <section className="pt-5">
      <div className="container">
        {isHeading && (
          <div className="mb-4">
            <MainHeading
              title="Checkout our Furniture"
              subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere voluptates illo, architecto minus autem exercitationem impedit."
            />
          </div>
        )}

        <div className="category-slider border-bottom border-2 pb-5">
          {categories.map((category) => (
            <div key={category.id} className="category-card text-center pe-5">
              <Image
                src={category.img}
                alt="ice-creamCategoryImage"
                width={100}
                height={100}
                className="rounded-circle object-fit-cover border border-3 border-light p-1"
              />

              <h6>{category.name}</h6>
            </div>
          ))}

           {categories.map((category) => (
            <div key={category.id} className="category-card text-center pe-5">
              <Image
                src={category.img}
                alt="ice-creamCategoryImage"
                width={100}
                height={100}
                className="rounded-circle object-fit-cover border border-3 border-light p-1"
              />

              <h6>{category.name}</h6>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default CategorySlider;
