import React from "react";
import { Slide } from "@material-ui/core";
import { Container, Grid, Typography, Stack } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./ProjectCard";
import Technologies from "./Technologies";
import About from "./About";
import Contact from "./Contact";
import WorkExperience from "./WorkExperience";
import info from "../static/info";
import useWindowPosition from "../hook/useWindowPosition";

const useStyles = makeStyles({
  titleMenu: {
    color: "#fffade",
    fontFamily: "CocogooseRegular",
    letterSpacing: "2px",
    fontSize: "2.2rem",
    textShadow: "1px 1px 2px grey",
  },
  subtitle: {
    color: "#878c94",
    fontFamily: "CocogooseInnerline",
    fontSize: "1.2rem",
    textTransform: "uppercase",
  },
  styleCircuitImg: {
    width: "3rem",
    height: "3rem",
    border: "6px solid #fff",
    borderRadius: "50%",
    boxShadow: "2px 3px 8px gray",
  },
});

export default function Portfolio() {
  const classes = useStyles();
  const checked = useWindowPosition("list-of-projects");
  const checkedT = useWindowPosition("list-of-tech");
  const checkedW = useWindowPosition("work-experience");
  const checkedA = useWindowPosition("about-autor");
  const checkedC = useWindowPosition("contact");

  return (
    <Container maxWidth="false" id="portfolio-info">
      <Slide
        direction="right"
        in={checked}
        {...(checked ? { timeout: 600 } : {})}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            py: 4,
            px: 1,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {/* <img src={circuitImg} className={classes.styleCircuitImg} /> */}
          <span className={classes.styleCircuitImg}></span>
          <Stack
            direction="column"
            spacing={0.1}
            sx={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <h2 className={classes.subtitle}>INTRODUCTION</h2>
            <h1 className={classes.titleMenu}>Projects.</h1>
          </Stack>
        </Stack>
      </Slide>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
        id="list-of-projects"
      >
        {[...info].reverse().map((project, index) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
            <ProjectCard checked={checked} infoProject={project} />
          </Grid>
        ))}
      </Grid>
      <div id="list-of-tech">
        <Slide
          direction="right"
          in={checkedT}
          {...(checkedT ? { timeout: 600 } : {})}
        >
          {/* <h1 className={classes.titleMenu}>
            <img src={circuitImg} className={classes.styleCircuitImg} />
            Skills
          </h1> */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              py: 4,
              px: 1,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <span className={classes.styleCircuitImg}></span>
            <Stack
              direction="column"
              spacing={0.1}
              sx={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <h2 className={classes.subtitle}>my knowledge and abilities</h2>
              <h1 className={classes.titleMenu}>Skills.</h1>
            </Stack>
          </Stack>
        </Slide>
        <Technologies checked={checkedT} />
      </div>
      <div id="work-experience">
        <Slide
          direction="right"
          in={checkedW}
          {...(checkedW ? { timeout: 600 } : {})}
        >
          <Stack
            direction="row"
            spacing={2}
            sx={{
              py: 4,
              px: 1,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <span className={classes.styleCircuitImg}></span>
            <Stack
              direction="column"
              spacing={0.1}
              sx={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <h2 className={classes.subtitle}>what i have done so far</h2>
              <h1 className={classes.titleMenu}>Work Experience.</h1>
            </Stack>
          </Stack>
        </Slide>
        <WorkExperience />
      </div>
      <div id="about-autor">
        <Slide
          direction="right"
          in={checkedA}
          {...(checkedA ? { timeout: 600 } : {})}
        >
          <Stack
            direction="row"
            spacing={2}
            sx={{
              pt: 4,
              px: 1,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <span className={classes.styleCircuitImg}></span>
            <Stack
              direction="column"
              spacing={0.1}
              sx={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <h2 className={classes.subtitle}>something about myself</h2>
              <h1 className={classes.titleMenu}>About.</h1>
            </Stack>
          </Stack>
        </Slide>
        <About checked={checkedA} />
      </div>
      <div id="contact">
        <Slide
          direction="right"
          in={checkedC}
          {...(checkedC ? { timeout: 600 } : {})}
        >
          <Stack
            direction="row"
            spacing={2}
            sx={{
              py: 4,
              px: 1,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <span className={classes.styleCircuitImg}></span>
            <Stack
              direction="column"
              spacing={0.1}
              sx={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <h2 className={classes.subtitle}>get in touch</h2>
              <h1 className={classes.titleMenu}>Contact.</h1>
            </Stack>
          </Stack>
        </Slide>
        <Contact checked={checkedC} />
      </div>
    </Container>
  );
}
