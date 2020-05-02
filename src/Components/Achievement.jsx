import React,{Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Achievement extends Component{
    render(){
        return(
<div className="achieveBack">

<div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#zero" data-slide-to="0" class="active"></li>
    <li data-target="#one" data-slide-to="1"></li>
    <li data-target="#two" data-slide-to="2"></li>
  </ol>
  
  <div class="carousel-inner">
    <div class="carousel-item active">
    <Grid>
            <Cell col={12}>
            <div className="row">
              <div className="col-xs-3">
      <img src="ssb.jpeg" class="d-block w-100" alt="..."/>
     
      </div>
      </div>
      </Cell>
      <div className="row">
     
        <div className="resume-right-col2"> 
        <div className="col-xs-3">
          <div className="asd">
         <h4 >SSB Recommended</h4>
            <h6>12 SSB Bangalore</h6> 
            <h5>Got Recommended For Indian Navy on 24th October 2019. One of the Best Moment of my life for which I was Dreaming from Childhood. Always have a passion for Armed Forces and Achieved my path in my first Attempt.</h5> 
             <h5>For Complete Journey you can check
             <a href ="https://www.quora.com/profile/Rohit-Yaduvanshi-15" target="_blank"> Click here</a></h5> 
             </div> 
             </div>
             </div>
             </div>
             
      </Grid>
    </div>
    <div class="carousel-item ">
    <Grid>
    <Cell col={12}>
            <div className="row">
              <div className="col-xs-3">
      <img src="mba.jpeg" width='100%' alt="..."/>
     
      </div>
      </div>
      </Cell>
      <div className="row">
     
     <div className="resume-right-col2"> 
     <div className="col-xs-3">
       <div className="asd">
       <h4>W-OPTEC</h4>
            <h6>Best Project</h6>     
            <h5>Got the  Best Project for Supply Chain Management in W-OPTEC 2019, Created An Android Application for Creating INDIA a stable Supply Chain Management System and Competeted among 25 MBA Groups and won the best Project among all the MBA participants.</h5> 
           
          </div> 
          </div>
          </div>
          </div>
    </Grid>
    </div>
    <div class="carousel-item ">
    <Grid>
            <Cell col={12}>
            <div className="row">
              <div className="col-xs-3">
      <img src="papien.jpeg" class="d-block w-100" width ="200px"alt="..."/>
      <div class="carousel-caption d-none d-sm-block">
      </div>
      </div>
      </div>
      </Cell>
      <div className="row">
     
        <div className="resume-right-col2"> 
        <div className="col-xs-3">
          <div className="asd">
          <h4 >Papientrega</h4>
         
            <h6 >Best Pitch</h6>    
            <div className="ach-grid"> 
            <h5>Best Project Pitch for Helping Hands Application which was created for Old and Physically Disabled People in our Society so that they dont have to Depend on someone for their Daily activities.</h5> 
             </div>
             </div>
             </div>
             </div>
             </div>
      </Grid>
    </div>
  </div>
  

<a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only" >Next</span>
  </a>
  </div>
  </div>
       
        )
   }
}
export default Achievement;