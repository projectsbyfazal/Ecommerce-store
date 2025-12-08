"use client";

import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const SidebarFilter = () => {
    const [priceRange, setPriceRange] = useState([100, 1000]);
    const [materials, setMaterials] = useState(
        [
            {
                id: 1,
                label: "Aluminium"
            },
            {
                id: 2,
                label: "Fabric"
            },
            {
                id: 3,
                label: "Leather"
            },
            {
                id: 4,
                label: "Wood"
            }
        ]

    );

    const [brands, setBrands] = useState(
        [
            {
                id: 1,
                label: "Godrej Interio"
            },
            {
                id: 2,
                label: "Nilkamal"
            },
            {
                id: 3,
                label: "Durian"
            }
        ]

    );

    const handleChange = (values) => {
        setPriceRange(values);
    };
    return (
        <div>
            <div className="bg-light p-3" >
                <div>
                    <select name="" id="" className="select-box form-select">
                        <option value="">Default Sorting</option>
                    </select>
                </div>

                <div className="mt-4">
                    <RangeSlider
                        defaultValue={[100, 1000]}
                        min={0}
                        max={2000}
                        step={10}
                        value={priceRange}
                        onInput={handleChange}
                        className="range-slider"
                    />
                    <div className="mt-3">
                        <strong>Price : </strong>
                        <span>Rs. {priceRange[0]}</span>
                        <span> - Rs. {priceRange[1]}</span>
                    </div>
                </div>

                <div className="mt-4">
                    <FilterByItem label={"Material"} options={materials} />
                </div>

                <div className="mt-4">
                    <FilterByItem label={"Brands"} options={brands} />
                </div>
            </div>
        </div>
    );
};


function FilterByItem({ options, label }) {
    return (
        <>
            <h6 className="fw-bold">Filter By {label}</h6>
            {
                options.map(mat => (
                    <div className="form-check bg-white p-2" key={mat.id}>
                        <input
                            className="me-3"
                            type="checkbox" value=""
                            id={mat.label} />
                        <label className="form-check-label" for={mat.label}>{mat.label}</label>
                    </div>
                ))
            }
        </>
    )
}


export default SidebarFilter;
