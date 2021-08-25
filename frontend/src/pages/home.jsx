import React,{useState, useEffect} from 'react';

import axios from 'axios';
// import { Container } from './styles';

function Home() {
    const [dataApi, setDataApi] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8080/api/get/produtos').then(response => setDataApi(response.data))
  
    }, [])
  
    return (
      <div>
          {dataApi.map(item => (
              <div key={item.id}>
                  <p><b>Nome:</b> {item.nome}
                  <a href={`/compras/${item.nome}`}>comprar esse item</a></p>
              </div>
          ))}

          <a href="/compras">compras</a>
      </div>
    );
}

export default Home;