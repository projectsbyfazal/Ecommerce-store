"use client";
import CommonTable from "@/components/common/CommonTable";
import "@/css/Dashboard.css"

const Dashboard = () => {

    const column_data = {
        columns: [
            {
                Header: "#",
                accessor: "id",  
            },
            {
                Header: "Customer",
                accessor: "customer",
            },
            {
                Header: "Product",
                accessor: "product",
            },
            {
                Header: "Status",
                accessor: "status", 
            },
            {
                Header: "Date",
                accessor: "date", 
            },
            {
                Header: "Amount",
                accessor: "amount", 
            },
        ],
        dependencies: []
    }

    const data = [
        {
            id: 1,
            customer: "John Doe",
            product: "Wireless Headphones",
            status: "Delivered",
            date: "Oct 7, 2025",
            amount: "$120",
        },
        {
            id: 2,
            customer: "Sarah Khan",
            product: "Smart Watch",
            status: "Pending",
            date: "Oct 8, 2025",
            amount: "$99",
        },
        {
            id: 3,
            customer: "Michael Lee",
            product: "Bluetooth Speaker",
            status: "Cancelled",
            date: "Oct 5, 2025",
            amount: "$80",
        },
        {
            id: 4,
            customer: "Fatima Noor",
            product: "LED Monitor",
            status: "Delivered",
            date: "Oct 3, 2025",
            amount: "$250",
        },
    ];


    return (
        <section className="dashboard-section py-4">
            <div className="container mb-5">
                {/* Header */}
                <div className="mb-4">
                    <h3 className="fw-bold text-dark mb-1">Dashboard</h3>
                    <p className="text-muted mb-0">Quick summary of your business insights</p>
                </div>
                <div className="row g-4 align-items-stretch">
                    {/* Welcome Admin Profile */}
                    <div className="col-lg-3">
                        <div className="profile-card shadow-sm border-0 rounded-4 p-4 h-100">
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://avatar.iran.liara.run/public"
                                    alt="Admin"
                                    className="rounded-circle me-3 profile-img"
                                />
                                <div>
                                    <h6 className="fw-semibold mb-1 text-dark">Welcome back,</h6>
                                    <h5 className="fw-bold text-highlight mb-0">Admin</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="col-lg-9">
                        <div className="row g-3">
                            <div className="col-md-4">
                                <div className="stats-card shadow-sm border-0 rounded-4 text-center p-4">
                                    <h6 className="text-muted mb-2">Total Customers</h6>
                                    <h3 className="fw-bold text-highlight mb-0">2,480</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="stats-card shadow-sm border-0 rounded-4 text-center p-4">
                                    <h6 className="text-muted mb-2">Total Orders</h6>
                                    <h3 className="fw-bold text-highlight mb-0">1,240</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="stats-card shadow-sm border-0 rounded-4 text-center p-4">
                                    <h6 className="text-muted mb-2">Total Products</h6>
                                    <h3 className="fw-bold text-highlight mb-0">320</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Orders List */}
                <div className="card border-0 shadow-sm p-3 rounded-4 mt-5 overflow-hidden">
                    <CommonTable
                        data={data}
                        column_data={column_data}
                        heading="Recent Orders"
                    />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
