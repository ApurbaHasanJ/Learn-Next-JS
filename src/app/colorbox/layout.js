import React from "react";

const ColorBoxLayout = ({ children, left, right }) => {
  const sidebar = false;
  return (
    <section>
      {sidebar ? left : right}
      {children}
    </section>
  );
};

export default ColorBoxLayout;
