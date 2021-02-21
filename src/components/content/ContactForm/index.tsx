import { FC } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { TextField, Paper, Button } from "@material-ui/core";

export const ContactForm: FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <form
        method="post"
        action="https://formspree.io/tommacfarlaine@gmail.com"
      >
        <Grid container direction="column" spacing={0} justify="center">
          <h2 style={{ marginBottom: 0 }}>Feel free to contact me</h2>
          <TextField
            id="name"
            label="NAME"
            margin="normal"
            name="name"
            required
          />
          <TextField
            id="email"
            label="EMAIL"
            margin="normal"
            name="email"
            type="email"
            required
          />
          <TextField
            id="subject"
            label="SUBJECT"
            margin="normal"
            name="subject"
            required
          />
          <TextField
            id="message"
            label="MESSAGE"
            margin="normal"
            name="message"
            multiline
            rowsMax="4"
            required
          />
          <div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.button}
            >
              SEND
            </Button>
          </div>
        </Grid>
      </form>
    </Paper>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: 0,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 15,
    flexGrow: 1,
  },
  button: {
    color: "white",
    marginTop: 20,
    marginBottom: 20,
  },
}));
