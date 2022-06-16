
import { Typography } from '@mui/material';
import React from 'react';
import "./style.scss";

function Footer(props) {
    return (
        <div className="footer">
            <div className="footer_left">
                <Typography className="footer_name">Khánh Duy</Typography>
            </div>
            <div className="footer_right">
                {/* <Typography className="footer_copyright">Design and Developed by Duy</Typography> */}
                Clone idea from Traonline
            </div>
        </div>
    );
}

export default Footer;