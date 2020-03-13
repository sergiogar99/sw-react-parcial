import React, { Component } from 'react';
import "./Styles.css"

class Films extends Component {


  state = {
    view: false,
  }

  onClick = () => {
    this.setState({view: !this.state.view})
  }
  
  render(){
    return (
        <div>
            
          <div className = "card">

            <div className="image" onClick = {() =>this.onClick()}>
              
              <img src={this.props.filmsInfo.image} />

                <div className="imagetext">
                  
                  <span><b>{this.props.filmsInfo.title} </b></span>
                  <br></br>
                  <span>Episode: </span>
                  <span>{this.props.filmsInfo.episode_id} </span>

                </div>

            </div>
            
          </div>


          {this.state.view?
          <div className="info_film">{

              <div className="image">
                <img src={this.props.filmsInfo.image} />
                <div className="imagetext">
                  <span><b>Title:</b></span>
                  <span>{this.props.filmsInfo.title} </span>
                  <br></br>
                  <span><b>Episode: </b></span>
                  <span>{this.props.filmsInfo.episode_id} </span>
                  <br></br>
                  <span><b>Director: </b></span>
                  <span>{this.props.filmsInfo.director} </span>
                  <br></br>
                  <span><b>Release: </b></span>
                  <span>{this.props.filmsInfo.release_date} </span>
                  <br></br>
                  <span><b>Begining: </b></span>
                  <span>{this.props.filmsInfo.opening_crawl} </span>

                  

                  <div className="main_content">
    
                  {this.props.filmsInfo.characters.map(item => {
                    return (
                    <div>
                      <span>name</span>
                      <p>{item.release_date}</p>
      
                      <span>actor</span>
                      <p>{item.actor}</p>
      
                      <img className = "chaimg" src={item.image} />
                      
                    </div>
                    );
                  })}  

                </div>


              </div>
                    
    
          </div>
          
          }</div>:null}
           
        </div>
    )
}
  
};

export {Films as default}
