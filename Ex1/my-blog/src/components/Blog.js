import React from 'react';
import Post from './Post';
export default props =>
<div>
  {
    props.posts.map(post =>
      <Post
        imagem={post.imagem}
        autor={post.autor}
        titulo={post.titulo}
        texto={post.texto}
      />
    )
  }
 </div>