export default interface IThemeInterface {
  colors: {
    primary: string;
    primaryLighter: string;
    secondary: string;
    secondaryDarker: string;
  };
  fontSizes: {
    smallest: string;
    small: string;
    normal: string;
    big: string;
    bigger: string;
    biggest: string;
  };
  responsiveBreakPoints: {
    tablettes: string;
    phones: string;
  };

  // NavBar related :
  navBar: {
    height: string;
    menuMaxWidth: string;
  };
}

export const defaultTheme: IThemeInterface = {
  colors: {
    primary: "#0076D3",
    primaryLighter: "#2087d8",
    secondary: "#F2F2F3",
    secondaryDarker: "#ececec",
  },

  fontSizes: {
    big: "2.2rem",
    bigger: "3rem",
    biggest: "5rem",
    normal: "1.6rem",
    small: "1rem",
    smallest: "0.8rem",
  },

  responsiveBreakPoints: {
    phones: "480px",
    tablettes: "992px",
  },

  // NavBar related :
  navBar: {
    height: "6rem",
    menuMaxWidth: "30rem",
  },
};
