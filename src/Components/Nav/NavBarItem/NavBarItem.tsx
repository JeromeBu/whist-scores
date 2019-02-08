import * as React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./styles";

type NavBarItemProps = {
  disabled?: boolean;
  icon?: string;
  hideMenu: () => void;
  route: string;
};

const NavBarItem: React.FC<NavBarItemProps> = ({ disabled, route, icon, hideMenu, children }) => {
  return (
    <Wrapper disabled={disabled} onClick={hideMenu}>
      <Link to={route}>
        {icon && <i className={icon} />} {children}
      </Link>
    </Wrapper>
  );
};

export default NavBarItem;
