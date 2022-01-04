import React from 'react'
import Menu from './Menu'
import './App.css'


// a classe 'Header' é derivada de um react component 
class Header extends React.Component{

  constructor(props){
    super(props); // extendendo a classe do React.Component
  }

  render(){

    return(
    
      <header className="Header">
  
        <h1>{this.props.name}</h1>
        <Menu links={this.props.links}></Menu>
  
      </header>
      
      );

  }

}



export default Header