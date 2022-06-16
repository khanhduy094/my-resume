import { Grid, Typography } from '@mui/material';
import { useRouteMatch } from 'react-router';
import CustomButton from "../../components/Button/Button";
import resumeData from "../../utils/resumeData";
import "./style.scss";
function ProjectDetail(props) {

    let routeMath= useRouteMatch();
  
    let dataShopee = resumeData.projects[0];
    let dataResume = resumeData.projects[1];
    // console.log(data);
    console.log(routeMath.params.slug);
    if(routeMath.params.slug === "shopee"){
        return (
            <div className="project">
            <div>
                <div className="project-image">
                    <img src={dataShopee.image} alt="abc" />
                </div>
            </div>
            <div className="project-demo" >
                <CustomButton text={"View Demo"} link={"https://react-shopee.vercel.app/"} />
            </div>
            <Grid container className="section pb-45 top_30">
                <Grid item className="section_title mb_30">
                    <span className="theme_span"></span>
                    <Typography variant="h6" className="section_title-text">Project Information</Typography>
                </Grid>
                <Grid item xs={12}>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Project Name</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>{dataShopee.projectInfo.name}</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Project Library</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>{dataShopee.projectInfo.library}</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Project Link</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}><a href={dataShopee.projectInfo.link} rel="noreferrer" target="_blank">https://react-shopee.vercel.app/</a></p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Member</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>{dataShopee.projectInfo.member}</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Position</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>{dataShopee.projectInfo.position}</p>
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
                        <strong className="col-3" style={{ textAlign: "right" }}>Cart</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>Add to cart, update cart and buy products</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Update User</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>Update user infomation, change user password</p>
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
                <CustomButton text={"View Demo"} link={"https://my-resume-sand-nu.vercel.app/"} />
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
                        <p className="col-9" style={{ wordBreak: "break-word" }}><a href="https://my-resume-sand-nu.vercel.app/">https://my-resume-sand-nu.vercel.app/</a></p>
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

