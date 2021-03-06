import * as styledComponents from "styled-components";

import IThemeInterface from "./themes";

const {
  default: styled,
  createGlobalStyle,
  css,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
