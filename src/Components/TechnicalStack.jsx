import React,{Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class TechnicalStack extends Component{
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
      }
      toggleCategories() {
   
        if(this.state.activeTab === 1){
            return(
               
           <div className="stack-grid1">
           <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="html.png"
                alt="avatar"
                 style={{height: '210px',width:'210px',margin: 'auto'}}
                 className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>HTML</h4>
                         <p>Used to create electronic documents (called pages) that are displayed on the World Wide Web.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star"></span>
                     </div>
          </Card>
          </div>
          </div>

         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="css.png"
                alt="avatar"
                    style={{height: '210px',width:'210px',margin: 'auto'}}
                    className="portfolio-img"
                    />
                         <div className="portfolio-text">
                             <h4 style={{padding:'1em'}}>CSS</h4>
                             <p>Used CSS for describing the presentation of Web pages, including colors, layout, and fonts.</p>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star"></span>
                         </div>
      </Card>
            </div>
            </div>
        
            <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="js.png"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Javascript</h4>
                         <p>Used to create responsive, interactive elements for web pages, enhancing the user experience.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
            </div>

            <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
 <img
                src="bootstrap.png"
                alt="avatar"
                    style={{height: '210px',width:'210px',margin: 'auto'}}
                    className="portfolio-img"
                    />
                         <div className="portfolio-text">
                             <h4 style={{padding:'1em'}}>Bootstrap</h4>
                             <p>Used to design websites faster and easier with the predefined Components of Bootstrap Library.</p>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star"></span>
                         </div>
      </Card>
        </div>
            </div>

            <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="react.png"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>React</h4>
                         <p>Used to create web applications that can change data, without reloading the page with more advanced projects.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
        </div>
        </div>
        </div>
      
        )}


 else if(this.state.activeTab === 0) {
                return(
                    <div className="stack-grid1">
                    <div className="stack-grid2">
                     <div className="col-xs-3">
                     <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="docker.jpeg"
                alt="avatar"
                style={{height: '210px',width:'200px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Docker</h4>
                         <p>Used to create, deploy, and run applications by using containers and docker Images that can be deployed.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="aws.jpeg"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>AWS</h4>
                         <p>Used to Run web and application servers in the cloud to host dynamic websites with different Features.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="mongo.jpeg"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>MongoDB</h4>
                         <p>Used to  implement a data store that provides high performance, high availability, and automatic scaling.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="swagger.jpeg"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Swagger</h4>
                         <p>Used to design APIs and improving the work with web services and microservices by using their Endpoints.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star "></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="oauth.jpeg"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Oauth</h4>
                         <p>Used to provide delegated authorization framework for REST/APIs and also provides Security.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="netflix.jpeg"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Netflix</h4>
                         <p>Used to provides runtime containers, libraries and services that power microservices with Zuul Eureka and Config.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="git.jpeg"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Git</h4>
                         <p>Used for tracking changes in computer files and coordinating work using Github Repository.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="html.png"
                alt="avatar"
                 style={{height: '210px',width:'210px',margin: 'auto'}}
                 className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>HTML</h4>
                         <p>Used to create electronic documents (called pages) that are displayed on the World Wide Web.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star"></span>
                     </div>
          </Card>
          </div>
          </div>

         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="css.png"
                alt="avatar"
                    style={{height: '210px',width:'210px',margin: 'auto'}}
                    className="portfolio-img"
                    />
                         <div className="portfolio-text">
                             <h4 style={{padding:'1em'}}>CSS</h4>
                             <p>Used CSS for describing the presentation of Web pages, including colors, layout, and fonts.</p>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star"></span>
                         </div>
      </Card>
            </div>
            </div>
        
            <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="js.png"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Javascript</h4>
                         <p>Used to create responsive, interactive elements for web pages, enhancing the user experience.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
            </div>

            <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
 <img
                src="bootstrap.png"
                alt="avatar"
                    style={{height: '210px',width:'210px',margin: 'auto'}}
                    className="portfolio-img"
                    />
                         <div className="portfolio-text">
                             <h4 style={{padding:'1em'}}>Bootstrap</h4>
                             <p>Used to design websites faster and easier  with bootstrap Components for east access.</p>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star"></span>
                         </div>
      </Card>
        </div>
            </div>

            <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="react.png"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>React</h4>
                         <p>Used to create web applications that can change data, without reloading the page.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
                <img
                src="jenkins.png"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Jenkins</h4>
                         <p>Used for Continuous Integration purpose and easy deployment of Application withour manual interface.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
        </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="groovy.jpeg"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Groovy</h4>
                         <p>Groovy is a Java enhancer because it provides greater flexibility and even introduces special features to applications.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="maven.png"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Maven</h4>
                         <p>Used to build and manage projects and provide autodepedency to projects in the POM file.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="hibernate.png"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Hibernate</h4>
                         <p>Used to reduce lines of code by maintaining object-table mapping itself and returns result to application in form of Java objects.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="spring.jpeg"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Spring</h4>
                         <p>Used to embrace and employ the idea of "Inversion of Control and Dependency injection" in an efficient, easy and best possible ways.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            
            <img
                src="restapi.jpeg"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>RestAPI</h4>
                         <p>Used to take advantage of existing protocols and provide Microservices for Functioning</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="eclipse.jpeg"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Eclipse</h4>
                         <p>Used to used to develop rich client applications using the Java Language.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="jdbc.jpeg"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>JDBC</h4>
                         <p>Used to communicate Java application to database in database independent and platform independent manner.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="junit.jpeg"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Junit</h4>
                         <p>Used as testing framework along with Java Programming Language.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="tomcat.jpeg"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>HTML</h4>
                         <p>Used to  to execute Java servlets and render web pages that use Java Server page coding.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="mysql.jpeg"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>MY SQL</h4>
                         <p>Used for a wide range of purposes, including data warehousing, e-commerce, and logging applications.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            
            <img
                src="postgre.jpeg"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Postgre</h4>
                         <p>Used to build applications, administrators to protect data integrity and build fault-tolerant environments.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="scala.jpeg"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Scala</h4>
                         <p>Used to do performance testing of microservices and their respective Endpoints.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="scala.jpeg"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>PHP</h4>
                         <p>Used to interact with many different database languages including MySQL.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="java.jpeg"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Java</h4>
                         <p>Used to create complete applications that can run on  distributed across servers and clients in a network.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="gatling.jpeg"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Gatling</h4>
                         <p>Used to Load Testing with different scenarios and reports with the Reponse time and requests.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="springboot.jpeg"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Spring Boot</h4>
                         <p>Used to to reduce Development, Unit Test time and to ease the development of Production ready web applications.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="postman.logo.png"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Postman</h4>
                         <p>Used to dissect RESTful APIs made by others or test ones you have made yourself using endpoints.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
        
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
            <img
                src="lighthouse.jpeg"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Lighthouse</h4>
                         <p>Used to did Frontend Testing with different Parameters like performance.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
            </div>
            </div>
            
        </div>)}

         else if(this.state.activeTab === 2) {
          return (
            <div className="stack-grid1">
            <div className="stack-grid2">
             <div className="col-xs-3">
             <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
        <img
            src="swagger.jpeg"
            alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Swagger</h4>
                         <p>Used to design APIs and improving the work with web services and microservices by using their Endpoints.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star "></span>
                     </div>
  </Card>
        </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
        <img
            src="oauth.jpeg"
            alt="avatar"
            style={{height: '210px',width:'210px',margin: 'auto'}}
            className="portfolio-img"
            />
                 <div className="portfolio-text">
                     <h4 style={{padding:'1em'}}>Oauth</h4>
                     <p>Used to provide delegated authorization framework for REST/APIs.</p>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star "></span>
                     <span class="fa fa-star "></span>
                     <span class="fa fa-star "></span>
                     <span class="fa fa-star"></span>
                 </div>
</Card>
        </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
        <img
              src="netflix.jpeg"
              alt="avatar"
              style={{height: '210px',width:'210px',margin: 'auto'}}
              className="portfolio-img"
              />
                   <div className="portfolio-text">
                       <h4 style={{padding:'1em'}}>Netflix</h4>
                       <p>Used to provides runtime containers, libraries and services that power microservices.</p>
                       <span class="fa fa-star checked"></span>
                       <span class="fa fa-star checked"></span>
                       <span class="fa fa-star checked"></span>
                       <span class="fa fa-star checked"></span>
                       <span class="fa fa-star"></span>
                   </div>
</Card>
        </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
        <img
              src="maven.png"
              alt="avatar"
              style={{height: '210px',width:'210px',margin: 'auto'}}
              className="portfolio-img"
              />
                   <div className="portfolio-text">
                       <h4 style={{padding:'1em'}}>Maven</h4>
                       <p>Used to used to build and manage projects and provide dependency using the POM file.</p>
                       <span class="fa fa-star checked"></span>
                       <span class="fa fa-star checked"></span>
                       <span class="fa fa-star checked"></span>
                       <span class="fa fa-star checked"></span>
                       <span class="fa fa-star"></span>
                   </div>
</Card>
        </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
     
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
        <img
            src="hibernate.png"
            alt="avatar"
            style={{height: '210px',width:'210px',margin: 'auto'}}
            className="portfolio-img"
            />
                 <div className="portfolio-text">
                     <h4 style={{padding:'1em'}}>Hibernate</h4>
                     <p>Used to reduce lines of code by maintaining object-table mapping itself and returns result to application in form of Java objects.</p>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star"></span>
                 </div>
</Card>
        </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
        <img
            src="spring.jpeg"
            alt="avatar"
            style={{height: '210px',width:'210px',margin: 'auto'}}
            className="portfolio-img"
            />
                 <div className="portfolio-text">
                     <h4 style={{padding:'1em'}}>Spring</h4>
                     <p>Used to embrace and employ the idea of "Inversion of Control and Dependency injection" in an efficient, easy and best possible ways.</p>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star"></span>
                 </div>
</Card>
        </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
       
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
        <img
            src="restapi.jpeg"
            alt="avatar"
            style={{height: '210px',width:'210px',margin: 'auto'}}
            className="portfolio-img"
            />
                 <div className="portfolio-text">
                     <h4 style={{padding:'1em'}}>RestAPI</h4>
                     <p>Used to take advantage of existing protocols and microservices with their respective endpoints.</p>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star"></span>
                 </div>
</Card>
        </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
        <img
           src="eclipse.jpeg"
           alt="avatar"
           style={{height: '210px',width:'210px',margin: 'auto'}}
           className="portfolio-img"
           />
                <div className="portfolio-text">
                    <h4 style={{padding:'1em'}}>Eclipse</h4>
                    <p>Used to develop rich client applications in Java anfd provide functionality support.</p>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                </div>
</Card>
        </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
        
        <img
           src="jdbc.jpeg"
           alt="avatar"
           style={{height: '210px',width:'210px',margin: 'auto'}}
           className="portfolio-img"
           />
                <div className="portfolio-text">
                    <h4 style={{padding:'1em'}}>JDBC</h4>
                    <p>Used to communicate Java application to database in database independent and platform independent manner.</p>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                </div>
</Card>
        </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
        <img
             src="junit.jpeg"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Junit</h4>
                         <p>Used as testing framework along with Java Programming Language.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
        </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
        <img
            src="tomcat.jpeg"
            alt="avatar"
            style={{height: '210px',width:'210px',margin: 'auto'}}
            className="portfolio-img"
            />
                 <div className="portfolio-text">
                     <h4 style={{padding:'1em'}}>Tomcat</h4>
                     <p>Used to  to execute Java servlets and render web pages that use Java Server page coding.</p>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star"></span>
                 </div>
</Card>        </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
     
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
        <img
           src="scala.jpeg"
           alt="avatar"
           style={{height: '210px',width:'210px',margin: 'auto'}}
           className="portfolio-img"
           />
                <div className="portfolio-text">
                    <h4 style={{padding:'1em'}}>Scala</h4>
                    <p>Used to do performance testing of microservices and their endpoints with respective reports.</p>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                </div>
</Card>
        </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
        <img
            src="scala.jpeg"
            alt="avatar"
            style={{height: '210px',width:'210px',margin: 'auto'}}
            className="portfolio-img"
            />
                 <div className="portfolio-text">
                     <h4 style={{padding:'1em'}}>PHP</h4>
                     <p>Used to interact with many different database languages including MySQL.</p>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star"></span>
                 </div>
</Card>
        </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
        <img
            src="java.jpeg"
            alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Java</h4>
                         <p>Used to create complete applications that can run on distributed across servers and clients in a network.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
        </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
      
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
        <img
            src="springboot.jpeg"
            alt="avatar"
            style={{height: '210px',width:'210px',margin: 'auto'}}
            className="portfolio-img"
            />
                 <div className="portfolio-text">
                     <h4 style={{padding:'1em'}}>SpringBoot</h4>
                     <p>Used to to reduce Development, Unit Tes to ease the development of Production ready web applications.</p>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star"></span>
                 </div>
</Card>
        </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
        <img
            src="postman.logo.png"
            alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Postman</h4>
                         <p>Used to dissect RESTful APIs made by others or test ones you have made yourself.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
        </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
        
        <img
            src="lighthouse.jpeg"
            alt="avatar"
            style={{height: '210px',width:'210px',margin: 'auto'}}
            className="portfolio-img"
            />
                 <div className="portfolio-text">
                     <h4 style={{padding:'1em'}}>HTML</h4>
                     <p>Used to did Frontend Testing with different Parameters like performance .</p>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star"></span>
                 </div>
</Card>
        </div>
        </div>


    </div>)}

        else if(this.state.activeTab === 3) {
          return (
            <div className="stack-grid1">
            <div className="stack-grid2">
             <div className="col-xs-3">
             <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
        <img
            src="docker.jpeg"
            alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Docker</h4>
                         <p>Used to create, deploy, and run applications by using containers and docker images to deploy on aws.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
        </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
        
        <img
            src="aws.jpeg"
            alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>AWS</h4>
                         <p>Used to Run web and application servers in the cloud to host dynamic websites.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star "></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
        </div>
        </div>
        </div>
          )
        }

        else if(this.state.activeTab === 4) {
            return(
                <div className="stack-grid1">
                <div className="stack-grid2">
                 <div className="col-xs-3">
            
                 <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
        <img
            src="mongo.jpeg"
            alt="avatar"
            style={{height: '210px',width:'210px',margin: 'auto'}}
            className="portfolio-img"
            />
                 <div className="portfolio-text">
                     <h4 style={{padding:'1em'}}>MongoDB</h4>
                     <p>Used to  implement a data store that provides high performance, high availability, and automatic scaling.</p>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star "></span>
                     <span class="fa fa-star "></span>
                     <span class="fa fa-star"></span>
                 </div>
</Card>
        </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
        
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
        <img
            src="mysql.jpeg"
            alt="avatar"
            style={{height: '210px',width:'210px',margin: 'auto'}}
            className="portfolio-img"
            />
                 <div className="portfolio-text">
                     <h4 style={{padding:'1em'}}>MY SQL</h4>
                     <p>Used for a wide range of purposes, including data warehousing, e-commerce, and logging applications.</p>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star"></span>
                 </div>
</Card>
        </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">

         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
        <img
            src="postgre.jpeg"
            alt="avatar"
            style={{height: '210px',width:'210px',margin: 'auto'}}
            className="portfolio-img"
            />
                 <div className="portfolio-text">
                     <h4 style={{padding:'1em'}}>Postgres</h4>
                     <p>Used to build applications, administrators to protect data integrity and build fault-tolerant environments.</p>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star"></span>
                 </div>
</Card>
        </div>
        </div>
    </div>)}

else if(this.state.activeTab === 5) {
    return(
        <div className="stack-grid1">
             <div className="row"></div>
        <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
<img
    src="git.jpeg"
    alt="avatar"
    style={{height: '210px',width:'210px',margin: 'auto'}}
    className="portfolio-img"
    />
         <div className="portfolio-text">
             <h4 style={{padding:'1em'}}>Git</h4>
             <p>Used for tracking changes in computer files and coordinating work using the repository.</p>
             <span class="fa fa-star checked"></span>
             <span class="fa fa-star checked"></span>
             <span class="fa fa-star checked"></span>
             <span class="fa fa-star checked"></span>
             <span class="fa fa-star"></span>
         </div>
</Card>
</div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">

         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
    <img
    src="jenkins.png"
    src="jenkins.png"
                alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Jenkins</h4>
                         <p>Used for Continuous Integration purpose and deploy application without manual interface.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
     </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>

<img
    src="groovy.jpeg"
    alt="avatar"
    style={{height: '210px',width:'210px',margin: 'auto'}}
    className="portfolio-img"
    />
         <div className="portfolio-text">
             <h4 style={{padding:'1em'}}>Groovy</h4>
             <p>Groovy is a Java enhancer because it provides greater flexibility and even introduces special features to applications.</p>
             <span class="fa fa-star checked"></span>
             <span class="fa fa-star checked"></span>
             <span class="fa fa-star checked"></span>
             <span class="fa fa-star checked"></span>
             <span class="fa fa-star"></span>
         </div>
</Card>
  </div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>

<img
    src="gatling.jpeg"
   alt="avatar"
   style={{height: '210px',width:'210px',margin: 'auto'}}
   className="portfolio-img"
   />
        <div className="portfolio-text">
            <h4 style={{padding:'1em'}}>Gatling</h4>
            <p>Used to Load Testing of our microservices endpoints with different reports and requests time .</p>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
        </div>
</Card>
</div>
         </div>
         <div className="stack-grid2">
         <div className="col-xs-3">
         <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
<img
    src="springboot.jpeg"
    alt="avatar"
                style={{height: '210px',width:'210px',margin: 'auto'}}
                className="portfolio-img"
                />
                     <div className="portfolio-text">
                         <h4 style={{padding:'1em'}}>Springboot</h4>
                         <p>Used to to reduce Development, Unit Test and  to ease the development of Production ready web applications.</p>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star"></span>
                     </div>
  </Card>
</div>
</div>
</div>)}

      }
    
    
    
      render() {
        return(
          <div>
           <div className="rows">
               <div className="col-xs-3">  
            <Tabs className="col-xs-3"activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
              <Tab className="col-xs-3">            All Domains</Tab>
              <Tab className="col-xs-3">Front</Tab>
              <Tab className="col-xs-3">Back</Tab>
              <Tab className="col-xs-3">Cloud</Tab>
              <Tab className="col-xs-3">Database</Tab>
              <Tab className="col-xs-3">Config</Tab>
            </Tabs>
            </div>
            </div>
    
    
              <Grid>
                <Cell col={12}>
                <div className="rows">  
           <div className="col-xs-3">
                  <div >{this.toggleCategories()}</div>
                  </div>
                  </div>
                </Cell>
              </Grid>
    
    
          </div>
        )
      }
    }      

export default TechnicalStack;