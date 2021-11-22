import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from './ProjectCard';
import Technologies from './Technologies';
import About from './About';
import Contact from './Contact';
import info from '../static/info';
import useWindowPosition from '../hook/useWindowPosition'

const useStyles = makeStyles({
    root: {
        minheight: '100vh',
        justifyContent: 'center',
        width: 'auto',
    },
    listedProjects: {
        display: 'contents',
    },
    titleMenu: {
        color:'#fffade',
        fontFamily:'RighteousRegular',
        letterSpacing:'4px',
        fontSize:'4vh',
        textShadow:'1px 1px 2px grey',
    }
});

export default function Portfolio() {
    const classes = useStyles();
    const checked = useWindowPosition('header');

    return (
    <div className={classes.root} id="portfolio-info">
        <>
        <div className={classes.listedProjects} id="list-of-projects">
            <h1 className={classes.titleMenu} id="onlyProjects">Projects</h1>
                <ProjectCard checked={checked} infoProject={info[7]}/>
                <ProjectCard checked={checked} infoProject={info[6]}/>
                <ProjectCard checked={checked} infoProject={info[5]}/>
                <ProjectCard checked={checked} infoProject={info[4]}/>
                <ProjectCard checked={checked} infoProject={info[3]}/>
                <ProjectCard checked={checked} infoProject={info[2]}/>
                <ProjectCard checked={checked} infoProject={info[1]}/>
                <ProjectCard checked={checked} infoProject={info[0]}/>
        </div>
        <div id="list-of-tech">
            <h1 className={classes.titleMenu}>Technologies</h1>
            <Technologies checked={checked}/>
        </div>
        <div id="about-autor">
            <h1 className={classes.titleMenu}>About</h1>
            <About checked={checked}/>
        </div>
        <br/>
        <div id="contact">
            <h1 className={classes.titleMenu}>Contact</h1>
            <Contact checked={checked}/>
        </div>
        </>
    </div>
    );
}