import { FC, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { SkillBar } from "./SkillBar";
import { SectionTitle } from "../../common";
import { GetSkills } from "../../../services";

export const Skills: FC = () => {
  const [skills, setSkills] = useState<any[]>([]);
  const classes = useStyles();

  useEffect(() => {
    async function getSkills() {
      const experiences = await GetSkills();
      setSkills(experiences);
    }

    getSkills();
  }, []);

  const renderSkill = (skill, index) => {
    return (
      <SkillBar
        key={index}
        name={skill.name}
        color="primary"
        completed={skill.completed}
      />
    );
  };

  return (
    <Grid id="skills" container direction="column" justify="center" spacing={0}>
      <SectionTitle title="Professional Skills" />
      <Paper className={classes.root}>
        <Grid item container direction="row" justify="space-between" xs={12}>
          {skills && skills.map(renderSkill)}
        </Grid>
      </Paper>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    padding: 20,
    height: "100%",
  },
  button: {
    marginTop: 15,
    marginBottom: 15,
  },
  container: {
    padding: 10,
  },
}));
