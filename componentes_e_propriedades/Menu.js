import React from 'react';

function Menu(props){

    return(<ul className="menu">{props.links.map((link, index) => <li key={index}>{link}</li>)}</ul> // poderia fazer diferente, apenas adicionando o return dentro do map
  
    );
  
  }

export default Menu