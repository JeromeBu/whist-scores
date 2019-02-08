import * as React from "react";
import { Bar, BarWrapper, PositionsEnum, Wrapper } from "./styles";

const MenuButton: React.FC<{ isMenuVisible?: boolean; toggleMenu: () => void }> = ({
  isMenuVisible = false,
  toggleMenu,
}) => (
  <Wrapper onClick={toggleMenu}>
    <BarWrapper>
      <Bar position={PositionsEnum.top} isMenuVisible={isMenuVisible} />
      <Bar position={PositionsEnum.middle} isMenuVisible={isMenuVisible} />
      <Bar position={PositionsEnum.bottom} isMenuVisible={isMenuVisible} />
    </BarWrapper>
  </Wrapper>
);

export default MenuButton;
