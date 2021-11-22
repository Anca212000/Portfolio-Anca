import React from 'react';
import {Fade} from '@material-ui/core';

const styleInfo = {
    color:'#fffade',
    fontFamily: 'Jura',
    fontWeight:'bold',
    letterSpacing:'1px',
    textAlign:'justify',
    marginRight:'10%',
    marginLeft:'5%',
};

const styleProfilePicture = {
    float: 'left',
    width: '14vh',
    height: '14vh',
    margin:'0 4vh 2vh 0',
    backgroundColor:'salmon',
    borderRadius:'50%',
    boxShadow:'4px 4px 2px aqua, -6px -1px 16px grey, -2px 4px 1px yellow, -4px -2px 2px red, 2px -2px 1px darkorange',
    zIndex:'2',
    opacity: '1',
}

export default function About({checked}) {
    const imgProfile = '/Portfolio-Anca/assets/profile.jpg';

    return (
        <Fade in={checked} {...(checked ? {timeout:1500} : {})}>
            <div style={{
                minHeight:'20vh'
            }}> 
                <p style={styleInfo} id="about">
                    <span style={styleProfilePicture}>
                        <img src={imgProfile} style={{objectFit:'cover',width:'100%',height:'100%',borderRadius:'50%',zIndex:'2'}}/>
                    </span>
                    I am student at Computer Science right now in my fourth year and I like creating stuffs that involves web development. I am learning fast new technologies related to this field and I wish having a cariere depending about this domain, using my knowledgies. I have a passion to be up to date with latest releases about web technologies and learning new informations. 
                    <br/><br/>I like studying Backend and Frontend web development in my spare time, out of school (I am self-learning person, I like independent working). I have talent at drawing and I can make a impressive design using my sketches along with specialized programs. I would like to share my ideas, creativity and originality in creating web/mobile apps. I am studying for a Computer Science Degree.
                    <br/><br/>I am a hardworking, punctual person, seriously and very fair person. I don't like copy things, I like to learn, making them on my own.
                    <br/><br/>
                    Language skills:<br/>
                    English - middle to advanced<br/>
                    French – begginer
                </p>
            </div>
        </Fade>
    );
}