import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10vh 70vh 20vh;
`;

export const Header = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

export const Main = styled.div`
  background-color: green;
`;

export const Footer = styled.div`
  background-color: blue;
`;

export const LogoContainer = styled.div``;

export const LogoImage = styled.img`
  width: 60px;
`;

export const MenuContainer = styled.div`
  left: 0;
  width: 70px;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  background-color: red;
  justify-content: center;
`;
