import React from 'react';
import "./style.scss";
import resumeData from "../../utils/resumeData";
import { Grid, Icon, Typography } from '@mui/material';

function Home(props) {
    return (
        <>
            <Grid container className="section pb-45">
                <Grid item className="section_title mb_30">
                    <span className="theme_span"></span>
                    <Typography variant="h6" className="section_title-text">About Me</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className="section_content">{resumeData.about}</Typography>
                </Grid>

            </Grid>

            <Grid container className="section pb-45 top_60">
                <Grid item className="section_title mb_30">
                    <span className="theme_span"></span>
                    <Typography variant="h6" className="section_title-text">My Hobbies</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={3} justifyContent="space-between">
                        {resumeData.hobbies.map((hob, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <div className="hobbies">
                                    <Icon className="hobbies_icon">{hob.icon}</Icon>
                                    <Typography className="hobbies_title">{hob.title}</Typography>
                                    <Typography className="hobbies_des" variant="body2">{hob.des}</Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;