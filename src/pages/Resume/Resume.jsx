
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';
import { Grid, Typography } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import bsSkill from "../../assets/img/bs4-skill.png";
import cssSkill from "../../assets/img/css-skill.png";
import htmlSkill from "../../assets/img/html-skill.png";
import jsSkill from "../../assets/img/js-skill.png";
import reactSkill from "../../assets/img/react-skill.png";
import sassSkill from "../../assets/img/sass-skill.png";
import CusTomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline';
import resumeData from "../../utils/resumeData";
import "./style.scss";
function Resume(props) {

    const settingsss = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 520,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
              }
            }
          ]
    };
    

    return (
        <>

            {/* Education and Experiences */}
            <Grid container className="section pd-45">
                <Grid item className="section_title mb_30">
                    <span className="theme_span"></span>
                    <Typography variant="h6" className="section_title-text">Resume</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container className="resume_timeline">
                        {/* Experiences */}
                        <Grid item sm={12} md={6}>
                            <CusTomTimeline title={"Work Experience"} icon={<WorkIcon />}>
                                {resumeData.experience.map((ex, index) => (
                                    <TimelineItem key={index}>
                                        <CustomTimelineSeparator />
                                        <TimelineContent className="timeline_content">
                                            <Typography className="timeline_title">{ex.title}</Typography>
                                            <Typography className="timeline_date" variant='caption'>{ex.date}</Typography>
                                            <Typography className="timeline_des" variant="body2">{ex.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}

                            </CusTomTimeline>
                        </Grid>
                        {/* Education */}
                        <Grid item sm={12} md={6}>
                            <CusTomTimeline title={"Education"} icon={<SchoolIcon />}>
                                {resumeData.educations.map((ex, index) => (
                                    <TimelineItem key={index}>
                                        <CustomTimelineSeparator />
                                        <TimelineContent className="timeline_content">
                                            <Typography className="timeline_title">{ex.title}</Typography>
                                            <Typography className="timeline_date" variant='caption'>{ex.date}</Typography>
                                            <Typography className="timeline_des" variant="body2">{ex.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}

                            </CusTomTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* Skill */}
            <Grid container className="section pb-45">
                <Grid item className="section_title mb_30">
                    <span className="theme_span"></span>
                    <Typography variant="h6" className="section_title-text">Skills</Typography>
                </Grid>
                <Grid item xs={12} justify="center">
                    <Grid container className="slick_container">
                        <Grid item className="slick_item">
                            <Slider {...settingsss}>
                                <div className="slick_img">
                                    <img src={htmlSkill} alt="zxc" className="w-100"/>
                                </div>
                                <div>
                                    <img src={cssSkill} alt="zxc" className="w-100"/>
                                </div>
                                <div>
                                    <img src={jsSkill} alt="zxc" className="w-100"/>
                                </div>
                                <div>
                                    <img src={sassSkill} alt="zxc" className="w-100"/>
                                </div>
                                <div>
                                    <img src={bsSkill} alt="zxc" className="w-100"/>
                                </div>
                                <div>
                                    <img src={reactSkill} alt="zxc" className="w-100"/>
                                </div>
                            </Slider>
                        </Grid>
                    </Grid>

                </Grid>


            </Grid>


        </>
    );
}

export default Resume;