import { useState } from 'react';
import './App.css'


function App() {

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  return (
    <>   
    <main className="container">
      
      <article className='article'>

        <h1>Painel de Gerenciamento</h1>

        <form className='form'>

          <h3>Novo Post</h3>

           <label htmlFor="titulo">Titulo</label>
           <input type="text" id="titulo" value={titulo}
            onChange={(e) =>{
            setTitulo(e.target.value);  
           }}/>

           <label htmlFor="descricao">Descrição</label>
           <textarea id= "descricao" value={descricao}
            onChange={(e) => {
            setDescricao(e.target.value);
           }}
           
           />
           

        </form>
      </article>
    </main>   
    </>
  )
}

export default App
