import { FC } from "react";
import Grid from "@material-ui/core/Grid";
import { ContactForm } from "./ContactForm";
import { SectionTitle } from "../common/SectionTitle";
import { makeStyles, Theme } from "@material-ui/core";

export const Contact: FC = () => {
  const classes = useStyles();

  return (
    <Grid
      alignItems="center"
      direction="column"
      container
      className={classes.container}
      spacing={0}
    >
      <SectionTitle title="Contact Me" />
      <Grid
        container
        direction="row"
        alignItems="stretch"
        justify="space-between"
        spacing={0}
      >
        <Grid item lg={6} xs={12} className={classes.itemContainer}>
          <ContactForm />
        </Grid>
        <Grid item lg={6} xs={12} className={classes.itemContainer}></Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: 0,
    padding: 0,
  },
  itemContainer: {
    padding: 10,
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
}));
