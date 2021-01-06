import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  height: 75px;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  padding: 100px 0px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #e9e9e9;
`;

export const LogoContainer = styled.div``;

export const LogoImage = styled.img`
  width: 55px;
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
`;

export const MainItemContainer = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #e9e9e9;
`;

export const YellowTapeImage = styled.img`
  width: 455px;
`;

export const TextContainer = styled.div`
  width: 455px;
  display: flex;
  padding: 0px 10px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
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
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #506fa9;
`;

export const GreenTapeImage = styled.img`
  width: 400px;
  align-self: flex-end;
`;

export const SecondTextTitle = styled.text`
  color: white;
  font-size: 60px;
  font-weight: 700;
  font-family: "Roboto Condensed";
`;

export const SecondSubtitleContainer = styled.div`
  width: 455px;
  padding: 30px 10px;
`;

export const SecondTextSubtitle = styled.text`
  color: white;
  font-size: 40px;
  font-weight: 300;
  text-align: left;
  font-family: "Roboto Condensed";
`;

export const SocialMediaContainer = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
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
  padding: 0 30px;
  font-family: "Roboto Condensed";
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
`;
