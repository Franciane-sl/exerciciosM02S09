import style from './Post.module.css';

function Post({ tipo, titulo, descricao, data, url }) {
  return (
    <section className={style.sectionPost}>
      <img src={url} alt={`Imagem do post ${titulo}`} />
      <div className={style.cardContent}>
        <span>{tipo}</span>
        <h2>{titulo}</h2>
        <p>{descricao}</p>
        <p><strong>Data de publicação:</strong> {data}</p>
      </div>
    </section>
  );
}

export default Post;
