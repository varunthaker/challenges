import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Products() {
  const { data: products, error, isLoading } = useSWR("/api/products", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <h1>All Products</h1>
      <ul>
        {products.map((product) => {
          return <li key={product.id}>{product.name}</li>;
        })}
      </ul>
    </>
  );
}
