import styled from "styled-components";

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 12;
  &:focus {
    outline: none;
  }
  div {
    width: 3rem;
    height: 0.25rem;
    background: #c9b36e;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      display: ${({ open }) => (open ? "none" : "block")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
