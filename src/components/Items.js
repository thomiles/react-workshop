import styled from "styled-components";
import t from "prop-types";
import Item, { itemShape } from "./Item";

const Container = styled.div`
  text-align: center;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  margin-top: 2rem;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
`;

const Items = ({ items }) => {
  return (
    <Container>
      <ItemsList>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ItemsList>
    </Container>
  );
};

Items.propTypes = {
  items: t.arrayOf(itemShape),
};

export default Items;
