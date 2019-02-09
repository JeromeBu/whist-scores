import { Button, Grid, Paper, TextField } from "@material-ui/core";
import * as React from "react";

type Props = {
  inputValue: string;
  onInputChange: (e: React.ChangeEvent) => void;
  onInputKeyPress?: (e: React.KeyboardEvent) => void;
  onButtonClick: () => void;
};

const AddTodo: React.FC<Props> = ({
  inputValue,
  onInputChange,
  onInputKeyPress = () => {
    /* do nothing */
  },
  onButtonClick,
  children,
}) => (
  <Paper elevation={0} style={{ padding: 16, margin: 16 }}>
    <Grid container>
      <Grid xs={10} md={11} item style={{ padding: 16 }}>
        <TextField
          placeholder="Add Todo here"
          value={inputValue}
          onChange={onInputChange}
          onKeyPress={onInputKeyPress}
          fullWidth
        />
      </Grid>
      <Grid xs={2} md={1} item>
        <Button fullWidth variant="outlined" color="secondary" onClick={onButtonClick}>
          Add
        </Button>
      </Grid>
    </Grid>
    {children}
  </Paper>
);

export default AddTodo;
