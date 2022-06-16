
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Typography } from '@mui/material';
import "./style.scss";

function CusTomTimeline({ title,children,icon }) {
    return (
        <Timeline className={'timeline'}>
            {/* Item Header */}
            <TimelineItem className={'timeline_firstItem'}>
                <TimelineSeparator>
                    <TimelineDot className={'timeline_dot_header'} >{icon}</TimelineDot >
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><Typography  variant="h6" className={'timeline_header'}>{title}</Typography></TimelineContent>
            </TimelineItem>
            {/* Remaining Item */}

            {children}

            {/* <TimelineItem>
                <CustomTimelineSeparator />
                <TimelineContent>Code</TimelineContent>
            </TimelineItem> */}

        </Timeline>
    );
}

export const CustomTimelineSeparator = () => (
    <TimelineSeparator className={"separator_padding"}>
        <TimelineDot variant="outlined" className={'timeline_dot'} />
        <TimelineConnector />
    </TimelineSeparator>
)

export default CusTomTimeline;    