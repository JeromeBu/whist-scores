import * as React from "react";
import ROUTES from "../../routes";
import Nav from "./Nav";

type State = {
  isMenuVisible: boolean;
};

type Props = {};

class NavContainer extends React.Component<Props, State> {
  wrapperRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.state = {
      isMenuVisible: false,
    };
  }

  handleClickOutside = (event: Event) => {
    if (
      this.wrapperRef &&
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target as Node)
    ) {
      this.hideMenu();
    }
  };

  toggleMenu = () => {
    this.setState(
      {
        isMenuVisible: !this.state.isMenuVisible,
      },
      () => {
        if (this.state.isMenuVisible) {
          document.addEventListener("mousedown", this.handleClickOutside);
        } else {
          document.removeEventListener("mousedown", this.handleClickOutside);
        }
      },
    );
  };

  hideMenu = () => {
    this.setState(
      {
        isMenuVisible: false,
      },
      () => {
        document.removeEventListener("mousedown", this.handleClickOutside);
      },
    );
  };

  render() {
    const infosForItems = [
      { label: "Home", route: ROUTES.HOME.path },
      { label: "Rules", route: ROUTES.RULES.path },
      { label: "Players", route: ROUTES.PLAYERS.path },
    ];

    return (
      <Nav
        wrapperRef={this.wrapperRef}
        items={infosForItems}
        isMenuVisible={this.state.isMenuVisible}
        toggleMenu={this.toggleMenu}
        hideMenu={this.hideMenu}
      />
    );
  }
}

export default NavContainer;
