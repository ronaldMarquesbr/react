import React, { useState } from 'react';

function Counter(props){

    const [count, setCount] = useState(props.count);

    function add(){

        console.log('atualizar');
        setCount(count + 1); // atualizando o count

    }

    return(

        <div>
            <h1>Counter: {count}</h1>
            <button onClick={add} >add</button>
        </div>

    );

}

// class Counter extends React.Component{

//     constructor(props){

//         super(props);

//         this.state = { count: this.props.count };
//         this.add = this.add.bind(this);


        
//         // para o exemplo do componentDidMount() 
//         // comentar as duas linhas acima

//         // this.state = { count: 0 };
//         // this.add = this.add.bind(this);
        

//     }

//     count = 1;

//     add(){

//         this.setState((state) => {return {count: state.count + 1}}, () => {
//             console.log(this.state)

//             // para o exemplo do componentDidMount() 
//             // localStorage.setItem("state", JSON.stringify(this.state));

//         });
              
//     };

//     // shouldComponentUpdate(){

//         // return false; 
//         // não sofre update, ou seja, o método render não é atualizado

//     // }

//     // componentDidMount(){

//     //     this.setState(JSON.parse(localStorage.getItem('state')));

//     // }

//     // componentWillUnmount(){ // será chamado sempre que o componente for removido da tela



//     // }

//     render(){

//         return (
//             <div>
//                 <h1>Counter: {this.state.count}</h1>
//                 <button onClick = {this.add}>add</button>
//             </div>
//         );

//     };

// };


export default Counter
