import './App.css'
import './styles/header.css'
import { Cartao } from './components/Cartao'
import { useState, useEffect } from 'react';

import './styles/Cartao.css'

  
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  //simular carregamento da pagina
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        
        <img
          src="./onepieceloading.png" 
          alt="onepiece"
          className="loading-spinner" 
        />
        
      </div>
    );
  }

  return (
    <>
    <main>
    <header className='header'>
      <img src="/logo.png" alt="" />
    </header>
    <div className='grid'>
      <Cartao
        foto='/luffy.png'
        nome='Monkey D. Luffy'
        funcao='Capitão do bando dos Chapéus de Palha'
        />
      <Cartao
        foto='/nami.png'
        nome = 'Nami'
        funcao = 'Navegadora do bando do Chapéus de Palha'
      />
      <Cartao 
        foto='/zoro.png'
        nome = 'Zoro'
        funcao = 'Espadachin do bando'
      />
      <Cartao 
        foto='/sanji.png'
        nome = 'Sanji'
        funcao = 'Cozinheiro do bando'
      />
      {/* <button onClick={()=>{
        setContador(contador+1);
      }}>{contador} Likes</button> */}
      </div>
      </main>
    </>
  )
}

export default App
