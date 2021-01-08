import styled from "styled-components";
import { SCREEN_SIZES } from "../utils/window_sizes";

export const Container = styled.div`
  align-items: center;
  justify-content: center;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const MainItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 800px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #e9e9e9;

  @media (min-width: ${SCREEN_SIZES.lg}) {
    flex-direction: row;
  }
`;

export const YellowTapeImage = styled.img`
  width: 455px;

  transition: width 0.6s;

  @media (min-width: ${SCREEN_SIZES.lg}) {
    width: 650px;
  }
`;

export const TextContainer = styled.div`
  width: 455px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const MainItemText = styled.text`
  color: #716565;
  font-size: 80px;
  font-weight: 700;
  font-family: "Roboto Condensed";
`;

export const SecondItemContainer = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #506fa9;
`;

export const GreenTapeImage = styled.img`
  width: 450px;
  align-self: flex-end;

  @media (min-width: ${SCREEN_SIZES.lg}) {
    width: 900px;
  }
`;

export const SecondTextContainer = styled.div`
  display: flex;
  grid-gap: 30px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  @media (min-width: ${SCREEN_SIZES.lg}) {
    left: 100px;
    bottom: 150px;
    position: absolute;
  }
`;

export const SecondTextTitle = styled.text`
  color: white;
  font-size: 60px;
  font-weight: 700;
  font-family: "Roboto Condensed";
`;

export const SecondTextSubtitle = styled.text`
  color: white;
  font-size: 40px;
  font-weight: 300;
  text-align: left;
  font-family: "Roboto Condensed";
`;
