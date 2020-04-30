import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Landingpage from './Landingpage';
import Achievement from './Achievement';
import Contactme from './Contactme';
import Projects from './Projects';
import Resume from './Resume';
import TechnicalStack from './TechnicalStack'


const Main = () => (
  <Switch>
    <Route exact path="/" component={Landingpage} />
    <Route path="/achievement" component={Achievement} />
    <Route path="/technicalStack" component={TechnicalStack}/>
    <Route path="/contact" component={Contactme} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;