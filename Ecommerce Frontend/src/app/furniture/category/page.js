import BreadcrumImage from "@/components/common/BreadcrumImage";
import ProductCard from "@/components/common/ProductCard";
import CategorySlider from "@/components/CategorySlider";
import SidebarFilter from "@/components/SidebarFilter";

const CategoryIndex = () => {
  const breadcrumPath = [
    {
      label: "Shop",
      link: "/shop",
    },
    {
      label: "Beds",
    },
  ];

  return (
    <>
      <BreadcrumImage breadcrumPath={breadcrumPath} pageName={"Beds"} />

      <CategorySlider />

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3">
            <SidebarFilter />
          </div>
          <div className="col-lg-9">
            <div className="row">
              <ProductCard className={"col-md-4 col-sm-6"} />
              <ProductCard className={"col-md-4 col-sm-6"} />
              <ProductCard className={"col-md-4 col-sm-6"} />
              <ProductCard className={"col-md-4 col-sm-6"} />
              <ProductCard className={"col-md-4 col-sm-6"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryIndex;
