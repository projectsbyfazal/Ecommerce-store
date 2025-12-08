import Link from "next/link";
import React from "react";
import { ChevronRight } from "react-bootstrap-icons";

const BreadcrumImage = ({ pageName = "Page Name", breadcrumPath = [] }) => {
  return (
    <div className="container mt-4">
      <div className="image-breadcrum px-md-0 px-4 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1 className="display-5 fw-bold mb-4 text-white">{pageName}</h1>
          <BreadcrumPath breadcrumPath={breadcrumPath} className="px-4" />
        </div>
      </div>
    </div>
  );
};

export const BreadcrumPath = ({ breadcrumPath, className = "" }) => {
  return (
    <div className={`rounded-4 breadcrum-path py-2 ${className}`}>
      <Link href={"/"} className="text-black text-decoration-none fw-bold">
        Home
      </Link>{" "}
      <ChevronRight className="mx-2" />
      {breadcrumPath.map((path) => (
        <span key={path.label}>
          {path.link ? (
            <>
              <Link
                href={path.link}
                className="text-pink text-decoration-none fw-bold"
              >
                {path.label}
              </Link>{" "}
              <ChevronRight className="mx-2" />
            </>
          ) : (
            path.label
          )}
        </span>
      ))}
    </div>
  );
};

export default BreadcrumImage;
