import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Grow} from '@material-ui/core';
const styleCards = {
    color: '#fffade',
    backgroundColor: 'transparent',
    fontFamily: 'Jura',
    fontSize:'2vh',
    borderRadius: '40px',
    boxShadow: '0 0 30px rgb(18, 12, 23)',
    boxSizing: 'border-box',
    backgroundImage: 'linear-gradient(45deg,  #f3ec78, #c90059)',
    padding:'10px',
    zIndex:'2',
}

const styleContentCard = {
    display: 'grid',
    textAlign: 'center',
    padding: '12px 20px 0 20px',
    minHeight: '25vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(45deg,  rgba(243, 236, 120, 1), rgba(201, 0, 89, 1))',
    borderRadius: '40px',
    zIndex:'2',
}

const buttonShowMore = {
    cursor: 'pointer',
    backgroundColor:'transparent',
    border:'none',
    color:'#c90059',
    fontFamily:'RighteousRegular',
    textDecoration:'none',
    textShadow: '2px 2px 16px #c9005ac5, -1px 0 10px #c9005ac5',
}

export default function ProjectCard({checked, infoProject}) {

    return (
        <Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? {timeout:1000} : {})}>
            <div id="Proj3dCards" style={{
            display:'inline-flex',
            flexWrap: 'wrap', 
            minHeight: '60vh',
            justifyContent: 'center',
            }}>
                <div style={styleCards} id="projectCardTransform">
                    <div>
                        <img src={infoProject.imageUrl} style={{objectFit:'cover',width:'100%',
                        borderRadius:'40px',opacity:'1'}}/>
                        <div style={styleContentCard} id="infoCard">
                            <h3>{infoProject.title}</h3>
                            <h5 style={{marginTop:'-15px',marginBottom:'15px'}}>
                                {infoProject.shortDescription}
                            </h5>
                                <Link to={{pathname:infoProject.title + "/" + infoProject.id,
                                            id:infoProject.id}}>
                                    <span id="buttonProjShow">
                                        <button style={buttonShowMore}>Show more</button>
                                    </span>
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Grow>
    );
}