import React, { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

import * as S from "./styles";

function Header() {
  const handleMenu = () => {};

  return (
    <S.Container>
      <S.LogoContainer>
        <S.LogoImage src="/assets/MainLogo.png" />

        <S.LogoTextContainer>
          <S.LogoTitle src="/assets/LogoTitle.png" />

          <S.LogoSubtitle src="/assets/LogoSubtitle.png" />
        </S.LogoTextContainer>
      </S.LogoContainer>
      <S.MenuContainer onClick={handleMenu}>
        <HiOutlineDotsVertical size="50px" color="#E2E0B8" />
      </S.MenuContainer>

      <S.MenuItemsContainer>
        <S.MenuItem>
          <S.MenuItemText>ABOUT US</S.MenuItemText>
        </S.MenuItem>

        <S.MenuItem>
          <S.MenuItemText>MODELS</S.MenuItemText>
        </S.MenuItem>

        <S.MenuItem>
          <S.MenuItemText>GUARANTEE</S.MenuItemText>
        </S.MenuItem>
      </S.MenuItemsContainer>
    </S.Container>
  );
}

export default Header;
