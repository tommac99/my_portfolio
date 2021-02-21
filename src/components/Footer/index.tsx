import { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { SocialIcons } from "../common";

export const Footer: FC = () => {
  const classes = useStyles();

  return (
    <Grid item className={classes.container}>
      <SocialIcons />
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: 50,
  },
}));
