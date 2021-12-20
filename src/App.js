import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
display: flex;
align-items: center;
padding-top: 5rem;
flex-direction: column;

`;

const Boton = styled.button`

background-color: #C237DB;
background-size: 300px;
font-family: Arial, Helvetica, Sans-serif;
color: black;
margin-top: 80px;
padding: 1rem 3rem;
font-size: 2rem;
border: 4px solid purple;
border-radius: .8rem;


:hover {
  cursor: pointer;
  background-size:400px;
  transition: 0.1s;
  background-color:#8C004B; 
  
}

`;

function App() {

  // state de frases
  const [frase, guardarFrase] = useState({});

    const consultarAPI = async () => {
      const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
      const frase = await api.json();
      guardarFrase(frase[0]);

    }

    // Cargar una frase
    useEffect(() => {
      consultarAPI()
    }, []);


  return (
    <Contenedor>
      <Frase
        frase={frase}
      />
      <Boton
      onClick={consultarAPI}
      >
        Obtener Frase
      </Boton>
   </Contenedor>
  );
}

export default App;
