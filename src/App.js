import Items from "./components/Items";
import Page from "./components/Page";

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
  return (
    <Page>
      <Items items={items} />
    </Page>
  );
}

export default App;
