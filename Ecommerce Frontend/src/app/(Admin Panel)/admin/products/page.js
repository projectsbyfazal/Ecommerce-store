"use client";
import CommonTable from "@/components/common/CommonTable";
import { Switch } from "antd";
import Link from "next/link";
import { Pencil, PlusLg, Trash } from "react-bootstrap-icons";

const Products = () => {

  const column_data = {
    columns: [
      {
        Header: "ID",
        accessor: "_id",
        Cell: ({ row }) => {
          return <span>{row.index + 1}</span>;
        },
      },
      {
        Header: "Product Name",
        accessor: "name",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Stock Quantity",
        accessor: "stockQuantity",
      },
      {
        Header: "Category",
        accessor: "category",
      },
      {
        Header: "Status",
        accessor: "isActive",
        Cell: ({ row }) => (
          <div className="text-center">
            <Switch
              className="black-switch"
              defaultChecked={row.original.isActive}
            // onChange={(checked) =>
            //   handleToggleStatus(row.original._id, checked)
            // }
            />
          </div>
        ),
      },
      {
        Header: "Action",
        accessor: "action",
        className: "col-2",
        Cell: ({ row }) => (
          <div>
            <Link
            href={`/admin/products/edit/${row.original._id}`}
              className="btn btn-sm btn-outline-primary me-2"
            >
              <Pencil /> Edit
            </Link>
            <button className="btn btn-sm btn-outline-danger">
              <Trash /> Delete
            </button>
          </div>
        ),
      },
    ],
    dependencies: [],
  };

  const data = [
    {
      _id: "66f1b2d72b1d9a001f3f0a20",
      name: "iPhone 15 Pro",
      description:
        "Apple iPhone 15 Pro with A17 Pro chip, titanium frame, and 120Hz ProMotion display.",
      images: [
        "https://example.com/images/iphone15pro-front.jpg",
        "https://example.com/images/iphone15pro-back.jpg",
      ],
      price: 129999,
      stockQuantity: 25,
      slug: "iphone-15-pro",
      category: "66f1a7c12b1d9a001f3f0a10", // Electronics
      brand: "66f1b1e32b1d9a001f3f0a01", // Apple
      color: "Natural Titanium",
      material: "Titanium & Glass",
      isActive: true,
    },
    {
      _id: "66f1b2d72b1d9a001f3f0a21",
      name: "Samsung Galaxy S24 Ultra",
      description:
        "Samsung flagship smartphone with S Pen support, Dynamic AMOLED display, and AI features.",
      images: [
        "https://example.com/images/s24ultra-front.jpg",
        "https://example.com/images/s24ultra-back.jpg",
      ],
      price: 119999,
      stockQuantity: 30,
      slug: "samsung-galaxy-s24-ultra",
      category: "66f1a7c12b1d9a001f3f0a10", // Electronics
      brand: "66f1b1e32b1d9a001f3f0a02", // Samsung
      color: "Phantom Black",
      material: "Aluminum & Glass",
      isActive: false,
    },
    {
      _id: "66f1b2d72b1d9a001f3f0a22",
      name: "Nike Air Zoom Pegasus 40",
      description:
        "High-performance running shoes offering great cushioning and breathability.",
      images: [
        "https://example.com/images/nike-pegasus-front.jpg",
        "https://example.com/images/nike-pegasus-side.jpg",
      ],
      price: 9999,
      stockQuantity: 60,
      slug: "nike-air-zoom-pegasus-40",
      category: "66f1a7c12b1d9a001f3f0a11", // Fashion
      brand: "66f1b1e32b1d9a001f3f0a03", // Nike
      color: "White/Blue",
      material: "Mesh & Rubber",
      isActive: true,
    },
    {
      _id: "66f1b2d72b1d9a001f3f0a23",
      name: "Sony WH-1000XM5 Headphones",
      description:
        "Industry-leading noise-cancelling wireless headphones with superior sound quality.",
      images: [
        "https://example.com/images/sony-xm5-black.jpg",
        "https://example.com/images/sony-xm5-case.jpg",
      ],
      price: 29999,
      stockQuantity: 15,
      slug: "sony-wh-1000xm5",
      category: "66f1a7c12b1d9a001f3f0a10", // Electronics
      brand: "66f1b1e32b1d9a001f3f0a04", // Sony
      color: "Black",
      material: "Plastic & Leather",
      isActive: true,
    },
    {
      _id: "66f1b2d72b1d9a001f3f0a24",
      name: "Wooden Study Table",
      description:
        "Modern wooden study table with storage drawers and a smooth finish for home or office use.",
      images: [
        "https://example.com/images/wooden-table1.jpg",
        "https://example.com/images/wooden-table2.jpg",
      ],
      price: 7499,
      stockQuantity: 40,
      slug: "wooden-study-table",
      category: "66f1a7c12b1d9a001f3f0a12", // Home & Kitchen
      brand: "66f1b1e32b1d9a001f3f0a05", // IKEA
      color: "Brown",
      material: "Sheesham Wood",
      isActive: false,
    },
  ];

  return (
    <>
      <section className="dashboard-section py-4">
        <div className="container mb-5">
          {/* Orders List */}
          <div className="card border-0 shadow-sm p-3 rounded-4 mt-2 overflow-hidden">
            <CommonTable data={data} column_data={column_data} heading="Products">
              <Link
                href={"/admin/products/add"}
                className="button button-pink px-4 ms-3"
              >
                <PlusLg className="me-2" /> Product
              </Link>
            </CommonTable>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
