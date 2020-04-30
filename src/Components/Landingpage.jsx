import React,{Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Experience from './Experience';
var ScrollArea = require('react-scrollbar');

class Landingpage extends Component{
    render(){
        return(
         
            <div class="container" style={{width: '100%', margin: 'auto'}}>
         <Grid className="landing-grid">
          <Cell col={12}>
      
          <div className="rows">
           
          <div className="banner-text">
          <div className="col-xs-3">
            <img
              src="Rohit.png"
              alt="avatar"
              className="avatar-img"
              />
           
           
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | Postgres | SpringBoot</p>
          </div>
          <Experience/>
    
            </div>
            </div>
      
        
          </Cell>
        </Grid>
      </div>
     
        )
   } 
}
export default Landingpage;