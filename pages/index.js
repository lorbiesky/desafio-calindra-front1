import * as S from "../styles/home";
import { HiOutlineDotsVertical } from "react-icons/hi";

function HomePage() {
  const handleMenu = () => {};

  return (
    <S.Container>
      <S.Header>
        <S.LogoImage src="/assets/MainLogo.png" />
        <S.MenuContainer onClick={handleMenu}>
          <HiOutlineDotsVertical size="65px" color="#E2E0B8" />
        </S.MenuContainer>
      </S.Header>

      <S.Main />

      <S.Footer />
    </S.Container>
  );
}

export default HomePage;
