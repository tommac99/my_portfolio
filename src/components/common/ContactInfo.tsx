import { FC } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core";

export const ContactInfo: FC = () => {
  const classes = useStyles();

  return (
    <Grid container item spacing={3} direction="column">
      <Grid container={true} item={true} justify="space-evenly" spacing={3}>
        <Grid className={classes.profileListItem} item xs={12} md={3}>
          Address:
        </Grid>
        <Grid className={classes.profileListItemValue} item xs={12} md={9}>
          Amsterdam, Netherlands
        </Grid>
      </Grid>
      <Grid container={true} item={true} justify="center" spacing={3}>
        <Grid className={classes.profileListItem} item xs={12} md={3}>
          Email:
        </Grid>
        <Grid className={classes.profileListItemValue} item xs={12} md={9}>
          <a
            className={classes.profileValueAItemValue}
            href="mailto:tommacfarlaine@gmail.com"
          >
            tommacfarlaine@gmail.com
          </a>
        </Grid>
      </Grid>
      <Grid container={true} item={true} justify="center" spacing={3}>
        <Grid className={classes.profileListItem} item xs={12} md={3}>
          Phone:
        </Grid>
        <Grid className={classes.profileListItemValue} item xs={12} md={9}>
          <a
            className={classes.profileValueAItemValue}
            href="tel:+33-766805138"
          >
            +33 766 80 51 38
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: 30,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 15,
    flexGrow: 1,
  },
  profileListItem: {
    color: "#333333",
    fontSize: 12,
    fontWeight: 700,
    textTransform: "uppercase",
    textAlign: "left",
    margin: 0,
    padding: 0,
  },
  profileListItemValue: {
    color: "#9da0a7",
    fontSize: 15,
    textAlign: "left",
    marginTop: -3,
    padding: 0,
  },
  profileValueAItemValue: {
    color: "inherit",
  },
}));
