import { FC } from "react";
import Grid from "@material-ui/core/Grid";
import { About } from "./About";
import { ContactForm } from "./ContactForm";
import { Element } from "react-scroll";
import { makeStyles, Theme } from "@material-ui/core";

export const Content: FC = () => {
  const classes = useStyles();

  return (
    <Grid container justify={"center"} className={classes.content}>
      <Grid
        xs={12}
        sm={12}
        md={8}
        item
        container
        direction={"column"}
        className={classes.padding0}
        lg={8}
      >
        <About />
        <Element name="contact" style={{ marginTop: 100 }}>
          <ContactForm />
        </Element>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginLeft: "20px",
    marginRight: "20px",
  },
  content: {
    zIndex: 2,
    position: "relative",
    paddingRight: 10,
    paddingLeft: 20,
  },
  padding0: {
    padding: "0 !important",
  },
}));
