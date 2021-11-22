import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import './css/layout.css';
import clearCacheData from './emptyCache';

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/bckPortfolioEnlarge.png'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '100vh',
    zIndex:'1',
  },
});

const videoStyle = {
  zIndex:"0",
  opacity:"0.2",
  position:"fixed",
  width:"100%",
  height:"100%",
  objectFit: "cover",
};

export default function App() {
  const background = useStyles();
  const animatedWall = process.env.PUBLIC_URL + 'assets/video/trim_video.mp4';
  clearCacheData();

  return (
    <div className={background.root}>
      <CssBaseline />
      <video autoPlay loop muted style={videoStyle}>
        <source src={animatedWall} type='video/mp4' />
      </video>
      <Header />
      <Portfolio />
    </div>
  );
}
