interface ProductParamsType {
  params: {
    id: string;
  };
}

const Product = async ({ params }: ProductParamsType) => {
  const { id } = await params;
  return <div>Product: {id}</div>;
};

export default Product;
