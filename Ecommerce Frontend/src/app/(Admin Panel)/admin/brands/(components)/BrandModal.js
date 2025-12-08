"use client";
import { Modal } from "antd";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const BrandModal = ({
  isModalOpen = false,
  setIsModalOpen,
  type = "Add",
  existData = {},
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    if (type === "Edit") reset(existData);

    if (!isModalOpen) {
      reset({
        _id: "",
        name: ""
      });
    }
  }, [isModalOpen]);

  return (
    <>
      <Modal
        title={`${type} Brand`}
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
                placeholder="Brand Name*"
                {...register("name", {
                  required: "Brand name is required!",
                  minLength: {
                    value: 3,
                    message: "Name must contain at least 2 characters",
                  },
                })}
              />
              <div className="error-message">{errors.name?.message}</div>
            </div>
          </div>

          <div className="mt-4">
            <button className="button button-pink">Save Brand</button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default BrandModal;
