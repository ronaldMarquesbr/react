// const root = document.querySelector('#root');
// const element = React.createElement('h1', {id: 'titulo principal'}, 'Hello World'); 
// a Função de cima irá receber 3 parâmetros
// 1º -> nome da tag
// 2º -> parâmetros passarei para a div
// 3º -> conteúdo ou os filhos
// ReactDOM.render(element, root);
// recebe dois parâmetros, o primeiro é o elemento, o segundo é onde se deseja renderizar o elemento

const root = document.querySelector('#root');

const t1 = React.createElement('h1', {id: 'titulo principal'}, 'hello world');
const t2 = React.createElement('h2', {id: 'titulo complementar'}, 'subtitulo');

const headline = React.createElement('div', null, t1, t2);

ReactDOM.render(headline, root);