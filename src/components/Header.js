import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, IconButton, Toolbar, Drawer, Box, Collapse, Zoom, Fade} from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import FaceIcon from '@material-ui/icons/Face';
import {Link as Scroll} from 'react-scroll';
import '../css/fonts.css';
import '../css/animations.css';

const useStyles = makeStyles({
    root: {
        display:'flex',
        justifyContent: 'justify',
        alignItems: 'top',
        height:'140vh',
    },
    drawer: {
        height:'100%',
        backgroundImage:'linear-gradient(145deg, #19083F 30%, #1f0559 60%, #1e015e, #250075)',
        borderRight:'1px solid rgba(23, 0, 61, 0.3)',
    },
    menuToogleSidebar: {
        listStyle:'none',
        fontFamily:'Jura',
        fontWeight:'bold',
        textAlign:'justify',
        color:'#0c001f',//'#17003d',
        textShadow:'-2px -1px 5px rgba(76, 252, 226, 0.6)',
    },
    appBar: {
        background:'none',
    },
    appBarWrapper: {
        margin:'0 10px',
    },
    titleWebpage: {
        flexGrow:'1',
        display:'flex',
        color:'#fffade',
    },
    Portf: {
        fontFamily: "RighteousRegular", 
        letterSpacing:"2px",
        fontSize:"2vh",
    },
    menuIcon: {
        color:'#fffade',
        fontSize:'3.5vh',
    },
    container: {
        display:'grid',
    },
    intro: {
        fontFamily: 'RighteousRegular',
        backgroundImage: 'linear-gradient(45deg,  #f3ec78, #c90059)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor:'transparent',
        fontSize:'8vh',
        letterSpacing:'8px',
        wordSpacing:'10px',
        marginTop:'15vh'
    },
    underIntro: {
        color:'#fffade',
        fontFamily: 'RighteousRegular',
        fontSize:'3vh',
        letterSpacing:'2px',
        wordSpacing:'8px',
        textShadow:'0px 0px 2px darkgrey',
        marginTop:'-30vh',
    },
    buttonCircle: {
        zIndex:'2',
    },
    buttonPortf: {
        fontFamily: 'RighteousRegular',
        fontSize:'3vh',
        color:'#4cfce1',
        letterSpacing:'3px',
        wordSpacing:'8px',
        width:'40vh',//'400px',
        height:'25vh',//'180px',
        cursor:'pointer',
        backgroundColor:'transparent',
        border:'none',
        outline:'none',
        textShadow:'0px 0px 26px aqua',
        paddingBottom:'10vh',
    },
    circle: {
        opacity:'.8',
    }
});

export default function Header() {
    const classes = useStyles();
    const [opens, setOpens] = useState(false);

    const namePortfolio = backgroundSizeprocess.env.PUBLIC_URL + '/assets/nameNormalGlitch.gif';//"/Portfolio-Anca/assets/nameNormalGlitch.gif";
    const pictureIntro = process.env.PUBLIC_URL + '/assets/introWebpage.png';//"/Portfolio-Anca/public/assets/introWebpage.png";
    const bubbles = process.env.PUBLIC_URL + '/assets/bubbles-crop.png';//"/Portfolio-Anca/public/assets/bubbles-crop.png";

    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    })

    return(
        <div className={classes.root} id="header">
            <Drawer open={opens} onClose={() => setOpens(false)} >
                <Box className={classes.drawer} id="drawer" display="grid" justifyContent="space-between" fontWeight={800}>
                    <img src={namePortfolio} alt="Portfolio's Name" style={{margin:'0 auto', width:'15vh', height:'10vh'}}/>
                    <ul className={classes.menuToogleSidebar} id="menuItems">
                        <Scroll to="header" smooth={true}>
                            <li>Home</li>
                        </Scroll>
                        <div></div>
                        <Scroll to="portfolio-info" smooth={true}>
                            <li>Projects</li>
                        </Scroll>
                        <div></div>
                        <Scroll to="list-of-tech" smooth={true}>
                            <li>Technologies</li>
                        </Scroll>
                        <div></div>
                        <Scroll to="about-autor" smooth={true}>
                            <li>About</li>
                        </Scroll>
                        <div></div>
                        <Scroll to="contact" smooth={true}>
                            <li>Contact</li>
                        </Scroll>
                        <div></div>
                    </ul>
                </Box>
            </Drawer>

            <AppBar className={classes.appBar} elevation={0} id="appbar">
                <Toolbar className={classes.appBarWrapper}>
                    <div className={classes.titleWebpage}>
                        <Scroll to="header" smooth={true}>
                        <span id="portfolioHover" style={{display:'flex'}}>
                            <FaceIcon style={{fontSize:'3.2vh',marginTop:'0.5%', marginRight:'5px'}}></FaceIcon>
                            <h1 className={classes.Portf}>Portfolio</h1>
                        </span>
                        </Scroll>
                    </div>
                    <IconButton edge="start" onClick={() => setOpens(true)}>
                        <MenuIcon className={classes.menuIcon} id="menuIconHover"/>
                        {/* <SortIcon /> */}
                    </IconButton>
                </Toolbar>
            </AppBar>
           
            <div className={classes.container} id="container">
                <Fade in={checked} {...(checked ? {timeout:2000} : {})}>
                    <h1 className={classes.intro} id="intro">
                        Welcome to <br/>
                        My Personal <br/>
                        Portfolio !
                    </h1>
                </Fade>
                <Fade in={checked} {...(checked ? {timeout:2200} : {})}>
                    <h2 className={classes.underIntro} id="underIntro">
                    Passionate about Web Development and <br/>
                    I present here my main creations during my studies.
                    </h2>
                </Fade>
                
                <Scroll to="portfolio-info" smooth={true}>
                    <div className={classes.buttonCircle} id="buttonCircle">
                        <Collapse in={checked} {...(checked ? {timeout:1000} : {})}>
                            <button className={classes.buttonPortf} id="buttonSeePortf">See Portfolio</button>
                            <div id="arrowsDown" style={{margin:'0',position:'absolute',top:'40%',left:'20vh'}}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Collapse>
                    </div>
                </Scroll>
            </div>
            <Zoom in={checked} {...(checked ? {timeout:1800} : {})}>
                <div className={classes.circle} id="circle">
                    <img src={pictureIntro} alt="Images Apps" style={{
                        objectFit:'contain'
                        }} />
                </div>
            </Zoom>
            <img src={bubbles} id="bubbles" width="100%" style={{
                position:'absolute',
                zIndex:'2'}}/>
        </div>
    );
}