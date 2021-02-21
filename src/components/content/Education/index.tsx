import { FC, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { EventContainer } from "../../common/EventContainer";
import { Course } from "./Course";
import { SectionTitle } from "../../common/SectionTitle";
import { LEFT, RIGHT } from "../../../utils/Constants";
import { TimelineBar } from "../../common/TimelineBar";
import { GetEducation } from "../../../services";
import { makeStyles, Theme } from "@material-ui/core";

type EducationType = {
  year: string;
  college: string;
  description: string;
};

export const Education: FC = () => {
  const [educationSkills, setEducationSkills] = useState<EducationType[]>([]);

  const classes = useStyles();

  useEffect(() => {
    async function getEducation() {
      const educations = await GetEducation();
      setEducationSkills(educations);
    }

    getEducation();
  }, []);

  const renderEducation = () => {
    if (!educationSkills || educationSkills.length <= 0) return;
    return educationSkills.map((educationSkill, index) => {
      return (
        <EventContainer key={index} alignment={index % 2 === 0 ? LEFT : RIGHT}>
          <Course
            name={educationSkill.description}
            university={educationSkill.college}
            year={educationSkill.year}
          />
        </EventContainer>
      );
    });
  };

  return (
    <Grid
      container
      className={classes.container}
      spacing={0}
      direction="column"
    >
      <SectionTitle title="Education" />
      <div style={{ position: "relative" }}>
        <div className={classes.clear}>
          <TimelineBar barClass={classes.barClass} />
          {renderEducation()}
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
      justifyItems: "space-evenly",
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
  barClass: {
    height: 220,
    top: 80,
    [theme.breakpoints.down("md")]: {
      height: 500,
      top: 20,
      zIndex: -1,
    },
  },
}));
