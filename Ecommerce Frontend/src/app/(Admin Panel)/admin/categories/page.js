"use client";
import CommonTable from "@/components/common/CommonTable";
import { Pencil, Plus, PlusLg, Trash } from "react-bootstrap-icons";
import CategoryModal from "./(components)/CategoryModal";
import { useState } from "react";

const Category = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState("");
  const [existData, setExistData] = useState(null);

  function handleOpenModal(type, data) {
    setIsModalOpen(true);
    setActionType(type);
    if (type === "Edit" && data) setExistData(data);
  }

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
        Header: "Image",
        accessor: "imageUrl",
        Cell: ({ value }) => (
          <img
            src={value || "https://placehold.co/10"}
            alt="Category"
            style={{ width: "50px", height: "50px", objectFit: "cover" }}
          />
        ),
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Parent Category",
        accessor: "parentCategory",
        Cell: ({ value }) => value || "None",
      },
      {
        Header: "Action",
        accessor: "action",
        className: "col-2",
        Cell: ({ row }) => (
          <div>
            <button
              className="btn btn-sm btn-outline-primary me-2"
              onClick={() => handleOpenModal("Edit", row.original)}
            >
              <Pencil /> Edit
            </button>
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
      _id: "67162e8f4f1b0c001a4e1a01",
      name: "Electronics",
      imageUrl: "https://placehold.co/10",
      parentCategory: null,
      addedBy: "67162e8f4f1b0c001a4e1b01",
    },
    {
      _id: "67162e8f4f1b0c001a4e1a02",
      name: "Mobile Phones",
      imageUrl: "https://placehold.co/10",
      parentCategory: "67162e8f4f1b0c001a4e1a01", // Electronics
      addedBy: "67162e8f4f1b0c001a4e1b01",
    },
    {
      _id: "67162e8f4f1b0c001a4e1a03",
      name: "Laptops",
      imageUrl: "https://placehold.co/10",
      parentCategory: "67162e8f4f1b0c001a4e1a01", // Electronics
      addedBy: "67162e8f4f1b0c001a4e1b01",
    },
    {
      _id: "67162e8f4f1b0c001a4e1a04",
      name: "Fashion",
      imageUrl: "https://placehold.co/10",
      parentCategory: null,
      addedBy: "67162e8f4f1b0c001a4e1b02",
    },
    {
      _id: "67162e8f4f1b0c001a4e1a05",
      name: "Men's Clothing",
      imageUrl: "https://placehold.co/10",
      parentCategory: "67162e8f4f1b0c001a4e1a04", // Fashion
      addedBy: "67162e8f4f1b0c001a4e1b02",
    },
  ];

  return (
    <>
      <section className="dashboard-section py-4">
        <div className="container mb-5">
          {/* Orders List */}
          <div className="card border-0 shadow-sm p-3 rounded-4 mt-2 overflow-hidden">
            <CommonTable
              data={data}
              column_data={column_data}
              heading="Categories"
              actionName="categoryAction"
            >
              <button
                className="button button-pink px-4 ms-3"
                onClick={() => handleOpenModal("Add")}
              >
                <PlusLg className="me-2" /> Category
              </button>
            </CommonTable>
          </div>
        </div>
      </section>

      <CategoryModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        type={actionType}
        existData={existData}
      />
    </>
  );
};

export default Category;
