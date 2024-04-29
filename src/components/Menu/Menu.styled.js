import styled from "styled-components";

export const StyledMenu = styled.nav `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #000;
  height: calc(100vh - 79px);
  text-align: center;
  margin-top: 79px;
  padding: 2rem;
  color: #e3e3e3;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  @media (max-width: 414px) {
    width: 100%;
  }
  a {
    text-transform: uppercase;
    width: fit-content;
    padding: 0.25rem 0;
    font-size: 2.2rem;
    font-weight: 400;
    margin: 0.5rem 0;
    color: #e3e3e3;
    position: relative;
    text-decoration: none;
    @media (max-width: 414px) {
      font-size: 1rem;
      text-align: center;
    }
  }
  .socials {
    margin-top: 40px;
    z-index: 1;
    display: flex;
    gap: 20px;
    @media (max-width: 414px) {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
  .social svg {
    height: 40px;
    width: 40px;
    @media (max-width: 414px) {
      height: 20px;
      width: 20px;
    }
  }
  .social {
    background-color: #c9b36e;
    border-radius: 100%;
    border: none;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.1s ease-in-out;
  }
`;