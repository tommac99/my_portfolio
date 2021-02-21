import { FC, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import { LinkTo } from "../common/LinkTo";

export const Header: FC = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState<boolean>(false);

  const classes = useStyles();

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const hideDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    <div className={classes.header}>
      <div className={classes.headerBackground} />
      <AppBar position="fixed" className={classes.headerAppBar}>
        <Toolbar>
          <IconButton
            color="primary"
            className={classes.hamburger}
            onClick={showDrawer}
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.flex}></div>
          <Grid
            className={classes.horizontalNavigation}
            container
            spacing={0}
            direction="row"
          >
            <LinkTo
              to="profile"
              title="About"
              enableNavigationItemClass={true}
            />
            <LinkTo
              to="experience"
              title="Experience"
              enableNavigationItemClass={true}
            />
            <LinkTo
              to="skills"
              title="Skills"
              enableNavigationItemClass={true}
            />
            <LinkTo
              to="education"
              title="Education"
              enableNavigationItemClass={true}
            />
            <LinkTo to="blog" title="Blog" enableNavigationItemClass={true} />
            <LinkTo
              to="contact"
              title="Contact"
              offset={-400}
              enableNavigationItemClass={true}
            />
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerVisible} onClose={hideDrawer}>
        <Grid
          className={classes.verticalNavigation}
          container
          alignItems="center"
          justify="center"
          spacing={0}
          direction="column"
        >
          <LinkTo to="profile" title="About" enableNavigationItemClass={true} />
          <LinkTo
            to="experience"
            title="Experience"
            enableNavigationItemClass={true}
          />
          <LinkTo to="skills" title="Skills" enableNavigationItemClass={true} />
          <LinkTo
            to="education"
            title="Education"
            enableNavigationItemClass={true}
          />
          <LinkTo to="blog" title="Blog" enableNavigationItemClass={true} />
          <LinkTo
            to="contact"
            title="Contact"
            offset={-400}
            enableNavigationItemClass={true}
          />
        </Grid>
      </Drawer>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      minHeight: 0,
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "30px",
    },
  },
  headerAppBar: {
    backgroundColor: "white",
    boxShadow: "none",
  },
  headerBackground: {
    height: "515px",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundImage: "url(cover.png)",
    backgroundSize: "cover",
    backgroundPosition: "50% 0",
    backgroundRepeat: "no-repeat",
  },
  flex: {
    flex: 1,
  },
  horizontalNavigation: {
    flex: 1,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  verticalNavigation: {
    flex: 1,
    minWidth: 300,
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  hamburger: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
