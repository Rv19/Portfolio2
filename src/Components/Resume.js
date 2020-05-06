import React,{Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';

class Resume extends Component{
    render(){
        return(
            
            <Grid>
            <Cell col={4}>
            <div className="rows">
                <div className="col-xs-3">
              <div style={{textAlign:'center'}}>
              <img
              className="avatar-img"
                src="profile.jpeg"
                alt="avatar"
                style={{height: '300px',width:'300px',margin:'auto'}}
               />
            </div>
            </div>
            <div className="col-xs-3">
    <div style={{textAlign:'center'}}>
            <h2>Rohit Yadav</h2>
            <h4 style={{color: 'grey'}}>Developer</h4>
             </div>
             <div classname="contact-gridr">
            <hr  style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <p>A Developer who soon going to a Officer in Indian Navy.I started doing Development from Androif Development and then I shift towards the web Application.I created many applications all for Web and Mobile both.I love to take part in hackathons and currently placed in Publicis Sapient and enhancing my technical Knowledge and waiting for call from Indian Navy.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <h5>Address</h5>
            <p>236 - A Shyam Enclave Panchyawala, Jaipur, Rajasthan</p>
            <h5>Phone</h5>
            <p>8428250621</p>
            <h5>Email</h5>
            <p>rohityadavrv19@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>  
            </div>
            </div>
            </div>
                </Cell>
                
            <Cell className="resume-right-col" col={6} >
            <div className="rows">
                <div className="col-xs-3">
            <Education/>
            </div>
            </div>
           
                </Cell> 
            </Grid>
         
          
        )
    }
}
export default Resume;

