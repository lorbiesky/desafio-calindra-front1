import * as S from "../styles/home";
import Header from "../components/Header";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <S.Container>
      <Header />

      <S.Main>
        <S.MainItemContainer>
          <S.TextContainer>
            <S.MainItemText>
              Measuring <br />
              everything
            </S.MainItemText>
          </S.TextContainer>
          <S.YellowTapeImage src="/assets/YellowTape.png" />
        </S.MainItemContainer>

        <S.SecondItemContainer>
          <S.SecondTextContainer>
            <S.SecondTextTitle>
              We are Leader <br />
              in Measure Tapes
            </S.SecondTextTitle>

            <S.SecondTextSubtitle>
              There are 5x the <br />
              circumference of planet <br />
              earth in metric tapes.
            </S.SecondTextSubtitle>
          </S.SecondTextContainer>

          <S.GreenTapeImage src="/assets/GreenTape.png" />
        </S.SecondItemContainer>
      </S.Main>

      <Footer />
    </S.Container>
  );
}

export default HomePage;
