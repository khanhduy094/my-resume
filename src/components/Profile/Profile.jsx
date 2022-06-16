
import GetAppIcon from '@mui/icons-material/GetApp';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

import { Typography } from '@mui/material';
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import "./style.scss";
const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className={"timeline_content"}>
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <a href={link} target="_blank" rel="noreferrer">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span> {text}{" "}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

function Profile(props) {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img src="/img/myImage.png" alt="sad" style={{ objectFit: "cover" }} />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PermIdentityOutlinedIcon />} title={""}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Title" text={resumeData.title} />
          <CustomTimelineItem title="Email" text={resumeData.email} />
          {Object.keys(resumeData.socials).map((key, index) => (
            <CustomTimelineItem
              key={index}
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <div className="btn-container">
          <CustomButton
            text="Download CV"
            icon={<GetAppIcon />}
            link={
              "https://www.topcv.vn/xem-cv/e364fffb21ce52ceb20468d275a53dee?utm_source=link_i_topcv&utm_campaign=link_i_topcv&utm_medium=link_i_topcv"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
