import React, { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";
import Typewriter from "typewriter-effect";
import Spline from "@splinetool/react-spline";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Collapse,
  Fade,
  Zoom,
  Slide,
  Typography,
  Divider,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import FaceIcon from "@material-ui/icons/Face";

const useStyles = makeStyles({
  drawer: {
    height: "100%",
    width: "30vh",
    backgroundImage:
      "linear-gradient(145deg, #19083F 30%, #000 60%, #000, #000)",
    borderRight: "2px solid rgba(23, 0, 61, 0.8)",
  },
  menuToogleSidebar: {
    listStyle: "none",
    fontFamily: "CocogooseUltralight",
    textAlign: "justify",
    color: "#fff", //'#17003d',
    textShadow: "-2px -1px 5px rgba(76, 252, 226, 0.6)",
    lineHeight: "4rem",
    paddingRight: "40px",
  },
  appBar: {
    background: "none",
  },
  appBarItems: {
    display: "inline-flex",
    justifyContent: "space-around",
    alignItems: "center",
    listStyle: "none",
    color: "#fffade",
    fontFamily: "CocogooseUltralight",
    letterSpacing: "2px",
    gap: "4rem",
  },
  Portf: {
    fontFamily: "CocogooseRegular",
    letterSpacing: "2px",
  },
  menuIcon: {
    color: "#fffade",
    fontSize: "3.5vh",
  },
  intro: {
    fontFamily: "CocogooseGradient",
    fontSize: "6vh",
    fontWeight: "600",
    backgroundImage: "linear-gradient(45deg,  #f3ec78, #c90059)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "8px",
    wordSpacing: "10px",
  },
  underIntro: {
    color: "#fffade",
    fontFamily: "CocogooseInnerline",
    fontWeight: "500",
    letterSpacing: "1px",
    wordSpacing: "8px",
    textShadow: "0px 0px 2px darkgrey",
  },
  buttonCircleSeePortf: {
    zIndex: "2",
    position: "absolute",
    bottom: "0",
  },
  buttonPortf: {
    fontFamily: "CocogooseUltralight",
    fontSize: "3vh",
    color: "#4cfce1",
    letterSpacing: "2px",
    wordSpacing: "8px",
    width: "40vh", //'400px',
    height: "25vh", //'180px',
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    textShadow: "0px 0px 26px aqua",
    paddingBottom: "10vh",
  },
  buttonArrowDown: {
    margin: "0",
    position: "absolute",
    top: "40%",
    left: "20vh",
  },
  headerImage: {
    opacity: "1",
    zIndex: "2",
    objectFit: "contain",
    margin: "0 auto",
  },
  bgStyleLottie: {
    zIndex: "-2",
    // opacity: "1",
    position: "absolute",
    top: "0",
    left: "0",
  },
});

const listMenuItems = (
  <>
    <Scroll to="header" smooth={true}>
      <li>Home</li>
    </Scroll>
    <Scroll to="portfolio-info" smooth={true}>
      <li>Projects</li>
    </Scroll>
    <Scroll to="list-of-tech" smooth={true}>
      <li>Skills</li>
    </Scroll>
    <Scroll to="work-experience" smooth={true}>
      <li>Experience</li>
    </Scroll>
    <Scroll to="about-autor" smooth={true}>
      <li>About</li>
    </Scroll>
    <Scroll to="contact" smooth={true}>
      <li>Contact</li>
    </Scroll>
  </>
);

export default function Header() {
  const classes = useStyles();
  const [opens, setOpens] = useState(false);
  const [checked, setChecked] = useState(false);

  const namePortfolio = "/Portfolio-Anca/assets/nameNormalGlitch.gif";
  const headerImage = "/Portfolio-Anca/assets/header-image.png";

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Container maxWidth="false" sx={{ height: "100vh", pt: 4 }}>
      <Drawer open={opens} onClose={() => setOpens(false)}>
        <Box
          className={classes.drawer}
          // id="drawer"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <img
            src={namePortfolio}
            alt="Portfolio's Name"
            style={{ margin: "0 auto", width: "15vh", height: "10vh" }}
          />
          <ul className={classes.menuToogleSidebar} id="sidebarMenuItems">
            {listMenuItems}
          </ul>
        </Box>
      </Drawer>

      <AppBar
        component="nav"
        elevation={0}
        className={classes.appBar}
        id="appbar"
      >
        <Toolbar>
          <Stack direction="row" sx={{ flexGrow: 1 }}>
            <Scroll to="header" smooth={true}>
              <Stack
                id="portfolioHover"
                className={classes.Portf}
                direction="row"
                spacing={1}
                alignItems="center"
              >
                <FaceIcon fontSize="medium"></FaceIcon>
                <span>Portfolio</span>
              </Stack>
            </Scroll>
          </Stack>
          <div id="appbar-desktop">
            <ul className={classes.appBarItems} id="desktop-menuItems">
              {listMenuItems}
            </ul>
          </div>
          <IconButton
            edge="start"
            onClick={() => setOpens(true)}
            id="appbar-mobile"
          >
            <MenuIcon className={classes.menuIcon} id="menuIconHover" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={12}
        justifyContent="flex-start"
        sx={{
          flexGrow: 1,
          height: "100%",
        }}
        id="header"
      >
        {/* id="header-content" */}
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Paper sx={{ background: "none", border: "none", boxShadow: "none" }}>
            <Slide
              direction="down"
              in={checked}
              {...(checked ? { timeout: 1000 } : {})}
            >
              <Stack
                direction="column"
                alignItems="flex-start"
                justifyContent="center"
                className={classes.intro}
                useFlexGap
                flexWrap="wrap"
                // id="intro"
                sx={{
                  height: {
                    xs: "48vh",
                    sm: "50vh",
                    md: "55vh",
                    // lg: "58vh",
                  },
                }}
              >
                <Typewriter
                  options={{
                    strings: [
                      "Welcome to My Personal Portfolio!",
                      "Passionate about Web Development and UI/UX design.",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                  }}
                />
              </Stack>
            </Slide>
            <Fade
              direction="right"
              in={checked}
              {...(checked ? { timeout: 1500 } : {})}
              style={{ transitionDelay: checked ? "2000ms" : "0ms" }}
            >
              <Typography
                variant="h5"
                className={classes.underIntro}
                // id="underIntro"
              >
                Here I will present my main creations during my studies.
              </Typography>
            </Fade>

            <Scroll to="portfolio-info" smooth={true}>
              <div className={classes.buttonCircleSeePortf}>
                {/* id="buttonCircle" */}
                <Collapse in={checked} {...(checked ? { timeout: 2800 } : {})}>
                  <button className={classes.buttonPortf} id="buttonSeePortf">
                    See Portfolio
                  </button>
                  <div id="arrowsDown" className={classes.buttonArrowDown}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </Collapse>
              </div>
            </Scroll>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          justifyContent="flex-end"
          alignItems="flex-end"
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <Paper
            sx={{
              background: "none",
              border: "none",
              boxShadow: "none",
              height: "100%",
            }}
          >
            <Slide
              direction="left"
              in={checked}
              {...(checked ? { timeout: 2200 } : {})}
            >
              <Stack
                direction="column"
                alignItems="flex-start"
                justifyContent="center"
                sx={{ height: "100%" }}
              >
                {/* FOR CUBE */}
                {/* <Spline
                  scene="https://prod.spline.design/BOW2Ioxx8p-iwiZj/scene.splinecode"
                  className={classes.headerImage}
                /> */}
                {/* FOR GIRL */}
                {/* <Spline
                  scene="https://prod.spline.design/6gi7KV6ieEE9zdwW/scene.splinecode"
                  className={classes.headerImage}
                /> */}
                <img
                  src={headerImage}
                  width="80%"
                  height="auto"
                  className={classes.headerImage}
                />
              </Stack>
            </Slide>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
