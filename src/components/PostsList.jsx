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

  return (
    <>
      {posts.map((post, index) => (
        <Post
          key={index}
          tipo={post.type}
          titulo={post.titulo}
          descricao={post.descricao}
          data={post.data}
          url={post.url}
        />
      ))}
    </>
  );
}

export default PostsList;