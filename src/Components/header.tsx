import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Navbar from "./Navbar/Navbar";
import './mainComponent.css'
import {Link} from 'react-router-dom'

const Header = () => {
  const classes = {
    avatar: {
      bgcolor: "white",
      border: "1px solid #F86338",
      color: "black",
      width: 30,
      height: 30,
      fontSize: "0.8rem",
      margin: '1px',
    },
  };

  return (
    <div className="topbar">
      <div className="container-fluid">
        <div className="row">
          <div className="d-none d-md-block col-2">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "4rem",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="me-2"
              >
                <path
                  d="M21.1909 14.489L21.1529 13.662L14.6699 12.736L13.3549 15.31C11.9665 14.5283 10.6973 13.5517 9.58591 12.41C8.4315 11.3004 7.44782 10.0259 6.66691 8.62801L9.46691 7.22801L6.66691 0.708008L5.90691 0.818008C4.61977 0.995313 3.42729 1.59296 2.51491 2.51801C-0.658091 5.68701 0.584908 11.9 5.34291 16.657C8.32491 19.638 11.8759 21.239 14.8939 21.238C15.7375 21.2674 16.5784 21.1274 17.3669 20.8263C18.1554 20.5252 18.8756 20.0691 19.4849 19.485C20.1073 18.8208 20.5813 18.0319 20.8754 17.1705C21.1695 16.3092 21.2771 15.3951 21.1909 14.489ZM18.0709 18.071C15.7709 20.371 10.5899 19.071 6.75691 15.243C2.92391 11.415 1.62891 6.22901 3.92891 3.92901C4.35765 3.49451 4.88239 3.16672 5.46091 2.97201L6.88091 6.28501L5.77391 6.83801C5.53411 6.95811 5.32077 7.12498 5.14646 7.3288C4.97215 7.53262 4.84039 7.76926 4.75894 8.02478C4.6775 8.28031 4.64801 8.54955 4.67222 8.81664C4.69643 9.08374 4.77384 9.34329 4.89991 9.58001C5.77526 11.1482 6.87598 12.5794 8.16691 13.828C9.41583 15.1045 10.8413 16.1952 12.3999 17.067C12.6402 17.1974 12.904 17.2785 13.1761 17.3054C13.4481 17.3324 13.7227 17.3047 13.9839 17.224C14.2393 17.1445 14.476 17.014 14.6795 16.8404C14.883 16.6668 15.0491 16.4537 15.1679 16.214L15.8149 14.92L19.1819 15.401C19.1435 16.3954 18.7492 17.3429 18.0709 18.071Z"
                  fill="black"
                />
              </svg>
              <Link to={'#'} className={'categoryList'}>
              <h6>+022 319 821 967</h6>
              </Link>
            </Box>
          </div>
          <div className="col-md-8 logoContainer">
            <h3>logoipsum</h3>
          </div>
          <div className="d-none d-md-flex col-2 justify-content-end">
            <Box
              pt={1}
              sx={{
                textAlign: "center",
                alignItems: "center",
                display: "flex",
                justifyContent: "space-evenly",
                height: "4rem",
                width: '100%'
              }}
            >
              <Link to={'#'} className={'categoryList'}>
              <Avatar sx={classes.avatar}>Tw</Avatar>
              </Link>
              <Link to={'#'} className={'categoryList'}>
              <Avatar
                sx={classes.avatar}
              >
                Ig
              </Avatar>
              </Link>
              <Link to={'#'} className={'categoryList'}>
              <Avatar
                sx={classes.avatar}
              >
                Yt
              </Avatar>
              </Link>
              <Link to={'#'} className={'categoryList'}>
              <Avatar
                sx={classes.avatar}
              >
                Fb
              </Avatar>
              </Link>
            </Box>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
