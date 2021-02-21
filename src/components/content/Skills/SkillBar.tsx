import { FC } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

type color = "primary" | "accent";

type PropsType = {
  name: string;
  completed: number;
  color: color;
};

export const SkillBar: FC<PropsType> = ({
  name,
  completed,
  color = "primary",
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} lg={6}>
      <Grid
        item
        container
        justify="space-between"
        className={classes.labelContainer}
      >
        <span className={classes.label}>{name}</span>
        <span className={classes.label}>{`${completed}%`}</span>
      </Grid>
      <LinearProgress variant="determinate" color="primary" value={completed} />
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  label: {
    fontSize: 14,
    fontFamily: "Open Sans",
  },
  labelContainer: {
    marginBottom: 3,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
  },
  button: {
    marginTop: 15,
    marginBottom: 15,
  },
  container: {
    padding: 10,
  },
}));
