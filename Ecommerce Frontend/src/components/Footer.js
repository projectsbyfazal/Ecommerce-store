import Link from "next/link";
import React from "react";
import { Envelope, Phone, PinMap, Telephone } from "react-bootstrap-icons";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row py-5 border-2 border-bottom">
                    <div className="col-md-4 pe-5">
                        <h5 className="fw-bold mb-4">About Us</h5>
                        <p className="mt-3">
                            Mauris vitae ultricies leo integer malesuada.
                            Odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus euismod
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </p>
                    </div>

                    <div className="col-md-2">
                        <div>
                            <h5 className="fw-bold mb-4">Quick Links</h5>

                            <div className="footer_links">
                                <div><Link href={"/"}>Shop</Link></div>
                                <div><Link href={"/"}>About Us</Link></div>
                                <div><Link href={"/"}>Contact Us</Link></div>
                                <div><Link href={"/"}>Terms & Conditions</Link></div>
                                <div><Link href={"/"}>Privacy Policy</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div>
                            <h5 className="fw-bold mb-4">Categories</h5>

                            <div className="footer_links">
                                <div><Link href={"/"}>Chairs</Link></div>
                                <div><Link href={"/"}>Tables</Link></div>
                                <div><Link href={"/"}>Sofas</Link></div>
                                <div><Link href={"/"}>Beds</Link></div>
                                <div><Link href={"/"}>Storage</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 pe-5 footer_links">
                        <h5 className="fw-bold mb-4">Connect With Us</h5>

                        <div className="d-flex align-items-center">
                            <div className="connect_icon">
                                <PinMap />
                            </div>
                            <div className="ms-3">
                                <h6 className="fw-bold mb-0">Address</h6>
                                <p className="mb-0"> Street Name, NY 38954 </p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center mt-3">
                            <div className="connect_icon">
                                <Telephone />
                            </div>
                            <div className="ms-3">
                                <h6 className="fw-bold mb-0">Call Us</h6>
                                <p className="mb-0"> <a href="tel:+91 9313911094" >+91 9313911094</a> </p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center mt-3">
                            <div className="connect_icon">
                                <Envelope />
                            </div>
                            <div className="ms-3">
                                <h6 className="fw-bold mb-0">Email</h6>
                                <p className="mb-0"> <a href="mailto:yasirkhan8104@gmail.com" >yasirkhan8104@gmail.com</a> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center py-4 ">
                    Copyrights &copy; {new Date().getFullYear()} www.fazalstores.com - All rights reserved
                </div>
            </div>
        </footer>
    )
};

export default Footer;
