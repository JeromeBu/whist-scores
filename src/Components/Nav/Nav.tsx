import * as React from "react";
import MenuButton from "./MenuButton";
import NavBarItem from "./NavBarItem";
import { ItemsWrapper, Logo, Spacer, Wrapper } from "./styles";

type ItemDataType = {
  label: string;
  route: string;
  disabled?: boolean;
  icon?: string;
};

type NavProps = {
  isMenuVisible?: boolean;
  items: ItemDataType[];
  wrapperRef: React.RefObject<HTMLDivElement>;
  hideMenu: () => void;
  toggleMenu: () => void;
};

const Nav: React.FC<NavProps> = ({ items, isMenuVisible, toggleMenu, hideMenu, wrapperRef }) => {
  return (
    <React.Fragment>
      <Wrapper ref={wrapperRef}>
        <Logo src="./src/logo.svg" alt="logo" />
        <MenuButton isMenuVisible={isMenuVisible} toggleMenu={toggleMenu} />
        <ItemsWrapper isMenuVisible={isMenuVisible}>
          {items.map(item => {
            return (
              <NavBarItem
                key={item.label}
                route={item.route}
                // icon={item.icon}
                disabled={item.disabled}
                hideMenu={hideMenu}
              >
                {item.label}
              </NavBarItem>
            );
          })}
        </ItemsWrapper>
      </Wrapper>
      <Spacer className="spacer" />
    </React.Fragment>
  );
};

export default Nav;
