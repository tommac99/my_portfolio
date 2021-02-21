import { FC } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core";

type PropsType = {
  year: string;
  company: string;
  title: string;
  description: string;
};

export const Event: FC<PropsType> = ({ year, title, company, description }) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={0}>
      <div className={classes.date}>{year}</div>
      <h3 className={classes.header3}>{company}</h3>
      <h4 className={classes.header4}>{title}</h4>
      <p className={classes.description}>{description}</p>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  date: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 1,
    textAlign: "center",
    marginBottom: 0,
    color: theme.palette.primary[500],
    marginTop: 10,
  },
  header3: {
    color: "#414141",
    fontSize: 22,
    fontWeight: 400,
    lineHeight: 1.1,
    textAlign: "center",
    marginBottom: 0,
    marginToo: 0,
  },
  header4: {
    color: "#878787",
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 1.1,
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 30,
  },
  description: {
    wordWrap: "break-word",
    width: "100%",
  },
}));
