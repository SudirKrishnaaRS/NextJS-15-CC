import React from "react";

type ProductLayoutType = {
  children: React.ReactNode;
};

const ProductLayout = ({ children }: ProductLayoutType) => {
  return (
    <div>
      {children}
      <div>
        <h2> Featured Products</h2>
      </div>
    </div>
  );
};

export default ProductLayout;
