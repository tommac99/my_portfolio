import { FC } from "react";
import Grid from "@material-ui/core/Grid";
import * as Scroll from "react-scroll";
import { Profile } from "./Profile";
import { Info } from "./Info";
import { Skills } from "./Skills";
import { Experiences } from "./Timeline";
import { Blog } from "./Blog";
import { Education } from "./Education";
import { makeStyles, Theme } from "@material-ui/core";

const { Element } = Scroll;

export const About: FC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.about}>
      <Grid item xs={12}>
        <Element name="profile">
          <Profile />
        </Element>
      </Grid>
      <Grid item xs={12}>
        <Element name="info">
          <Info />
        </Element>
      </Grid>
      <Grid item xs={12}>
        <Element name="experience">
          <Experiences />
        </Element>
      </Grid>
      <Grid item xs={12}>
        <Element name="skills">
          <Skills />
        </Element>
      </Grid>
      <Grid item xs={12}>
        <Element name="education">
          <Education />
        </Element>
      </Grid>
      <Grid item xs={12}>
        <Element name="blog">
          <Blog />
        </Element>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  about: {
    marginTop: 50,
    [theme.breakpoints.up("sm")]: {
      marginTop: 70,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
