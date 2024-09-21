import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import { AppBar, Toolbar, Zoom } from "@material-ui/core";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ImageGallery from "./components/ImageGallery";
import info from "./static/info";
import clearCacheData from "./emptyCache";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(#17003d,#0e0121)",
    display: "flex",
    justifyContent: "justify",
    alignItems: "top",
    height: "auto",
    color: "#fffade",
    letterSpacing: "2.5px",
  },
  drawer: {
    width: "30vh",
    height: "100%",
    backgroundImage:
      "linear-gradient(145deg, #19083F 30%, #1f0559 60%, #1e015e, #250075)",
    borderRight: "1px solid rgba(23, 0, 61, 0.3)",
  },
  menuToogleSidebar: {
    listStyle: "none",
    fontFamily: "Jura",
    fontWeight: "bold",
    fontSize: "3vh",
    lineHeight: "5vh",
    textAlign: "justify",
    color: "#0c001f", //'#17003d',
    textShadow: "-2px -1px 5px rgba(76, 252, 226, 0.6)",
  },
  appBar: {
    background: "none",
  },
  appBarWrapper: {
    margin: "0 10px",
  },
  titleWebpage: {
    flexGrow: "1",
    display: "flex",
    gap: "10px",
  },
  Portf: {
    fontFamily: "RighteousRegular",
    letterSpacing: "2px",
    fontSize: "2vh",
  },
  menuIcon: {
    color: "#fffade",
    fontSize: "3.5vh",
  },
  linkPortfolio: {
    color: "#fffade",
    textDecoration: "none",
  },
  linkSidebar: {
    color: "#0c001f",
    textDecoration: "none",
  },
  container: {
    margin: "0 auto",
    width: "80%",
  },
  nameOfProject: {
    fontFamily: "CocogooseUltralight",
    fontSize: "4vw",
    letterSpacing: "3px",
    margin: "8vh auto",
    width: "80%",
    textAlign: "center",
  },
  textBox: {
    fontFamily: "MontserratRegular",
    fontSize: "1rem",
    textAlign: "justify",
    padding: "20px",
    backgroundImage:
      "linear-gradient(45deg,  rgba(201, 125, 38, 1), rgba(31, 0, 74, 1))",
    borderRadius: "40px",
    border: "2px solid rgba(31, 0, 74, 1)",
    backdropFilter: "blur(5px)",
    webkitBackdropFilter: "blur(5px)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  },
  swipeBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "60px auto",
    fontFamily: "Jura",
    color: "pink",
  },
  buttonBox: {
    margin: "18px auto",
    width: "6vw", //'100px',
    height: "6vw", //'100px',
  },
  linkButtPlay: {
    color: "#fffade",
  },
  buttSeeApp: {
    color: "rgba(201,0,89,0.4)",
    borderRadius: "50%",
    width: "100%",
    height: "100%",
    fontFamily: "RighteousRegular",
    backgroundColor: "transparent",
    border: "6px solid rgba(201,0,89,0.2)",
    textShadow: "2px 2px 16px #c9005ac5, -1px 0 10px #c9005ac5",
    boxShadow: "0 0 50px -5px #c90059",
    transition: "linear .2s",
    cursor: "pointer",
  },
  buttonText: {
    fontFamily: "RighteousRegular",
    textAlign: "center",
    letterSpacing: "2px",
    fontSize: "4vh",
  },
});

export default function PrrojectPage() {
  const classes = useStyles();
  const [opens, setOpens] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    clearCacheData();
  }, []);

  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  });

  const { titleProject, id } = useParams();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar className={classes.appBar} elevation={0} id="appbar">
        <Toolbar className={classes.appBarWrapper}>
          <div className={classes.titleWebpage}>
            <Link to="/" className={classes.linkPortfolio}>
              <span
                id="portfolioHover"
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <ReplyAllIcon style={{ fontSize: "3.2vh" }}></ReplyAllIcon>
                <h1 className={classes.Portf}>Back to Portfolio</h1>
              </span>
            </Link>
          </div>
        </Toolbar>
      </AppBar>

      <Zoom in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <div className={classes.container} id="details-proj-container">
          <h1 className={classes.nameOfProject} id="titleProject">
            {titleProject}
          </h1>

          <div className={classes.swipeBox}>
            <ImageGallery nameImages={info[id].images} />
          </div>

          <br />
          <div className={classes.textBox} id="project-details-text">
            <div dangerouslySetInnerHTML={{ __html: info[id].longDescription }}>
              {/* className={classes.paragraph} */}
            </div>
          </div>
          <br />

          <video
            autoPlay
            loop
            muted
            style={{
              width: "100%",
              height: "auto",
              margin: "50px auto",
              borderRadius: "50px",
              boxShadow: "0 0 80px -20px rgba(201, 0, 89, .5)",
            }}
          >
            <source src={info[id].video} type="video/mp4" />
          </video>

          {info[id].linkHosted && (
            <>
              <h2 className={classes.buttonText}>
                Click on the button below to see the app
                <br />▼
              </h2>
              <div className={classes.buttonBox} id="buttonBox">
                <a
                  href={info[id].linkHosted}
                  className={classes.linkButtPlay}
                  target="_blank"
                >
                  <button className={classes.buttSeeApp} id="buttPlayApp">
                    {" "}
                    <ArrowForwardIosIcon fontSize="large" />
                  </button>
                </a>
              </div>
            </>
          )}
        </div>
      </Zoom>
    </div>
  );
}
