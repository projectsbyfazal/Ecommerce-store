"use client";
import Link from "next/link";
import "../../css/Navbar.css";
import { Bag, ChevronDown, List, Person, X } from 'react-bootstrap-icons';
import SearchBar from "../SearchBar";
import { useState } from "react";

const Navbar = () => {

    const [showNav, setShowNav] = useState(false)

    return (
        <nav className="position-fixed w-100 top-0 left-0 bg-white border-bottom border-1" style={{ zIndex: 999 }}>
            <div className="container py-3 d-flex justify-content-between align-items-center">
                <div className="logo">
                    <Link href={"/"}>
                        fazalStore.
                    </Link>
                </div>

                <div className="d-md-block d-none">
                    <SearchBar />
                </div>

                <ul className={`p-md-0 navLinks ${showNav && 'show'} mb-0 flex-md-row flex-column`}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/furniture/category">Shop</Link></li>
                    <li><Link href="/">About</Link></li>
                    <li><Link href="/contact-us">Contact</Link></li>

                    <li className="custom-dropdown">
                        <Link href="/">Admin <ChevronDown size={14} className="ms-1"/></Link>
                        <ul className="shadow">
                            <li><Link href="/admin/dashboard">Dashboard</Link></li>
                            <li><Link href="/admin/customers">Customers</Link></li>
                            <li><Link href="/admin/categories">Categories</Link></li>
                            <li><Link href="/admin/brands">Brands</Link></li>
                            <li><Link href="/admin/products">Products</Link></li>
                        </ul>
                    </li>
                </ul>

                <div className="d-flex align-items-center">
                    <div>
                        <Link href={"/login"} className="button">
                            <Person className="fs-5 me-md-1" /> <span className="d-md-inline d-none">Sign In</span>
                        </Link>
                    </div>
                    <div>
                        <Link href={"/furniture/cart"} className="round-icon-btn ms-3">
                            <Bag />
                        </Link>
                    </div>

                    <div className="d-md-none d-inline-block">
                        <button className="menu-btn ms-3" onClick={() => setShowNav(prev => !prev)}>
                            {showNav ? <X /> : <List />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
