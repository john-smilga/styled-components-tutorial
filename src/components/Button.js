import styled from "styled-components";

const color = "#f15025";
const transition = time => `all ${time} linear`;

export const ButtonWrapper = styled.button`
  color: ${props => props.color};
  font-size: ${props => (props.big ? "2rem" : "1rem")};
  ${props => `background:${props.background}`}
`;
