export type Thing = {
  isChecked: boolean;
  text: string;
};

export type FetchedState = {
  readonly things: Thing[];
  readonly isLoading: boolean;
  readonly error: string;
};
