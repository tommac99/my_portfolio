import { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

type PropsType = {
  content: string;
};

export const Bubble: FC<PropsType> = ({ content }) => {
  const classes = useStyles();

  return <span className={classes.container}>{content}</span>;
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    color: "#fff",
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1.1,
    display: "inline-block",
    padding: "7px 12px",
    textTransform: "uppercase",
    position: "relative",
    backgroundColor: theme.palette.primary.light,
    borderLeftColor: theme.palette.primary.light,

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
      borderLeftColor: theme.palette.primary.light,
    },
  },
}));
