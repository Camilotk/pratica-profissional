import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Blog from './components/Blog';
import * as serviceWorker from './serviceWorker';

const myPosts = [{
    imagem: "https://images.pexels.com/photos/3880017/pexels-photo-3880017.jpeg",
    autor: "Márcio Santos",
    titulo: "Escalando...",
    texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Ut faucibus semper ex,
    et sagittis mauris lobortis eu.Nulla ex ipsum,
    varius a mattis quis,
    ultricies non leo.Fusce aliquam lorem sit amet
    ullamcorper pulvinar.
    `
  },
  {
    imagem: "https://images.pexels.com/photos/2748019/pexels-photo-2748019.jpeg",
    autor: "Rosana Marques",
    titulo: "Lindo passeio",
    texto: `Donec elit turpis, luctus at orci et, commodo laoreet
    tortor.Donec et quam euismod,
    mollis mauris id,
    congue ipsum.
    `
  },
  {
    imagem: "https://images.pexels.com/photos/3722888/pexels-photo-3722888.jpeg",
    autor: "Beatriz Gomes",
    titulo: "Muito Romântico",
    texto: `Quisque eros ligula, tempus id ultrices sed, ultricies sed
    lorem.Maecenas turpis lectus,
    finibus a semper ac,
    vulputate id ui.
    `
  }
]

const elemento = document.getElementById('root');

ReactDOM.render( 
  <React.StrictMode >
  <Blog posts={myPosts}/>
  </React.StrictMode>,
  elemento
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();