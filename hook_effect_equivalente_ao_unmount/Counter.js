import React, { useState, useEffect } from 'react';

function Counter(props){

    const [count, setCount] = useState(props.count);
    // o array no final indica quais variáveis o useEffect vai ficar escutando, para que caso haja alguma modificação nessa variáveis, ele execute o useEffect
    // nessa ocasião, ele só irá ser executado uma vez 
    useEffect(()=>{

        setCount(parseInt(localStorage.getItem("count")));

        return () => {

            console.log('Não tem mais contador!'); // este return funciona como um componentWillUnmount

            //a função retornada só será executada quando o componente for destruido
        }

    },[]);


    useEffect(()=> { // useEffect será chamado em duas ocasiões: quando o componente for criado(didmount) e quando for atualizado(didupdate)

        document.title = count
        localStorage.setItem("count", count);

    });

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
        
//         // para o exemplo do componentDidMount() 
//         // comentar as duas linhas acima

//         this.state = { count: 0 };
//         this.add = this.add.bind(this);
        

//     }

//     count = 1;

//     add(){

//         this.setState((state) => {return {count: state.count + 1}}, () => {
//             console.log(this.state) 
//         });
              
//     };



//     componentDidMount(){

//         document.title = this.state.count;
//         this.setState(JSON.parse(localStorage.getItem('state')));

//     }

//     componentDidUpdate(){
//         document.title = this.state.count
//         // assim eu não vou ter o local  localStorage.setItem linkado com o setState e isso é uma coisa boa, porque no novo modelo não temos o setState
//         localStorage.setItem("state", JSON.stringify(this.state))
//     }

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
