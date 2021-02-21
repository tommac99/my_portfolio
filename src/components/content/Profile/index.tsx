import { FC } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { ContactInfo, SocialIcons, Bubble } from "../../common";
import { makeStyles, Theme } from "@material-ui/core";

export const Profile: FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <Grid item container direction="column" spacing={0}>
        <Grid item className={classes.profile} container spacing={0}>
          <Grid item lg={5} xs={12}>
            <img
              src="profile.jpeg"
              alt="Thomas Mac Farlaine"
              className={classes.profilePhoto}
            />
          </Grid>
          <Grid item xs={1} />
          <Grid item lg={6} xs={12} container spacing={0} direction="column">
            <Grid item className={classes.profileInfo}>
              <div>
                <Bubble content="Hello" />
              </div>
              <h1 className={classes.profileTitle}>
                <span className={classes.profileTitleStart}>I'm</span> Thomas
                Mac Farlaine
              </h1>
              <h2 className={classes.profilePosition}>Full Stack Developer</h2>
            </Grid>
            <ContactInfo />
          </Grid>
        </Grid>
        <Grid className={classes.profileSocial}>
          <SocialIcons />
        </Grid>
      </Grid>
    </Paper>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    [theme.breakpoints.up("sm")]: {
      marginTop: 20,
    },
    [theme.breakpoints.down("md")]: {
      marginTop: 150,
    },
  },
  profile: {
    padding: "57px 50px 15px 50px",
    [theme.breakpoints.down("lg")]: {
      padding: "50px 40px 15px 40px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "30px 20px 15px 20px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "30px 20px 15px 20px",
    },
    marginBottom: 10,
  },
  profilePhoto: {
    maxWidth: "100%",
  },
  profileInfo: {
    color: "#3d4451",
    paddingBottom: 25,
    marginBottom: 25,
    borderBottom: "1px solid #dedede",
    [theme.breakpoints.down("md")]: {
      borderBottom: "0px",
    },
  },
  greeting: {
    color: "#fff",
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1.1,
    display: "inline-block",
    padding: "7px 12px",
    textTransform: "uppercase",
    position: "relative",
    backgroundColor: theme.palette.primary[500],

    "&:before": {
      content: '""',
      width: 0,
      height: 0,
      top: "100%",
      left: 5,
      display: "block",
      position: "absolute",
      borderStyle: "solid",
      borderWidth: "0 0 8px 8px",
      borderColor: "transparent",
      borderLeftColor: theme.palette.primary[500],
    },
  },
  profileTitle: {
    fontSize: 32,
    lineHeight: 1.1,
    fontWeight: 700,
    marginBottom: 5,
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
  },
  profileTitleStart: {
    fontWeight: 200,
  },
  profilePosition: {
    fontSize: 18,
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
    fontWeight: 400,
    lineHeight: 1.1,
    marginBottom: 0,
  },
  profileSocial: {
    backgroundColor: theme.palette.primary[500],
  },
}));
