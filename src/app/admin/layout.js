import AdminHeader from "@/components/AdminHeader";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <section>
      <AdminHeader />
      {children}
    </section>
  );
};

export default AdminLayout;
