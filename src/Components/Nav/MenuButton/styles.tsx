/* eslint-disable import/prefer-default-export */
import styled from "../../../styles/styled-components";
// MenuButton components

export const Wrapper = styled.div`
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.secondary};
  max-width: 150px;
  text-align: right;
  padding: 0 10px;
  display: flex;
  align-items: center;
  line-height: ${({ theme }) => theme.navBar.height};
  height: ${({ theme }) => theme.navBar.height};
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.responsiveBreakPoints.tablettes}) {
    display: none;
  }
`;

const pVertic = 0.6;
const pHoriz = 0.8;
const hBar = 0.2;

export const BarWrapper = styled.div`
  width: calc(${pHoriz} * ${({ theme }) => theme.navBar.height});
  height: calc(${pVertic} * ${({ theme }) => theme.navBar.height});
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  text-align: right;
`;

export enum PositionsEnum {
  top = "top",
  middle = "middle",
  bottom = "bottom",
}

export const Bar = styled("span")<{
  isMenuVisible?: boolean;
  position: PositionsEnum;
}>`
  display: block;
  position: absolute;
  height: calc(${hBar * pVertic} * ${({ theme }) => theme.navBar.height});
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: calc(${pVertic / 2 - (pVertic * hBar) / 2} * ${({ theme }) =>
  theme.navBar.height});
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
  ${({ position, isMenuVisible }) => !isMenuVisible && position === "top" && "top: 0;"}
  ${({ position, isMenuVisible, theme }) =>
    !isMenuVisible &&
    position === "middle" &&
    `top: calc(${pVertic / 2 - (pVertic * hBar) / 2} * ${theme.navBar.height});`}
  ${({ position, isMenuVisible }) => !isMenuVisible && position === "bottom" && "bottom: 0"}
  ${({ position, isMenuVisible, theme }) =>
    isMenuVisible &&
    position === "top" &&
    `top: calc(${pVertic / 2 - (pVertic * hBar) / 2} * ${theme.navBar.height});;
    transform: rotate(135deg);`}
  ${({ position, isMenuVisible, theme }) =>
    isMenuVisible &&
    position === "middle" &&
    `top: calc(${pVertic / 2 - (pVertic * hBar) / 2} * ${theme.navBar.height});;
    opacity: 0;
    left: -50px;`}
  ${({ position, isMenuVisible, theme }) =>
    isMenuVisible &&
    position === "bottom" &&
    `bottom: calc(${pVertic / 2 - (pVertic * hBar) / 2} * ${theme.navBar.height});
    transform: rotate(-135deg);`}
`;
