import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Wave from "react-wavify";
import Lottie from "react-lottie";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import "./css/animations.min.css";
import "./css/fonts.min.css";
import "./css/layout.min.css";
import clearCacheData from "./emptyCache";
import animationCircles from "./lotties/Bubbles.json";

const useStyles = makeStyles({
  root: {
    backgroundImage: 'url("/Portfolio-Anca/assets/bckPortfolioEnlarge.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
    zIndex: "-1",
  },
});

const bgStyle = {
  zIndex: "0",
  opacity: "0.2",
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  boxShadow: "10px 10px 60px 40px rgba(76, 252, 225, 0.5)",
};

const bgStyleLottie = {
  zIndex: "0",
  position: "absolute",
  left: "2rem",
  bottom: "0",
};

export default function App() {
  const background = useStyles();
  const animatedWall = "/Portfolio-Anca/assets/video/trim_video.mp4";
  const bubblesWall = "/Portfolio-Anca/assets/bg-bubbles-header.jpg";

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationCircles,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  React.useEffect(() => {
    clearCacheData();
  }, []);

  return (
    <div className={background.root}>
      <CssBaseline />
      {/* <video autoPlay loop muted style={bgStyle}>
        <source src={animatedWall} type='video/mp4' />
      </video> */}
      <img src={bubblesWall} alt="Background Bubbles" style={bgStyle} />

      <Lottie
        options={defaultOptions}
        height={300}
        width={300}
        style={bgStyleLottie}
      />

      <Header />

      <Portfolio />

      <div id="footer">
        <Wave
          id="wave"
          fill="url(#gradient)"
          paused={false}
          options={{
            height: 20,
            amplitude: 40,
            speed: 0.5,
            points: 3,
          }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#FCB900" />
              <stop offset="90%" stopColor="#FF6900" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
    </div>
  );
}
