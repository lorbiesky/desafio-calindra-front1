import styled from "styled-components";
import { SCREEN_SIZES } from "../../utils/window_sizes";

export const Container = styled.div`
  height: 75px;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (min-width: ${SCREEN_SIZES.lg}) {
    padding: 0 50px;
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  grid-gap: 20px;
  flex-direction: row;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 55px;
`;

export const LogoTextContainer = styled.div`
  display: none;
  grid-gap: 5px;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: ${SCREEN_SIZES.lg}) {
    display: flex;
  }
`;

export const LogoTitle = styled.img`
  width: 150px;
`;

export const LogoSubtitle = styled.img`
  width: 150px;
`;

export const MenuContainer = styled.div`
  left: 0;
  width: 70px;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;

  :hover {
    opacity: 0.6;
    cursor: pointer;
  }

  @media (min-width: ${SCREEN_SIZES.lg}) {
    display: none;
  }
`;

export const MenuItemsContainer = styled.div`
  display: none;
  grid-gap: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${SCREEN_SIZES.lg}) {
    display: flex;
  }
`;

export const MenuItem = styled.div`
  width: 150px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const MenuItemText = styled.span`
  color: #846219;
  font-size: 17px;
  font-weight: 300;
  font-family: "Roboto Condensed";
`;
