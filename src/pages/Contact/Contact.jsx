
import { Grid, Typography } from "@mui/material";
import React from "react";
import swal from "sweetalert";
import CustomButton from "../../components/Button/Button";
import useFormValidate from "../../core/hook/useFormValidate";
import resumeData from "../../utils/resumeData";
import "./style.scss";

function Contact(props) {
  const { form, error, submit, inputChange } = useFormValidate(
    {
      name: "",
      email: "",
      message: "",
    },
    {
      rule: {
        name: {
          required: true,
        },
        email: {
          pattern: "email",
        },
      
      },
      message: {
        name: {
          required: "Name không được để trống",
        },
        email: {
          pattern: "Email không đúng định dạng",
        },
        
      },
    }
  );

  const handleSubmit = () => {
    let error = submit();
    console.log(error);
    if (Object.keys(error).length === 0) {
      swal("Success!", "You clicked the button!", "success");
      
    }
  };
  return (
    <Grid container className="section pb-45" spacing={5}>
      {/* Contact form */}
      <Grid item xs={12} md={6}>
        <Grid container>
          <Grid item className="section_title mb_30">
            <span className="theme_span"></span>
            <Typography variant="h6" className="section_title-text">
              Contact Form
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div><input  type="text" className="w-100 inputText" style={{padding: 10, borderRadius: 5}} placeholder="Name" name="name" onChange={inputChange} value={form.name}/></div>
              
                {error.name && (
                  <Typography className="input-error mt-2" style={{color: "red"}}>{error.name}</Typography>
                )}
              </Grid>
              <Grid item xs={12} >
               
                <div><input type="text" className="w-100 inputText" style={{padding: 10, borderRadius: 5}} placeholder="Email" name="email" onChange={inputChange} value={form.email}/></div>
                {error.email && (
                  <Typography className="input-error mt-2"  style={{color: "red"}}>{error.email}</Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <textarea className="w-100 inputText" placeholder="Message" rows={4} style={{ borderRadius: 5 }}></textarea>
               
              </Grid>
              <Grid item xs={12} className="mt-3">
                <div onClick={handleSubmit}>
                  <CustomButton text="Submit" />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Contact information */}
      <Grid item xs={12} md={6}>
        <Grid container>
          <Grid item className="section_title mb_30">
            <span className="theme_span"></span>
            <Typography variant="h6" className="section_title-text">
              Contact Information
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Grid container className="mt-3">
              <Grid item xs={12}>
                <Typography className="contact_info">
                  <span>Address: </span>
                  {resumeData.address}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className="contact_info">
                  <span>Phone: </span>
                  {resumeData.phone}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className="contact_info">
                  <span>Email: </span>
                  {resumeData.email}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* icon */}
          <Grid item xs={12} className="mt-3">
            <Grid container className="contact_info-socials">
              {Object.keys(resumeData.socials).map((item, index) => (
                <Grid item key={index} className="contact_info-icon">
                  <a href={resumeData.socials[item].link} target="_blank">
                    {resumeData.socials[item].icon}
                  </a>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
