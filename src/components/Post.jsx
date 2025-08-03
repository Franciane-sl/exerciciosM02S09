
import { useEffect, useState } from 'react';
import style from './Post.module.css';

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const dadosSalvos = localStorage.getItem("posts");
    if (dadosSalvos) {
      const dados = JSON.parse(dadosSalvos);
      console.log("DADOS CARREGADOS:", dados);
      setPosts(dados);
    }
  }, []);

  return (
    <>
      {posts.map((post, index) => (
        <section className={style.sectionPost} key={index}>
          <img src={post.url} alt={`Imagem do post ${post.titulo}`} />
          <div className={style.cardContent}>
            <span>{post.type}</span>
            <h2>{post.titulo}</h2>
            <p>{post.descricao}</p>
            <p><strong>Data de publicação:</strong> {post.data}</p>
          </div>
        </section>
      ))}
    </>
  );
}

export default Post;
