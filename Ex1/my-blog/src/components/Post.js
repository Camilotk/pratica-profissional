import React from 'react';
import './Blog.css';

export default props =>
  <div className="post">
    <img alt="" src={props.imagem} className="post-imagem" />
    <div>
      <h2 className="post-autor">{props.autor}</h2>
      <h3 className="post-titulo">{props.titulo}</h3>
      <hr/>
      <p>{props.texto}</p>
    </div>
  </div>
