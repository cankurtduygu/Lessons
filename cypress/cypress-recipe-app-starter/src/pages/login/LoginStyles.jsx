import styled from "styled-components";

export const LoginContainer = styled.div`
  /* Navbar + Footer varken login alanı tam sığsın (scroll olmasın) */
  height: calc(100vh - 72px - 55px);

  /* küçük padding, taşmayı önler */
  padding: 8px 16px;
  overflow: hidden;

  background-image: linear-gradient(
      135deg,
      rgba(15, 23, 42, 0.78) 0%,
      rgba(0, 173, 181, 0.32) 55%,
      rgba(34, 197, 94, 0.2) 100%
    ),
    url("https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1920&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: grid;
  place-items: center;
`;

export const FormContainer = styled.div`
  width: min(460px, 92vw);
  padding: 26px 24px 22px;

  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.18);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h1`
  margin: 10px 0 16px;
  color: #eaf2ff;
  font-weight: 900;
  letter-spacing: 0.4px;
  font-size: clamp(28px, 3vw, 38px);
  text-align: center;

  font-family: "Girassol", ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Arial, sans-serif;
`;

export const StyledImg = styled.img`
  width: 82px;
  height: 82px;
  object-fit: contain;

  padding: 10px;
  border-radius: 18px;

  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25);
`;

export const StyledForm = styled.form`
  width: 100%;
  margin-top: 6px;

  display: grid;
  gap: 12px;
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  line-height: 48px;

  font-size: 1rem;
  padding: 0 14px;

  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  color: #eaf2ff;
  background: rgba(2, 6, 23, 0.45);

  outline: none;

  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial,
    sans-serif;

  &::placeholder {
    color: rgba(226, 232, 240, 0.72);
  }

  &:focus {
    border-color: rgba(34, 197, 94, 0.55);
    box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.18);
  }
`;

export const StyledButton = styled.button`
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  margin-top: 6px;

  border-radius: 14px;
  border: none;

  cursor: pointer;
  font-weight: 900;
  letter-spacing: 0.4px;
  font-size: 1.05rem;

  color: #052e16;
  background: linear-gradient(135deg, #00adb5 0%, #22c55e 120%);

  box-shadow: 0 14px 30px rgba(34, 197, 94, 0.22);
  transition: transform 140ms ease, filter 140ms ease, box-shadow 140ms ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.03);
    box-shadow: 0 18px 44px rgba(34, 197, 94, 0.28);
  }

  &:active {
    transform: translateY(0px);
    filter: brightness(0.98);
  }
`;