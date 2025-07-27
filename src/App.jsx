import { useState } from 'react';
import './App.css'


function App() {

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [url, setUrl] = useState('');
  const [data, setData] = useState('');

  return (
    <>   
    <main className="container">
      
      <article className='article'>

        <h1>Painel de Gerenciamento</h1>

        <form className='form'>

          <h3>Novo Post</h3>

           <label htmlFor="titulo"> Titulo </label>
           <input type="text" id="titulo" value={titulo}
            onChange={(e) =>{
            setTitulo(e.target.value);}}
            placeholder='Titulo'
           />

           <label htmlFor="descricao"> Descrição </label>
           <textarea id= "descricao" value={descricao}
            onChange={(e) => {
            setDescricao(e.target.value);}}
            placeholder='Descrição' 
            />

           <label htmlFor="url"> Url da imagem de capa </label>
           <input type="url" id="url" value={url}
           onChange={(e) => {
            setUrl(e.target.value);}}
            placeholder='Url da imagem de capa'
           />

           <label htmlFor="dataDePublicacao"> Data de publicação</label>
           <input type="date" id="dataDePublicacao" value={data}
           onChange={(e) => {setData(e.target.value);
           }}/>
           

        </form>
      </article>
    </main>   
    </>
  )
}

export default App
