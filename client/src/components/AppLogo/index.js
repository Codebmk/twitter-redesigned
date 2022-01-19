import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./applogo.css";

function AppLogo() {
    return (
        <div className="applogo">
            <ArrowBackIosIcon/><TwitterIcon/><ArrowForwardIosIcon/>
        </div>
    )
}

export default AppLogo;
