"use client";
import { Modal } from "antd";
import Image from "next/image";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const CategoryModal = ({
  isModalOpen = false,
  setIsModalOpen,
  type = "Add",
  existData = {},
}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    if (type === "Edit") reset(existData);

    if (!isModalOpen) {
      reset({
        _id: "",
        name: "",
        image: null,
        imageUrl: null,
        parentCategory: null,
        addedBy: "",
      });
    }

    console.log(existData);
  }, [isModalOpen]);

  const parentCategories = [
    {
      _id: "67162e8f4f1b0c001a4e1a01",
      name: "Electronics",
      imageUrl: "https://example.com/images/electronics.jpg",
      parentCategory: null,
      addedBy: "66f1a6d12b1d9a001f3f09f9",
    },
    {
      _id: "67162e8f4f1b0c001a4e1a04",
      name: "Fashion",
      imageUrl: "https://example.com/images/fashion.jpg",
      parentCategory: null,
      addedBy: "66f1a6d12b1d9a001f3f09f9",
    },
    {
      _id: "67162e8f4f1b0c001a4e1a03",
      name: "Laptops",
      imageUrl: "https://example.com/images/home-kitchen.jpg",
      parentCategory: null,
      addedBy: "66f1a6d12b1d9a001f3f09f9",
    },
    {
      _id: "67162e8f4f1b0c001a4e1a05",
      name: "Men's Clothing",
      imageUrl: "https://example.com/images/sports-outdoors.jpg",
      parentCategory: null,
      addedBy: "66f1a6d12b1d9a001f3f09f9",
    },
  ];

  useEffect(() => {
    if (watch("image")) {
      reset({
        imageUrl: URL.createObjectURL(watch("image")[0])
      })
    } else {
      reset({
        imageUrl: null
      })
    }
  }, [watch("image")])

  return (
    <>
      <Modal
        title={`${type} Category`}
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        footer={null}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row align-items-center custom-form">
            {/* Name */}
            <div className="col-12 mt-4">
              <input
                placeholder="Category Name*"
                {...register("name", {
                  required: "Category name is required!",
                  minLength: {
                    value: 3,
                    message: "Name must contain at least 3 characters",
                  },
                })}
              />
              <div className="error-message">{errors.name?.message}</div>
            </div>

            {/* Image */}
            <div className={`col-${watch("imageUrl") ? '10' : '12'} mt-4`}>
              <input
                type="file"
                accept="image/*"
                {...register("image", { ...(!watch("imageUrl") && { required: "Image is required!" }) })}
              />
              <div className="error-message">{errors.image?.message}</div>
            </div>
            {
              watch("imageUrl") &&
              <div className="col-2 mt-4">
                <img src={watch("imageUrl") || "https://placehold.co/10"} alt="CategoryImage" width={50} height={50} />
              </div>
            }

            {/* Parent Category */}
            <div className="col-12 mt-4">
              <select
                {...register("parentCategory")}
                className="form-select"
              >
                <option value="">Select Parent Category</option>
                {parentCategories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <div className="error-message">
                {errors.parentCategory?.message}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button className="button button-pink">Save Category</button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default CategoryModal;
