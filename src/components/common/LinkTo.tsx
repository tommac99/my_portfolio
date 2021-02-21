import { FC, useState } from "react";
import { Link } from "react-scroll";
import { makeStyles, Theme } from "@material-ui/core/styles";
import classNames from "classnames";

type PropsType = {
  to: string;
  title: string;
  enableNavigationItemClass?: boolean;
  offset?: number;
};

export const LinkTo: FC<PropsType> = ({
  enableNavigationItemClass = false,
  offset = -120,
  to,
  title,
  ...PropsType
}) => {
  const [isLinkActive, setIsLinkActive] = useState(false);

  const classes = useStyles();

  const handleSetActive = () => {
    setIsLinkActive(true);
  };

  const handleSetInactive = () => {
    setIsLinkActive(false);
  };

  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      offset={offset}
      onSetActive={handleSetActive}
      onSetInactive={handleSetInactive}
      className={classNames({
        [classes.scrollChor]: true,
        [classes.navigationItem]: enableNavigationItemClass,
      })}
    >
      <span
        className={classNames({
          [classes.activeTitle]: isLinkActive,
        })}
      >
        {title}
      </span>
      <span
        className={classNames({
          [classes.spanClass]: true,
          [classes.activeSpanClass]: isLinkActive,
        })}
      ></span>
    </Link>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  scrollChor: {
    color: "rgba(255,255,255,0.7)",
    fontSize: "14",
    fontWeight: 700,
    fontFamily: '"Open Sans", sans-serif',
    lineHeight: 1,
    textDecoration: "none",
    marginRight: 30,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginBottom: 30,
      color: "white",
    },
  },
  navigationItem: {
    color: "black",
    [theme.breakpoints.down("md")]: {
      color: "white",
    },
  },
  spanClass: {
    height: 3,
    marginTop: 10,
    width: "100%",
    backgroundColor: "transparent",
  },
  activeSpanClass: {
    backgroundColor: theme.palette.primary.light,
    [theme.breakpoints.down("md")]: {
      backgroundColor: "transparent",
    },
  },
  activeTitle: {
    [theme.breakpoints.down("md")]: {
      fontStyle: "italic",
      fontSize: "16",
      fontWeight: "bold",
    },
  },
}));
