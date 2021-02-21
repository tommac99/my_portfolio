import { FC } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles, Theme } from "@material-ui/core";

type PropsType = {
  md: any;
  xs: any;
  title: any;
  image: any;
  day: any;
  month: any;
  url: any;
};

export const BlogItem: FC<PropsType> = ({
  xs,
  md,
  title,
  image,
  day,
  month,
  url,
}) => {
  const classes = useStyles();

  const openTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Grid
      justify="center"
      direction="column"
      item
      container
      spacing={0}
      md={md}
      xs={xs}
      style={{ margin: 0, padding: 0 }}
    >
      <Button onClick={openTab}>
        <Paper className={classes.blogItemBox}>
          <div className={classes.imageContainer}>
            <img src={image} className={classes.blogItemImage} alt={title} />
          </div>
          <div className={classes.blogItemContent}>
            <time className={classes.blogItemTimeContainer}>
              <div className={classes.blogItemTimeDay}>{day}</div>
              <div className={classes.blogItemTimeMonth}>{month}</div>
            </time>
            <h3 className={classes.blogItemTitle}>{title}</h3>
          </div>
        </Paper>
      </Button>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  blogItemImage: {
    transition: "opacity 1s, transform 1s",
    width: "100%",
    height: "auto",
    opacity: 0.8,
    display: "block",
    position: "relative",
    backfaceVisibility: "hidden",
  },
  blogItemBox: {
    position: "relative",
    backgroundColor: "#fff",
    transition: "box-shadow 0.15s linear 0s",
    backfaceVisibility: "hidden",
    margin: 10,
    marginBottom: 50, // TODO
    [theme.breakpoints.down("xl")]: {
      marginBottom: 30,
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: 250,
    },
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      marginBottom: 30,
    },
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      marginBottom: 30,
    },
    "&:hover": {
      boxShadow:
        "0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23)",
      cursor: "pointer",
    },
  },
  imageContainer: {
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#2c3340",
    "&:hover img": {
      opacity: 1,
      transform: "scale3d(1.1, 1.1, 1)",
    },
  },
  blogItemContent: {
    padding: "25px 25px 35px 25px",
  },
  blogItemTimeContainer: {
    color: "#fff",
    lineHeight: 1,
    fontWeight: 700,
    textAlign: "center",
    position: "absolute",
    top: 20,
    right: 20,
    padding: 10,
    display: "block",
    backgroundColor: theme.palette.primary[500],
  },
  blogItemTimeDay: {
    fontSize: 20,
    marginBottom: 2,
  },
  blogItemTimeMonth: {
    fontSize: 13,
  },
  blogItemTitle: {
    color: "#373b42",
    fontSize: 14,
    lineHeight: 1.3,
    fontWeight: 600,
    textTransform: "uppercase",
    textAlign: "center",
    wordWrap: "normal",
  },
}));
