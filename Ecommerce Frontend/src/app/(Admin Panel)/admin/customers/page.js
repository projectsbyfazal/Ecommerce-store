"use client";
import CommonTable from "@/components/common/CommonTable";
import { Eye } from "react-bootstrap-icons";
import { Modal, Descriptions } from "antd";
import { useState } from "react";

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const showUserDetails = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const column_data = {
    columns: [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: function ({ row }) {
          return (
            <div>
              <button
                onClick={() => showUserDetails(row.original)}
                className="btn btn-sm btn-outline-danger"
              >
                <Eye /> view
              </button>
            </div>
          );
        },
      },
    ],
    dependencies: [],
  };

  const data = [
    {
      id: 1,
      name: "Yasir Khan",
      email: "yasir.khan@example.com",
      phone: "+91 9876543210",
      address: "Vadodara, Gujarat, India",
      city: "Vadodara",
      country: "India",
    },
    {
      id: 2,
      name: "Aisha Patel",
      email: "aisha.patel@example.com",
      phone: "+91 9123456780",
      address: "Ahmedabad, Gujarat, India",
      city: "Ahmedabad",
      country: "India",
    },
    {
      id: 3,
      name: "Rahul Sharma",
      email: "rahul.sharma@example.com",
      phone: "+91 9988776655",
      address: "Mumbai, Maharashtra, India",
      city: "Mumbai",
      country: "India",
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
              heading="Customers"
            />
          </div>
        </div>
      </section>

      <Modal
        title="Customer Details"
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          setSelectedUser(null);
        }}
        footer={null}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        {selectedUser && (
          <Descriptions bordered column={1}>
            <Descriptions.Item label="Name">
              {selectedUser.name}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              {selectedUser.email}
            </Descriptions.Item>
            <Descriptions.Item label="Phone">
              {selectedUser.phone}
            </Descriptions.Item>
            <Descriptions.Item label="City">
              {selectedUser.city}
            </Descriptions.Item>
            <Descriptions.Item label="Country">
              {selectedUser.country}
            </Descriptions.Item>
            <Descriptions.Item label="Address">
              {selectedUser.address}
            </Descriptions.Item>
          </Descriptions>
        )}
      </Modal>
    </>
  );
};

export default Users;
