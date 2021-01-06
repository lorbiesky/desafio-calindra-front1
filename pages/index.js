import * as S from "../styles/home";
import { HiOutlineDotsVertical } from "react-icons/hi";

function HomePage() {
  const handleMenu = () => {};

  return (
    <S.Container>
      <S.Header>
        <S.LogoImage src="/assets/MainLogo.png" />
        <S.MenuContainer onClick={handleMenu}>
          <HiOutlineDotsVertical size="50px" color="#E2E0B8" />
        </S.MenuContainer>
      </S.Header>

      <S.Main>
        <S.MainItemContainer>
          <S.TextContainer>
            <S.MainItemText>Measuring everything</S.MainItemText>
          </S.TextContainer>
          <S.YellowTapeImage src="/assets/YellowTape.png" />
        </S.MainItemContainer>

        <S.SecondItemContainer>
          <S.TextContainer>
            <S.SecondTextTitle>We are Leader</S.SecondTextTitle>
            <S.SecondTextTitle>in Measure Tapes</S.SecondTextTitle>
          </S.TextContainer>

          <S.SecondSubtitleContainer>
            <S.SecondTextSubtitle>
              There are 5x the circumference of planet earth in metric tapes.
            </S.SecondTextSubtitle>
          </S.SecondSubtitleContainer>
          <S.GreenTapeImage src="/assets/GreenTape.png" />
        </S.SecondItemContainer>
      </S.Main>

      <S.Footer>
        <S.SocialMediaContainer>
          <S.SocialMediaTitle>Follow us</S.SocialMediaTitle>

          <S.MediaContainer>
            <S.SocialMediaImage src="/assets/YoutubeIcon.png" />

            <S.SocialMediaImage src="/assets/FacebookIcon.png" />

            <S.SocialMediaImage src="/assets/TwitterIcon.png" />
          </S.MediaContainer>
        </S.SocialMediaContainer>

        <S.SocialMediaContainer>
          <S.SocialMediaTitle>Contact</S.SocialMediaTitle>

          <S.MediaContainer>
            <S.SocialMediaSubtitle>
              2490 Leisure Lane San Luis Obispo California
            </S.SocialMediaSubtitle>
          </S.MediaContainer>
        </S.SocialMediaContainer>
      </S.Footer>
    </S.Container>
  );
}

export default HomePage;
