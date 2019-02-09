// NavBarItem components
import styled from "src/styles/styled-components";

export const Wrapper = styled("li")<{ disabled?: boolean }>`
  padding: 0 1em;

  a {
    line-height: ${({ theme }) => theme.navBar.height};
    cursor: inherit;
  }

  color: ${({ theme }) => theme.colors.secondary};
  opacity: ${props => (props.disabled ? "0.4" : "1")};

  ${props =>
    !props.disabled &&
    `&:hover {
      opacity: 0.9;
      cursor: pointer;
    }`};

  @media screen and (max-width: ${({ theme }) => theme.responsiveBreakPoints.tablettes}) {
    display: block;
    height: ${({ theme }) => theme.navBar.height};
    width: 100%;
    line-height: ${({ theme }) => theme.navBar.height};
    border-top: 0.5px solid ${({ theme }) => theme.colors.secondary};
    a {
      display: block;
      width: 100%;
      padding-right: 2em;
    }
    /* border: 1px solid black; */
  }
`;
