import { Grid, Typography } from '@mui/material';
import { useRouteMatch } from 'react-router';
import CustomButton from "../../components/Button/Button";
import resumeData from "../../utils/resumeData";
import "./style.scss";
function ProjectDetail(props) {

    let routeMath= useRouteMatch();
  
    let dataCFD = resumeData.projects[0];
    let dataResume = resumeData.projects[1];
    // console.log(data);
    console.log(routeMath.params.slug);
    if(routeMath.params.slug === "cfd"){
        return (
            <div className="project">
            <div>
                <div className="project-image">
                    <img src={dataCFD.image} alt="abc" />
                </div>
            </div>
            <div className="project-demo" >
                <CustomButton text={"View Demo"} link={"https://cfd-training.vercel.app"} />
            </div>
            <Grid container className="section pb-45 top_30">
                <Grid item className="section_title mb_30">
                    <span className="theme_span"></span>
                    <Typography variant="h6" className="section_title-text">Project Information</Typography>
                </Grid>
                <Grid item xs={12}>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Project Name</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>{dataCFD.projectInfo.name}</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Project Library</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>{dataCFD.projectInfo.library}</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Project Link</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}><a href={dataCFD.projectInfo.link} rel="noreferrer" target="_blank">https://cfd-training.vercel.app/</a></p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Member</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>{dataCFD.projectInfo.member}</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Position</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>{dataCFD.projectInfo.position}</p>
                    </div>
                </Grid>

            </Grid>
            <Grid container className="section pb-45 top_30">
                <Grid item className="section_title mb_30">
                    <span className="theme_span"></span>
                    <Typography variant="h6" className="section_title-text">Project Functions</Typography>
                </Grid>
                <Grid item xs={12}>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Sign in, Sign up</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>Sign in, sign up a new account</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Regiser Course</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>Register the online and offline course</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Responsive</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>Responsive is suitable for all screen types</p>
                    </div>

                </Grid>


            </Grid>
          
        </div>
        )
    }

    return (
       
        <div className="project">
            <div>
                <div className="project-image">
                    <img src={dataResume.image} alt="abc" />
                </div>
            </div>
            <div className="project-demo" >
                <CustomButton text={"View Demo"} link={"https://resume-online-three.vercel.app"} />
            </div>
            <Grid container className="section pb-45 top_30">
                <Grid item className="section_title mb_30">
                    <span className="theme_span"></span>
                    <Typography variant="h6" className="section_title-text">Project Information</Typography>
                </Grid>
                <Grid item xs={12}>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Project Name</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>{dataResume.projectInfo.name}</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Project Library</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>React</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Project Link</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}><a href="https://resume-online-three.vercel.app/">https://resume-online-three.vercel.app/</a></p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Member</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>1</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Position</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>Front End Developer</p>
                    </div>


                </Grid>


            </Grid>
            <Grid container className="section pb-45 top_30">
                <Grid item className="section_title mb_30">
                    <span className="theme_span"></span>
                    <Typography variant="h6" className="section_title-text">Project Functions</Typography>
                </Grid>
                <Grid item xs={12}>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Contact, Comment</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>Validate form when click submit button</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Responsive</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>Responsive is suitable for all screen types</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Change themes</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>Using Custom directive and CSS variable to change themes</p>
                    </div>

                </Grid>


            </Grid>
            
        </div>
    );
}

export default ProjectDetail;

