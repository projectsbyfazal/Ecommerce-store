import MainHeading from "@/components/MainHeading";
import OfferCard from "@/components/OfferCard";

const OfferProduct = () => {
  return (
    <section>
      <div className="container pt-5">
        <div className="mb-5">
          <MainHeading title="Special offers" subtitle={"Quam elementum pulvinar etiam non quam tincidunt eget nullam non."}/>
        </div>

        <div className="row">
          <OfferCard color={"green"}/>
          <OfferCard color={"brown"}/>
          <OfferCard color={"gray"}/>
        </div>
      </div>
    </section>
  );
};

export default OfferProduct;
