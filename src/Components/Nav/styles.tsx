import styled from "src/styles/styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-size: ${({ theme }) => theme.fontSizes.normal};
  height: ${({ theme }) => theme.navBar.height};
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primaryLighter};

  @media screen and (max-width: ${({ theme }) => theme.responsiveBreakPoints.tablettes}) {
    position: relative;
    justify-content: space-between;
  }
`;

export const ItemsWrapper = styled("ul")<{ isMenuVisible?: boolean }>`
  height: ${({ theme }) => theme.navBar.height};
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: 0.25s ease-in-out;
  border: 1px solid ${({ theme }) => theme.colors.primaryLighter};

  @media screen and (max-width: ${({ theme }) => theme.responsiveBreakPoints.tablettes}) {
    position: absolute;
    right: 0;
    top: ${({ theme }) => theme.navBar.height};
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    max-width: ${({ theme }) => theme.navBar.menuMaxWidth};
    background-color: ${({ theme }) => theme.navBar.menuMaxWidth};
    border-bottom-left-radius: 10px;
    right: ${({ theme, isMenuVisible }) => (isMenuVisible ? 0 : `-${theme.navBar.menuMaxWidth}`)};
  }
`;

export const Spacer = styled.div`
  width: "100%";
  height: ${({ theme }) => theme.navBar.height};
  @media screen and (max-width: ${({ theme }) => theme.responsiveBreakPoints.tablettes}) {
    display: none;
  }
`;

export const Logo = styled.img`
  height: 30px;
  padding: 0 10px;
`;
