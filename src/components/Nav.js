import NavStyles from "./styles/NavStyles";

const Nav = () => (
  <NavStyles data-test="nav">
    <a href="/items">
      Shop
    </a>
    <a href="/orders">Orders</a>
    <a href="/me">Account</a>
  </NavStyles>
);

export default Nav;
