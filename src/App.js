import Items from "./components/Items";
import Page from "./components/Page";
import { useProducts } from "./hooks/useProduct";

const items = [
  {
    id: "123",
    title: "Wayfarer Bag",
    description:
      "I adore the challenge of creating truly modern bags, wear personality and sense",
    price: 2499,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
];

function App() {
  const { data, error, loading } = useProducts();

  return (
    <Page>
      <Items items={items} />
      {loading && <p>loading...</p>}
      {data.length > 0 && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <p>error loading data...</p>}
    </Page>
  );
}

export default App;
