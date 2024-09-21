import React from "react";
import { Grow } from "@material-ui/core";
import { Box, Grid, Paper } from "@mui/material";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";
import Spline from "@splinetool/react-spline";

const styleAboutParagraph = {
  textAlign: "justify",
  color: "#fffade",
  fontFamily: "AspergitRegular",
  fontWeight: "bold",
  background: "none",
  //backgroundImage: "linear-gradient(45deg,  rgba(201, 125, 38, 1), rgba(31, 0, 74, 1))",
  letterSpacing: "2px",
  borderRadius: "40px",
  border: "2px solid rgba(255, 255, 255, .2)",
  boxShadow:
    "rgba(255, 255, 255, 0.10) 0px 4px 16px 0px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px",
};

const styleLanguageSkill = {
  backgroundColor: "#30007d",
  padding: "10px 18px",
  borderRadius: "100px 0 100px 0",
};

export default function About({ checked }) {
  //   const imgProfile = "/Portfolio-Anca/assets/profile-avatar.jpeg";

  return (
    <Grow
      in={checked}
      style={{ transformOrigin: "0 0 0" }}
      {...(checked ? { timeout: 1500 } : {})}
    >
      <Box
        // minHeight="90vh"
        alignItems="center"
        justifyContent="center"
        sx={{ pb: { sm: 10 } }}
      >
        <Grid
          container
          // direction="row"
          height="90vh"
          maxheight="100vh"
          spacing={{ xs: 2, md: 1 }}
          columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          alignItems="stretch"
          justifyContent="center"
          flexWrap="wrap"
          id="about"
        >
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Spline scene="https://prod.spline.design/ujtFUjlSsBLep8Pm/scene.splinecode" />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={4}>
            <Paper
              sx={{ mt: { lg: 15, md: 15 }, p: 4 }}
              style={styleAboutParagraph}
            >
              &emsp;
              <CircleTwoToneIcon style={{ marginBottom: "-8px" }} /> I am
              specialized in software developing, having a Computer Science
              Bachelor Degree and a Master Degree in the same field. I am
              working in the Web Development field right now, as a Frontend
              developer. I am passionate about programming and design, UI/UX,
              graphics.
              <br />
              <br />
              &emsp;
              <CircleTwoToneIcon style={{ marginBottom: "-6px" }} />{" "}
              Furthermore, I have worked as a Fullstack programmer, having
              knowledge about both fields, frontend and backend. I like working
              with both tehnologies (frontend and backend), but especially in
              the frontend field, because I can share my creativity, combined
              with the UI design in creating web applications - I would like to
              share my ideas, creativity and originality in creating apps. I
              have a passion to be up to date with latest releases about web
              technologies and learning new informations.
              <br />
              <br />
              {/* &emsp;
              <CircleTwoToneIcon style={{ marginBottom: "-8px" }} /> I am a
              hardworking, punctual person, seriously and very fair person. I
              don't like copy things, I like to learn, making them on my own.
              <br />
              <br /> */}
              Language skills:
              <br />
              <br />
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                <span style={styleLanguageSkill}>
                  English - middle to advanced
                </span>
                <span style={styleLanguageSkill}>French – begginer</span>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Grow>
  );
}
