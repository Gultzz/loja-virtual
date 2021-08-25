import React from 'react';

import { useParams } from 'react-router-dom'

// import { Container } from './styles';

function Compras() {

  let { nome } = useParams()
  return(
      <div>
          <h1>compras</h1>
          <h3>{nome}</h3>

          <a href="/">home</a>
      </div>
  );
}

export default Compras;