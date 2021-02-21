import { FC } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { SocialIcon } from "react-social-icons";

export const SocialIcons: FC = () => {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      justify="center"
      spacing={0}
      className={classes.container}
    >
      <SocialIcon
        className={classes.button}
        url="https://www.linkedin.com/in/thomas-macfarlaine"
        fontSize="24px"
        bgColor="#0966C2"
        fgColor="#fff"
      />
      <SocialIcon
        className={classes.button}
        url="https://github.com/tommac99"
        fontSize="24px"
        bgColor="#000"
        fgColor="#fff"
      />
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    margin: 10,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: "50%",
    boxShadow: "0 0 20px rgba(0,0,0,0.2)",
  },
  container: {
    padding: 10,
  },
}));
