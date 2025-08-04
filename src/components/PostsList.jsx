import { useEffect, useState } from 'react';
import Post from './Post';

function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const dadosSalvos = localStorage.getItem("posts");
    if (dadosSalvos) {
      const dados = JSON.parse(dadosSalvos);
      setPosts(dados);
    }
  }, []);

  function handleDelete(excluir) {
    const novaLista = posts.filter(post => post.id !== excluir);
    setPosts(novaLista);
    localStorage.setItem("posts", JSON.stringify(novaLista));
  }

  return (
    <>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          tipo={post.type}
          titulo={post.titulo}
          descricao={post.descricao}
          data={post.data}
          url={post.url}
          handleDelete={handleDelete}
        />
      ))}
    </>
  );
}

export default PostsList;