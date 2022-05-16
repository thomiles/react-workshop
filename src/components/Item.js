import React from "react";
import t from "prop-types";
import Title from "./styles/Title";
import ItemStyles from "./styles/Item";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";

const Item = ({ item }) => {
  return (
    <ItemStyles>
      {item.image && <img src={item.image} alt={item.title} />}
      <Title>
        <a href={`/item/${item.id}`}>{item.title}</a>
      </Title>
      <PriceTag>{formatMoney(item.price)}</PriceTag>
      <p>{item.description}</p>
    </ItemStyles>
  );
};

const itemShape = t.shape({
  id: t.string,
  image: t.string,
  title: t.string,
  description: t.string,
  price: t.number,
});

Item.propTypes = {
  item: itemShape,
};

export default Item;
export { itemShape };
