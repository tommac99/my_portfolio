import { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core";

type PropsType = {
  title: string;
};

export const SectionTitle: FC<PropsType> = ({ title }) => {
  const classes = useStyles();

  return <span className={classes.sectionTitle}>{title}</span>;
};

const useStyles = makeStyles((theme: Theme) => ({
  sectionTitle: {
    color: "#3d4451",
    fontSize: 34,
    lineHeight: 1.2,
    fontWeight: 600,
    textAlign: "center",
    marginBottom: 20,
    marginTop: 30,
  },
}));
