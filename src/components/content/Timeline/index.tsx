import { FC, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Event } from "./Event";
import { EventContainer } from "../../common/EventContainer";
import { SectionTitle } from "../../common/SectionTitle";
import { LEFT, RIGHT } from "../../../utils/Constants";
import { TimelineBar } from "../../common/TimelineBar";
import { GetExperience } from "../../../services/index";

type ExperienceType = {
  year: string;
  company: string;
  title: string;
  description: string;
};

export const Experiences: FC = () => {
  const classes = useStyles();
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);

  useEffect(() => {
    async function getExperience() {
      const experiences = await GetExperience();
      setExperiences(experiences);
    }

    getExperience();
  }, []);

  const renderExperience = () => {
    if (!experiences || experiences.length <= 0) return;
    return experiences.map((experience, index: number) => {
      return (
        <EventContainer key={index} alignment={index % 2 === 0 ? LEFT : RIGHT}>
          <Event
            title={experience.title}
            company={experience.company}
            description={experience.description}
            year={experience.year}
          />
        </EventContainer>
      );
    });
  };

  return (
    <Grid
      container
      item
      xs={12}
      spacing={0}
      className={classes.container}
      direction="column"
      justify="center"
    >
      <SectionTitle title="Work Experience" />
      <div style={{ position: "relative" }}>
        <div className={classes.clear}>
          <TimelineBar barClass={classes.barClass} />
          {renderExperience()}
        </div>
      </div>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    alignItems: "stretch",
    justifyItems: "center",
    [theme.breakpoints.down("md")]: {
      alignItems: "stretch",
      justifyItems: "space-evenly",
    },
  },
  barClass: {
    height: 585,
    top: 80,
    [theme.breakpoints.down("md")]: {
      height: 1300,
      top: 20,
      zIndex: -1,
    },
  },
  relative: {
    position: "relative",
  },
  clear: {
    position: "relative",
    "*zoom": 1,

    "&:before": {
      content: '""',
      display: "table",
    },

    "&:after": {
      content: '""',
      display: "table",
      clear: "both",
    },
  },
}));
