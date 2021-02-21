import { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Bubble } from "../../common";

type PropsType = {
  year: string;
  name: string;
  university: string;
};

export const Course: FC<PropsType> = ({ year, name, university }) => {
  const classes = useStyles();

  return (
    <Grid container style={{ paddingLeft: 20 }} direction="column">
      <div>
        <Bubble content={year} />
      </div>
      <h3 className={classes.header3}>{name}</h3>
      <p className={classes.header4}>{university}</p>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  date: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 1,
    textAlign: "left",
    marginBottom: 0,
    color: theme.palette.primary[500],
    marginTop: 10,
  },
  header3: {
    color: "#414141",
    fontSize: 22,
    fontWeight: 400,
    lineHeight: 1.1,
    textAlign: "left",
    marginBottom: 0,
    marginToo: 0,
  },
  header4: {
    color: "#878787",
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 1.1,
    textTransform: "uppercase",
    textAlign: "left",
    marginBottom: 30,
  },
}));
