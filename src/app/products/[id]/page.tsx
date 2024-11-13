// Defining the type for the `params`
interface ProductParamsType {
  params: {
    id: string;
  };
}

const Product = async ({ params }: ProductParamsType) => {
  // Accessing the url parameters
  const { id } = await params;

  return <div>Product: {id}</div>;
};

export default Product;
