import React from "react";
import * as S from "./styles";

function Footer() {
  return (
    <S.Container>
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
            2490 Leisure Lane <br />
            San Luis Obispo <br />
            California
          </S.SocialMediaSubtitle>
        </S.MediaContainer>
      </S.SocialMediaContainer>
    </S.Container>
  );
}

export default Footer;
