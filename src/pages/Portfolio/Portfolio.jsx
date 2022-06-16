import { Grid, Typography } from "@mui/material";
import React from "react";
import resumeData from "../../utils/resumeData";
import ProjectItem from "./component/ProjectItem";
import "./style.scss";

function Portfolio(props) {
  // const match = useRouteMatch();

  return (
    <Grid container className="section pb-45">
      <Grid item className="section_title mb_30">
        <span className="theme_span"></span>
        <Typography variant="h6" className="section_title-text">
          My Projects
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          {resumeData.projects.map((item, index) => {
            return <ProjectItem key={index} {...item} />;
          })}
          {/* <ProjectItem /> */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Portfolio;
