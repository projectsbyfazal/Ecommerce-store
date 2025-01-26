import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
    return (
        <section>
            <div className='container py-5'>
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <h2 className="display-6 fw-bold ">
                            Luxurious Furniture Starts with the Best Quality Materials
                        </h2>
                        <p className="fs-5 py-4">
                            Pellentesque ullamcorper dignissim condimentum volutpat
                            consequat mauris nunc lacinia quis.
                        </p>

                        <div>
                            <button className="button button-pink px-4">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className='col-md-7'>
                        <div className='ps-md-5'>
                        <Image
                            src={"https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/home-mask-image.webp"}
                            width={300} height={400}
                            className='w-100 object-fit-cover rounded-4'
                        />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
