import React from 'react';
import {Grow} from '@material-ui/core';
import LocalPhoneIcon from '@material-ui//icons/LocalPhone';
import EmailIcon from '@material-ui//icons/Email';

const styleIcon = {
    fontSize:'3rem',
    marginLeft:'5%'
};

const styleDetails = {
    fontFamily:'Jura',// 'RighteousRegular',
    fontWeight:'bold',
    letterSpacing:'3px',
    margin:'10px 0 0 20px'
}

export default function Contact({checked}) {
    return (
        <Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? {timeout:1800} : {})}>
            <div style={{
                display: 'contents',
                color:'#fffade',
            }}> 
                <div style={{minWidth:'100%',minHeight:'10vh',display: 'inline-flex'}}>
                    <LocalPhoneIcon style={styleIcon}/>
                    <p style={styleDetails} id="contact">(+40) 747 612 742</p>
                </div>
                <div style={{minWidth:'100%',minHeight:'10vh',display: 'inline-flex'}}>
                    <EmailIcon style={styleIcon} />
                    <p style={styleDetails} id="contact">ancaprodan01@gmail.com</p>
                </div>
            </div>
        </Grow>
    );
}