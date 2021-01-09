import styled from "styled-components";
import { SCREEN_SIZES } from "../../utils/window_sizes";

export const Container = styled.div`
  display: flex;
  grid-gap: 80px;
  padding: 100px 0px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #e9e9e9;

  transition: grid-gap 0.6s;

  @media (min-width: ${SCREEN_SIZES.lg}) {
    grid-gap: 200px;
    flex-direction: row;
    padding: 100px 200px;
    justify-content: flex-start;
  }
`;

export const SocialMediaContainer = styled.div`
  width: 400px;
  height: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${SCREEN_SIZES.lg}) {
    align-items: flex-start;
  }
`;

export const SocialMediaTitle = styled.text`
  color: #716565;
  font-size: 37px;
  font-weight: 700;
  font-family: "Roboto Condensed";
`;

export const SocialMediaSubtitle = styled.text`
  color: #716565;
  font-size: 27px;
  font-weight: 400;
  text-align: center;
  font-family: "Roboto Condensed";

  @media (min-width: ${SCREEN_SIZES.lg}) {
    text-align: left;
  }
`;

export const SocialMediaImage = styled.img`
  width: 65px;

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const MediaContainer = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;

  @media (min-width: ${SCREEN_SIZES.lg}) {
    justify-content: space-between;
  }
`;
