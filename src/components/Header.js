import React from "react";
import styled from "styled-components";
import secondaryBcg from "../images/secondaryBcg.jpeg";
export default function Header({ img, title, children }) {
  return (
    <HeaderWrapper img={img}>
      <div className="banner">
        <h1>{title}</h1>
        {children}
      </div>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  min-height: 100vh;
  background: url(${props => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  .banner {
    text-align: center;
    h1 {
      color: black;
      font-size: 3rem;
      text-transform: uppercase;
      transition: all 2s linear;
      &:hover {
        color: red;
      }
    }
  }
`;
Header.defaultProps = {
  img: secondaryBcg,
  title: "fresh coffee is the best"
};
