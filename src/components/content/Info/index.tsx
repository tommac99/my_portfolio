import { FC } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, Theme } from "@material-ui/core";

const content =
  "Hello! I am Thomas Mac Farlaine. Full Stack Developer specializing in web, desktop, mobile design and development, I maintain a healthy balance between functionality and visual impact in all my work. I believe every piece of design can be a work of art. ";
const url = `${process.env.PUBLIC_URL}/Thomas_MacFarlaine.pdf`;

export const Info: FC = () => {
  const classes = useStyles();

  const openTab = () => {
    window.open(url, "_blank");
  };

  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        className={classes.button}
        onClick={openTab}
        color="secondary"
      >
        Download Resume
      </Button>
      <p className={classes.info}>{content}</p>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    textAlign: "center",
  },
  info: {
    color: "#878787",
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 1.8,
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    margin: "-10px 0 0 0",
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    textTransform: "uppercase",
  },
}));
