import styled from "styled-components";

export const MainContainer = styled.div`
  width: min(1280px, 100%);
  margin: 28px auto 64px;
  padding: 0 18px;

  display: grid;

  /* responsive kolon */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  /* kartlar arası boşluk */
  gap: 34px;

  /* ÖNEMLİ: kartları ortala */
  justify-items: center;
`;

export const RecipeCard = styled.div`
  position: relative;
  height: 360px;

  /* ÖNEMLİ: kart genişliği sabitlenirse boşluk çok daha belirgin olur */
  width: 100%;
  max-width: 285px;

  background: linear-gradient(
    180deg,
    rgba(236, 248, 233, 0.98),
    rgba(236, 248, 233, 0.72)
  );
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 18px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;

  padding: 14px;
  overflow: hidden;

  box-shadow: 0 10px 26px rgba(2, 8, 23, 0.1);
  transition: transform 180ms ease, box-shadow 180ms ease,
    border-color 180ms ease;

  /* üstte accent çizgi */
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 5px;
    width: 100%;
    background: linear-gradient(
      90deg,
      #00adb5 0%,
      #22c55e 60%,
      #a3e635 120%
    );
    opacity: 0.95;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 46px rgba(2, 8, 23, 0.16);
    border-color: rgba(0, 173, 181, 0.35);
  }
`;

export const RecipeHeader = styled.h1`
  margin: 10px 6px 12px;
  font-size: 1.02rem;
  line-height: 1.2;
  text-align: center;
  font-weight: 900;
  color: #0f172a;
  letter-spacing: 0.2px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 14px;
  object-fit: cover;

  border: 1px solid rgba(15, 23, 42, 0.06);
  background: #f1f5f9;

  transform: scale(1);
  transition: transform 220ms ease, filter 220ms ease;

  ${RecipeCard}:hover & {
    transform: scale(1.04);
    filter: saturate(1.05) contrast(1.02);
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 14px;
  border: 1px solid rgba(15, 23, 42, 0.06);

  background: linear-gradient(135deg, #00adb5 0%, #22c55e 120%);
  color: #052e16;

  font-weight: 900;
  letter-spacing: 0.3px;

  cursor: pointer;
  transition: transform 140ms ease, filter 140ms ease, box-shadow 140ms ease;

  box-shadow: 0 10px 18px rgba(34, 197, 94, 0.18);

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.03);
    box-shadow: 0 14px 26px rgba(34, 197, 94, 0.24);
  }

  &:active {
    transform: translateY(0px);
    filter: brightness(0.98);
  }
`;

export const ImgDiv = styled.div`
  width: min(1200px, 100%);
  margin: 30px auto 0;
  padding: 40px 16px;

  display: grid;
  place-items: center;

  background: radial-gradient(
      900px 320px at 50% 0%,
      rgba(255, 255, 255, 0.38),
      transparent 60%
    ),
    linear-gradient(135deg, #00adb5 0%, #0b7285 60%, #0f172a 180%);
  border-radius: 20px;

  box-shadow: 0 16px 44px rgba(2, 8, 23, 0.14);
`;

export const HomeImg = styled.img`
  width: min(760px, 92%);
  opacity: 0.98;
  filter: drop-shadow(0 18px 28px rgba(0, 0, 0, 0.18));
`;