import React from 'react';
import {Grow} from '@material-ui/core';

const styleListTechnologies = {
    color:'#fffade',
    fontFamily: 'Jura',
    fontSize:'2vh',
    fontWeight:'bold',
    letterSpacing:'1px',
    marginLeft: '5%'
};

export default function Technologies({checked}) {
    return (
        <Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? {timeout:1800} : {})}>
            <div 
            style={{
                minHeight:'20vh',
            }}
            > 
                <p style={styleListTechnologies}>All these projects were created in the following technologies:</p>
                <ul style={styleListTechnologies} id="technologies">
                    <li>ReactJS</li>
                    <li>Node.js, Socket.io</li>
                    <li>Javascript</li>
                    <li>jQuery</li>
                    <li>Python (OpenCV, tkinter, Flask, Bottle)</li>
                    <li>SCSS, CSS</li>
                    <li>HTML</li>
                </ul>
            </div>
        </Grow>
    );
}