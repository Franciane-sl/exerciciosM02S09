import { useState } from 'react';
import './App.css'
import {ToastContainer, toast} from "react-toastify";


function App() {

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [url, setUrl] = useState('');
  const [data, setData] = useState('');
  const [type, setType] = useState('');

  function SalvarNovoPost(e) {
    e.preventDefault();

    const dataAtual= new Date();
    dataAtual.setHours(0, 0, 0, 0)

    const dataSelecionada = new Date(data);

    if (titulo === "") {
      toast.error("O titulo não pode está vazio.");

    }else if(descricao === "") {
      toast.error("A descrição não pode está vazia.")

    }else if(!url.startsWith('http://') && !url.startsWith('https://')){
      toast.error(" A URL da imagem deve começar com htpp:// ou htpps://")

    }else if(type == ""){
      toast.error(" Por favor, selecione uma categoria.")

    }else if(dataSelecionada < dataAtual) {
      toast.error("A data da publicação deve está no presente ou no futuro.")

    }else{
      toast.success("Post criado com sucesso.")
    }
    
    
  
  }

  return (
    <>   
    <main className="container">
      
      <article className='article'>

        <h1>Painel de Gerenciamento</h1>

        <form className='form' onSubmit={SalvarNovoPost}>

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

           <label htmlFor="dataDePublicacao"> Data de publicação </label>
           <input type="date" id="dataDePublicacao" value={data}
           onChange={(e) => {setData(e.target.value);
           }}/>

           <label htmlFor="categoria"> Categoria </label>
           <select name="categoria" id="categoria"
           value={type} onChange={(e) => {setType(e.target.value);
           }}>
            <option value=""> Selecione uma opção </option>
            <option value="artigo"> Artigo </option>
            <option value="noticia"> Notícia </option>
            <option value="tutorial"> Tutorial </option>
            <option value="entrevista"> Entrevista </option>

          </select>
          <button type='submit'> Salvar </button>
      
        </form>
        <ToastContainer />
      </article>
    </main>   
    </>
  )
}

export default App
