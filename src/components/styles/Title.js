import styled from "styled-components";

const Title = styled.h3`
  margin: 0 1rem;
  text-align: center;
  transform: skew(-5deg) rotate(-1deg);
  margin-top: -3rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  a {
    background: ${(props) => props.theme.red};
    display: inline;
    line-height: 1.3;
    font-size: 4rem;
    text-align: center;
    color: white;
    padding: 0 1.5rem;
    transition: padding 0.8s;
    transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
  }
  &:hover,
  &:focus {
    a {
      padding: 0 4rem;
    }
  }
`;

export default Title;
