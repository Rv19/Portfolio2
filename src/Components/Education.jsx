import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
        <div className="rows">
          <div className="col-xs-3">
          <img
                src="Resume.jpeg"
                alt="avatar"
               className="col-xs-3"
               style={{height: '100%',width:'100%',margin:'auto'}}
                 />
          </div>
          </div>
    )
  }
}

export default Education;
