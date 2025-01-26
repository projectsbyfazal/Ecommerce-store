import Image from "next/image";
import { assets } from "../../public/assets/frontend_assets/assets";
import Link from "next/link";
import "../css/Navbar.css";
import { Bag, Person } from 'react-bootstrap-icons';
import SearchBar from "./SearchBar";

const Navbar = () => {
    return (
        <nav className="position-sticky top-0 left-0 bg-white border-bottom border-1" style={{ zIndex: 9999 }}>
            <div className="container py-3 d-flex justify-content-between align-items-center">
                <div className="logo">
                    <Link href={"/"}>
                        {/* <Image
                            src={assets.logo}
                            alt="logo"
                        /> */}
                        fazalStore.
                    </Link>
                </div>

                <div>
                    <SearchBar />
                </div>

                <ul className="p-0 navLinks d-flex align-items-center mb-0">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Shop</Link></li>
                    <li><Link href="/">About</Link></li>
                    <li><Link href="/">Contact</Link></li>
                </ul>

                <div>

                    <button className="button">
                        <Person className="fs-5 me-1" /> Sign In
                    </button>
                    <button className="round-icon-btn ms-3">
                        <Bag />
                    </button>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
