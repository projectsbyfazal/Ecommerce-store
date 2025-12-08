// "use client";
// table column sorting
export const generateSortingIndicator = (column) => {
  return column.isSorted ? (
    column.isSortedDesc ? (
      <i className="bx bx-sort-down"></i>
    ) : (
      <i className="bx bx-sort-up"></i>
    )
  ) : (
    <i
      className="bx bx-transfer-alt opacity-25"
      style={{ transform: "rotate(90deg)" }}
    ></i>
  );
};

// all columns
// export default function getColumns() {
//   return {
//     userColumns: {
//       columns: [
//         {
//           Header: "ID",
//           accessor: "id",
//         },
//         {
//           Header: "Name",
//           accessor: "name",
//         },
//         {
//           Header: "Email",
//           accessor: "email",
//         },
//         {
//           Header: "Phone",
//           accessor: "phone",
//         },
//         {
//           Header: "Address",
//           accessor: "address",
//         }
//       ],
//       dependencies: [],
//     },
//   };
// }
