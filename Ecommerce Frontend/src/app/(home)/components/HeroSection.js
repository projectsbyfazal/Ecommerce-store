import { ArrowRight } from "react-bootstrap-icons";

const HeroSection = () => {
  return (
    <section>
      <div className="container mt-4">
        <div className="hero_banner p-5">
          <div className="row">
            <div className="col-md-5">
              <h1 className="display-4 fw-bold ">
                Exquisite design combined with functionalities
              </h1>
              <p className="fs-5 py-4">
                Pellentesque ullamcorper dignissim condimentum volutpat
                consequat mauris nunc lacinia quis.
              </p>

              <div>
                <button className="button button-pink px-4">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="col-md-7">
              <div className="d-flex">
                <CardContent
                  name={"Wooden Chair"}
                  price={"199"}
                  className={"full"}
                  imgUrl={"https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/home-hero-image-1.webp"}
                />
                <div className="w-50">
                  <CardContent
                    name={"Pretium Elite"}
                    price={"130"}
                    className={"w-100"}
                    imgUrl={"https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/home-hero-image-2.webp"}
                  />

                  <div className="hero_card p-5 d-flex justify-content-center align-items-center w-100 mt-4" style={{ backgroundColor: "#274c4f" }}>
                    <div className="text-white text-center">
                      <h5 className="fw-bold">25% OFF</h5>
                      <p>Donec ac odio tempor dapibus.</p>
                      <div>
                        <button className="button px-4">
                          Explore Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function CardContent({ name, price, className, imgUrl }) {
  return (
    <div className={`hero_card p-4 ${className}`}
      style={{ backgroundImage: `url("${imgUrl}")` }}
    >
      <div className="d-flex h-100 flex-column justify-content-between align-items-start">
        <div className="bg-white px-3 py-2 rounded-3 d-inline-block">
          <h6 className="fw-bold">{name}</h6>
          <p className="mb-0">${price}</p>
        </div>
        <div>
          <button className="round-icon-btn">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
