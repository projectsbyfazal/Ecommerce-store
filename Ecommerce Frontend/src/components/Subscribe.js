import React from 'react'

const Subscribe = () => {
    return (
        <section className='subscribe py-4 mt-5'>
            <div className="container py-3">
                <div className='row align-items-center'>
                    <div className="col-md-6">
                        <h4 className='fw-bold'>Important updates waiting for you!</h4>
                        <p className='mb-0'>Subscribe and grab 20% OFF!</p>
                    </div>
                    <div className="col-md-6">
                        <div className="subscribe_input">
                            <div>
                                <input type="text" placeholder='Your Email *'/>
                            </div>
                            <div>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe
