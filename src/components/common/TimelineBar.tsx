import { FC } from "react";
import classNames from "classnames";
import { makeStyles, Theme } from "@material-ui/core";

type PropsType = {
  barClass: string;
};

export const TimelineBar: FC<PropsType> = ({ barClass }) => {
  const classes = useStyles();

  return (
    <div
      className={classNames({
        [classes.bar]: true,
        [barClass]: true,
      })}
    />
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  bar: {
    content: '""',
    width: 4,
    opacity: 0.2,
    marginLeft: -2,
    position: "absolute",
    left: "50%",
    backgroundColor: theme.palette.primary[500],
  },
}));
