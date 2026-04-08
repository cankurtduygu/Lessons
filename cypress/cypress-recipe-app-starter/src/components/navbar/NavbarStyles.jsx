import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;

  height: 72px;
  padding: 0 18px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  /* glass / modern header */
  background: rgba(225, 241, 221, 0.78);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  border-bottom: 1px solid rgba(2, 71, 94, 0.10);

  /* köşeleri yumuşatmak istersen açık bırak */
  /* border-radius: 0 0 14px 14px; */
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: baseline;
  gap: 6px;

  text-decoration: none;
  color: #0f172a;

  i {
    font-family: "Girassol", ui-sans-serif, system-ui, -apple-system, Segoe UI,
      Roboto, Arial, sans-serif;
    font-weight: 900;
    font-size: 1.9rem;
    color: #0f172a;
  }

  span {
    font-family: "Girassol", ui-sans-serif, system-ui, -apple-system, Segoe UI,
      Roboto, Arial, sans-serif;
    font-weight: 600;
    font-size: 1.9rem;
    color: #00adb5;
  }
`;

export const Hamburger = styled.button`
  display: none;
  border: none;
  background: transparent;
  cursor: pointer;

  width: 44px;
  height: 44px;
  border-radius: 12px;

  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover {
    background: rgba(0, 173, 181, 0.10);
  }

  span {
    display: block;
    height: 3px;
    width: 22px;
    background: #00adb5;
    border-radius: 999px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    position: absolute;
    left: 16px;
    right: 16px;
    top: 72px;

    display: grid;
    gap: 10px;

    padding: 12px;
    border-radius: 16px;

    background: rgba(225, 241, 221, 0.92);
    border: 1px solid rgba(2, 71, 94, 0.12);
    box-shadow: 0 18px 50px rgba(2, 8, 23, 0.18);

    /* aç/kapa */
    opacity: ${({ hamburOpen }) => (hamburOpen ? 1 : 0)};
    transform: ${({ hamburOpen }) =>
      hamburOpen ? "translateY(0)" : "translateY(-8px)"};
    pointer-events: ${({ hamburOpen }) => (hamburOpen ? "auto" : "none")};
    transition: opacity 160ms ease, transform 160ms ease;
  }
`;

const sharedLink = `
  height: 44px;
  padding: 0 14px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;
  text-decoration: none;

  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: 0.2px;

  color: #02475e;

  transition: background 140ms ease, transform 140ms ease, color 140ms ease;

  &:hover {
    background: rgba(0, 173, 181, 0.12);
    color: #00adb5;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    background: rgba(255, 255, 255, 0.55);
    border: 1px solid rgba(2, 71, 94, 0.12);
  }
`;

export const MenuLink = styled(Link)`
  ${sharedLink}
  font-family: "Girassol", ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Arial, sans-serif;
`;

export const A = styled.a`
  ${sharedLink}
  font-family: "Girassol", ui-sans-serif, system-ui, -apple-system, Segoe UI,
    Roboto, Arial, sans-serif;
`;