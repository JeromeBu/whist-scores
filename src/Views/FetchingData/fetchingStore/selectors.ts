import { RootState } from "Types";

export const selectFetched = (state: RootState) => {
  return state.fetched;
};
