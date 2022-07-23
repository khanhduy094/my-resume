import { Grid, Typography } from "@mui/material";
import { useRouteMatch } from "react-router";
import CustomButton from "../../components/Button/Button";
import { projectsData } from "../../utils/resumeData";
import "./style.scss";

function ProjectDetail(props) {
  let routeMath = useRouteMatch();

  console.log(routeMath.params.slug);
  const filterProject = projectsData.find(
    (project) => project.slug === routeMath.params.slug
  );
  console.log(filterProject);
  return (
    <div className="project">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <div className="project-image ">
          <img src={filterProject.image1} alt="abc" />
        </div>
        </Grid>
        <Grid item xs={12} sm={6}>
        <div className="project-image ">
          <img src={filterProject.image2} alt="abc" />
        </div>
        </Grid>
       
      </Grid>
      <div className="project-demo">
        <CustomButton
          text={"View Demo"}
          link={filterProject.link}
        />
      </div>
      <Grid container className="section pb-45 top_30">
        <Grid item className="section_title mb_30">
          <span className="theme_span"></span>
          <Typography variant="h6" className="section_title-text">
            Project Information
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {filterProject.projectInfo.map((data, index) => (
            <div className="row mt-2" key={index}>
              <strong className="col-3" style={{ textAlign: "right" }}>
                {data.title}
              </strong>
              <p className="col-9" style={{ wordBreak: "break-word" }}>
                {data.content}
              </p>
            </div>
          ))}
        </Grid>
      </Grid>
      <Grid container className="section pb-45 top_30">
        <Grid item className="section_title mb_30">
          <span className="theme_span"></span>
          <Typography variant="h6" className="section_title-text">
            Project Functions
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {filterProject.projectFunc.map((data, index) => (
            <div className="row mt-2" key={index}>
              <strong className="col-3" style={{ textAlign: "right" }}>
                {data.title}
              </strong>
              <p className="col-9" style={{ wordBreak: "break-word" }}>
                {data.content}
              </p>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}


export default ProjectDetail;
